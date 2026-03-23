/**
 * Chat Widget Component
 * Main React component for the AI operator chat interface
 * Rebuilt with simplified CSS-based scrolling
 */

// Versioned imports to bypass stale immutable caches
import { callGeminiAPI } from "./api-service.js?v=20250216120000";
import { MessageSender, formatMarkdown } from "./utils.js?v=20250216120000";
import { WELCOME_MESSAGE } from "./config.js?v=20250216120000";

// Access React from the global bundle
const React = window.ni;
const { useState, useEffect, useRef } = React;
const jsx = window.he.jsx;
const jsxs = window.he.jsxs;

export const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // keep DOM mounted for exit animation
    const [isMobile, setIsMobile] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [buttonPhase, setButtonPhase] = useState("circle"); // circle | expanded
    const [messages, setMessages] = useState([
        {
            ...WELCOME_MESSAGE,
            sender: MessageSender.BOT,
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef(null);
    const widgetRef = useRef(null);
    const messagesContainerRef = useRef(null);
    const touchStartY = useRef(0);
    const closeTimerRef = useRef(null);
    const bodyOverflowRef = useRef(null);

    const scrollToBottom = () => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (!isVisible) return;
        scrollToBottom();
    }, [messages, isOpen, isVisible]);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current);
                closeTimerRef.current = null;
            }
            return;
        }

        if (!isVisible) return;

        closeTimerRef.current = setTimeout(() => {
            setIsVisible(false);
            closeTimerRef.current = null;
        }, 260);

        return () => {
            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current);
                closeTimerRef.current = null;
            }
        };
    }, [isOpen, isVisible]);

    useEffect(() => {
        const updateIsMobile = () => setIsMobile(window.innerWidth <= 768);
        updateIsMobile();
        window.addEventListener("resize", updateIsMobile);
        return () => window.removeEventListener("resize", updateIsMobile);
    }, []);

    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const updateDarkMode = (event) => setIsDarkMode(event.matches);
        setIsDarkMode(media.matches);

        if (typeof media.addEventListener === "function") {
            media.addEventListener("change", updateDarkMode);
            return () => media.removeEventListener("change", updateDarkMode);
        }

        media.addListener(updateDarkMode);
        return () => media.removeListener(updateDarkMode);
    }, []);

    useEffect(() => {
        if (!(isMobile && isVisible)) return;
        bodyOverflowRef.current = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = bodyOverflowRef.current || "";
        };
    }, [isMobile, isVisible]);

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        if (!inputText.trim() || isLoading) return;

        const userMessage = {
            id: Date.now().toString(),
            text: inputText,
            sender: MessageSender.USER,
            timestamp: new Date()
        };

        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInputText("");
        setIsLoading(true);

        try {
            const aiResponse = await callGeminiAPI(updatedMessages);
            const botMessage = {
                id: (Date.now() + 1).toString(),
                text: aiResponse,
                sender: MessageSender.BOT,
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const preventScrollPropagation = (target, deltaY) => {
        if (!target) return;
        const atTop = target.scrollTop <= 0;
        const atBottom = Math.ceil(target.scrollHeight - target.clientHeight - target.scrollTop) <= 0;

        // Block scroll chaining to the page when the chat hits its edges
        if ((deltaY < 0 && atTop) || (deltaY > 0 && atBottom)) {
            if (typeof target.scrollTop === "number") {
                // Only prevent default when the scroll would otherwise bubble to the page
                return true;
            }
        }
        return false;
    };

    const handleWheel = (target, deltaY, event) => {
        if (!target) return;
        target.scrollTop += deltaY; // Force scroll inside the chat
        event?.preventDefault();
        event?.stopPropagation();
    };

    const handleTouchStart = (e) => {
        if (e.touches[0]) {
            touchStartY.current = e.touches[0].clientY;
        }
    };

    const handleTouchMove = (target, e) => {
        const currentY = e.touches[0]?.clientY ?? 0;
        const deltaY = touchStartY.current - currentY;
        touchStartY.current = currentY;

        const shouldPrevent = preventScrollPropagation(target, deltaY);
        if (shouldPrevent && e.cancelable) {
            e.preventDefault();
        }
        e.stopPropagation();
    };

    useEffect(() => {
        if (!isVisible) return;

        const widgetEl = widgetRef.current;
        const messagesEl = messagesContainerRef.current;
        if (!widgetEl || !messagesEl) return;

        const wheelListener = (e) => handleWheel(messagesEl, e.deltaY, e);
        const touchStartListener = (e) => handleTouchStart(e);
        const touchMoveListener = (e) => handleTouchMove(messagesEl, e);

        widgetEl.addEventListener("wheel", wheelListener, { passive: false });
        messagesEl.addEventListener("touchstart", touchStartListener, { passive: false });
        messagesEl.addEventListener("touchmove", touchMoveListener, { passive: false });

        return () => {
            widgetEl.removeEventListener("wheel", wheelListener);
            messagesEl.removeEventListener("touchstart", touchStartListener);
            messagesEl.removeEventListener("touchmove", touchMoveListener);
        };
    }, [isVisible]);

    useEffect(() => {
        const expandTimer = setTimeout(() => setButtonPhase("expanded"), 1000);
        const collapseTimer = setTimeout(() => setButtonPhase("circle"), 5000); // 1s circle + 4s expanded
        return () => {
            clearTimeout(expandTimer);
            clearTimeout(collapseTimer);
        };
    }, []);

    const openChat = () => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
        setIsVisible(true);
        requestAnimationFrame(() => setIsOpen(true));
    };

    const closeChat = () => {
        setIsOpen(false);
    };

    const toggleChat = () => {
        if (isOpen) {
            closeChat();
        } else {
            openChat();
        }
    };

    const themeClasses = isDarkMode
        ? {
            panelBackground: "bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 bg-opacity-95 backdrop-blur-xl border border-white border-opacity-10",
            glowPrimary: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-400 opacity-35",
            glowSecondary: "bg-gradient-to-tr from-gray-800 via-blue-900 to-blue-700 opacity-40",
            headerBg: "bg-gray-900 bg-opacity-80 backdrop-blur-xl border-b border-white border-opacity-10",
            headerTitle: "text-gray-100",
            headerLabel: "text-blue-200",
            headerSub: "text-blue-100",
            userAvatar: "bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white ring-1 ring-white ring-opacity-10",
            botAvatar: "bg-gray-800 border border-white border-opacity-10 text-blue-100",
            userBubble: "bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white border-blue-200 border-opacity-40 rounded-br-md shadow-[0_12px_30px_rgba(30,64,175,0.35)]",
            botBubble: "bg-gray-800 text-gray-100 border border-white border-opacity-5 rounded-bl-md shadow-[0_10px_25px_rgba(0,0,0,0.35)]",
            input: "border-white border-opacity-10 focus:border-blue-400 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-40 bg-gray-900 bg-opacity-70 text-white placeholder-gray-400 shadow-inner",
            sendButton: "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 ring-white ring-opacity-10",
            notice: "text-gray-400",
            closeButton: "bg-gray-800 border border-white border-opacity-10 text-gray-100 hover:bg-gray-700 shadow-sm",
            typing: "bg-gray-800 bg-opacity-80 border border-white border-opacity-10"
        }
        : {
            panelBackground: "bg-gradient-to-br from-white via-blue-50 to-blue-100 bg-opacity-90 backdrop-blur-xl border border-white border-opacity-70",
            glowPrimary: "bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 opacity-60",
            glowSecondary: "bg-gradient-to-tr from-blue-100 via-blue-200 to-blue-300 opacity-60",
            headerBg: "bg-white bg-opacity-80 backdrop-blur-xl border-b border-white border-opacity-70",
            headerTitle: "text-gray-900",
            headerLabel: "text-blue-900",
            headerSub: "text-blue-800",
            userAvatar: "bg-gradient-to-br from-blue-500 to-blue-300 text-white",
            botAvatar: "bg-white border border-blue-50 text-blue-800",
            userBubble: "bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white border-blue-200 rounded-br-md shadow-[0_12px_25px_rgba(0,122,255,0.25)]",
            botBubble: "bg-white text-gray-900 border-blue-50 rounded-bl-md shadow-[0_10px_25px_rgba(15,31,58,0.08)]",
            input: "border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white bg-opacity-80 text-base text-gray-900 placeholder-gray-500 shadow-inner",
            sendButton: "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 ring-white ring-opacity-40",
            notice: "text-gray-400",
            closeButton: "bg-white bg-opacity-80 border border-blue-100 text-gray-700 hover:bg-blue-50 shadow-sm",
            typing: "bg-white bg-opacity-90 border border-blue-50"
        };

    const chatWindowClass = `${isMobile
        ? "fixed inset-0 m-0 w-full h-full rounded-none"
        : "relative mb-4 w-[360px] md:w-[420px] rounded-3xl"
        } overflow-hidden shadow-2xl transition-all duration-300 ease-out transform origin-bottom-right flex flex-col ${isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-3 scale-95 pointer-events-none"
        }`;

    const chatWindowStyle = isMobile
        ? {
            height: "100vh",
            maxHeight: "100vh",
            width: "100vw",
            minWidth: "100vw",
            marginBottom: 0,
            WebkitMaskImage: "none"
        }
        : {
            width: "min(420px, calc(100vw - 32px))",
            minWidth: "320px",
            height: "520px",
            maxHeight: "calc(100vh - 140px)",
            marginBottom: "18px",
            WebkitMaskImage: "-webkit-radial-gradient(white, black)"
        };

    const hideButtonOnMobile = isMobile && isVisible;
    const isChatActive = isOpen || isVisible;

    return jsxs("div", {
        className: "fixed bottom-4 md:bottom-6 right-4 md:right-6 z-[10000] flex flex-col items-end font-sans",
        style: { pointerEvents: "auto" },
        children: [
            isVisible && isMobile && jsx("div", {
                className: `fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 z-[9999] ${isOpen ? "opacity-100" : "opacity-0"}`,
                style: { pointerEvents: isVisible ? "auto" : "none" }
            }),
            isVisible && jsxs("div", {
                className: chatWindowClass,
                style: chatWindowStyle,
                ref: widgetRef,
                children: [
                    // Background Elements
                    jsx("div", { className: `absolute inset-0 ${themeClasses.panelBackground} pointer-events-none` }),
                    jsx("div", { className: `absolute -right-12 -top-16 w-40 h-40 rounded-full ${themeClasses.glowPrimary} pointer-events-none`, style: { filter: "blur(40px)" } }),
                    jsx("div", { className: `absolute -left-16 bottom-0 w-48 h-48 rounded-full ${themeClasses.glowSecondary} pointer-events-none`, style: { filter: "blur(32px)" } }),

                    // Header (Fixed Height)
                    jsxs("div", {
                        className: `relative z-10 flex-none px-5 py-4 ${themeClasses.headerBg} flex items-center justify-between`,
                        children: [
                            jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    jsx("div", {
                                        className: `w-12 h-12 rounded-2xl ${themeClasses.userAvatar} flex items-center justify-center shadow-lg ring-2 ring-white ring-opacity-20`,
                                        children: jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-7 h-7",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: jsx("path", { d: "M6.5 14.5a3.5 3.5 0 0 1 3.38-3.5 4.5 4.5 0 0 1 8.62 1.5H19a3 3 0 0 1 0 6H7a2.5 2.5 0 0 1-.5-4.95V14.5Z" })
                                        })
                                    }),
                                    jsxs("div", {
                                        children: [
                                            jsx("p", { className: `text-xs font-semibold tracking-wide uppercase ${themeClasses.headerLabel}`, children: "Seiun AI" }),
                                            jsx("h3", { className: `font-bold text-lg ${themeClasses.headerTitle}`, children: "AI オペレーター" }),
                                            jsx("p", { className: `text-xs ${themeClasses.headerSub}`, children: "青雲寮の疑問にライブで回答します" })
                                        ]
                                    })
                                ]
                            }),
                            jsx("button", {
                                type: "button",
                                onClick: closeChat,
                                className: `w-10 h-10 flex items-center justify-center rounded-xl transition ${themeClasses.closeButton}`,
                                "aria-label": "チャットを閉じる",
                                children: jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })
                                })
                            })
                        ]
                    }),

                    // Messages Container (Scrollable Area)
                    jsxs("div", {
                        className: "relative z-10 flex-1 overflow-y-auto min-h-0 p-4 space-y-4",
                        style: {
                            overscrollBehavior: "contain", // Prevent parent scroll chaining
                            WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
                            touchAction: "pan-y"
                        },
                        ref: messagesContainerRef,
                        children: [
                            messages.map((message) =>
                                jsx("div", {
                                    className: `flex ${message.sender === MessageSender.USER ? "justify-end" : "justify-start"}`,
                                    children: jsxs("div", {
                                        className: `flex items-end gap-2 max-w-full ${message.sender === MessageSender.USER ? "flex-row-reverse" : ""}`,
                                        children: [
                                            jsx("div", {
                                                className: `${message.sender === MessageSender.USER ? `${themeClasses.userAvatar} shadow-md` : `${themeClasses.botAvatar} shadow-md`} w-9 h-9 rounded-full flex items-center justify-center shrink-0`,
                                                children: message.sender === MessageSender.USER
                                                    ? jsx("span", { className: "text-sm font-semibold", children: "YOU" })
                                                    : jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-5 h-5",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: jsx("path", { d: "M6.5 14.5a3.5 3.5 0 0 1 3.38-3.5 4.5 4.5 0 0 1 8.62 1.5H19a3 3 0 0 1 0 6H7a2.5 2.5 0 0 1-.5-4.95V14.5Z" })
                                                    })
                                            }),
                                            jsx("div", {
                                                className: `max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed border shadow-lg break-words ${message.sender === MessageSender.USER ? themeClasses.userBubble : themeClasses.botBubble}`,
                                                dangerouslySetInnerHTML: { __html: formatMarkdown(message.text) }
                                            })
                                        ]
                                    })
                                }, message.id)
                            ),

                            isLoading && jsx("div", {
                                className: "flex justify-start",
                                children: jsxs("div", {
                                    className: `${themeClasses.typing} px-4 py-3 rounded-2xl rounded-bl-md shadow-lg flex space-x-1 items-center backdrop-blur-lg`,
                                    children: [
                                        jsx("div", { className: "w-2 h-2 bg-blue-300 rounded-full animate-bounce", style: { animationDelay: "0ms" } }),
                                        jsx("div", { className: "w-2 h-2 bg-blue-300 rounded-full animate-bounce", style: { animationDelay: "150ms" } }),
                                        jsx("div", { className: "w-2 h-2 bg-blue-300 rounded-full animate-bounce", style: { animationDelay: "300ms" } })
                                    ]
                                })
                            }),

                            jsx("div", { ref: scrollRef })
                        ]
                    }),

                    // Input Form (Fixed Height)
                    jsxs("div", {
                        className: `relative z-10 flex-none p-4 bg-white bg-opacity-70 backdrop-blur-xl border-t border-white border-opacity-70 ${isDarkMode ? "bg-gray-900 bg-opacity-70 border-opacity-10" : ""}`,
                        children: [
                            jsxs("form", {
                                onSubmit: handleSubmit,
                                className: "flex gap-2",
                                children: [
                                    jsx("input", {
                                        type: "text",
                                        value: inputText,
                                        onChange: (e) => setInputText(e.target.value),
                                        placeholder: "質問を入力...",
                                        className: `flex-1 px-4 py-3 rounded-2xl border focus:outline-none transition-all ${themeClasses.input}`
                                    }),
                                    jsxs("button", {
                                        type: "submit",
                                        disabled: !inputText.trim() || isLoading,
                                        className: `relative overflow-hidden ${themeClasses.sendButton} text-white px-4 py-2.5 rounded-2xl hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg flex items-center gap-1 ring-1 ring-white ring-opacity-40`,
                                        children: [
                                            jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-5 w-5",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                children: jsx("path", { d: "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" })
                                            }),
                                            jsx("span", { className: "text-sm font-semibold", children: "送信" })
                                        ]
                                    })
                                ]
                            }),
                            jsx("div", {
                                className: `mt-2 text-[8px] leading-tight ${themeClasses.notice}`,
                                children: "回答は必ずしも正しいとは限りません。重要な情報は確認するようにしてください。"
                            })
                        ]
                    })
                ]
            }),

            // Toggle Button
            jsx("button", {
                onClick: toggleChat,
                className: `relative transition-all duration-500 transform bg-gradient-to-r from-blue-600 to-blue-400 hover:shadow-2xl hover:-translate-y-1 text-white rounded-full shadow-xl flex items-center overflow-hidden ring-4 ring-white ring-opacity-50 h-14 ${buttonPhase === "expanded"
                    ? "w-40 pl-5 pr-5 gap-3 justify-start"
                    : "w-14 px-0 gap-0 justify-center"
                    } ${hideButtonOnMobile ? "opacity-0 pointer-events-none translate-y-2" : "opacity-100"}`,
                "aria-label": isChatActive ? "AIチャットを閉じる" : "AIチャットを開く",
                children: [
                    isChatActive
                        ? jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-7 w-7 flex-shrink-0",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })
                        })
                        : jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-8 w-8 flex-shrink-0",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" })
                        }),
                    jsx("span", {
                        className: `text-sm font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${buttonPhase === "expanded"
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2 w-0"
                            }`,
                        children: "AIチャット"
                    })
                ]
            })
        ]
    });
};
