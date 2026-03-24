/**
 * Utility Functions
 * Helper functions for message formatting and sanitization
 */

const runtimeNow = () => new Date().toISOString();

/**
 * Message sender types
 */
export const MessageSender = {
    USER: "user",
    BOT: "bot"
};

export const safeParseJson = (value, fallback = null) => {
    if (!value) return fallback;
    try {
        return JSON.parse(value);
    } catch (_error) {
        return fallback;
    }
};

export const createSessionId = () => {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
        return crypto.randomUUID();
    }
    return `session-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

export const nowIso = () => runtimeNow();

export const normalizeLink = (link) => {
    if (!link || typeof link !== "object") return null;
    const title = typeof link.title === "string" ? link.title.trim() : "";
    const url = typeof link.url === "string" ? link.url.trim() : "";
    if (!title || !url) return null;
    return {
        title,
        url,
        label: typeof link.label === "string" ? link.label.trim() : "",
        reason: typeof link.reason === "string" ? link.reason.trim() : "",
    };
};

export const normalizeCitation = (citation) => {
    if (!citation || typeof citation !== "object") return null;
    const title = typeof citation.title === "string" ? citation.title.trim() : "";
    const url = typeof citation.url === "string" ? citation.url.trim() : "";
    if (!title || !url) return null;
    return {
        title,
        url,
        label: typeof citation.label === "string" ? citation.label.trim() : "",
    };
};

export const normalizeChatResponse = (payload, fallbackMessage) => {
    const fallbackAnswer = fallbackMessage || "申し訳ありません。現在AIサービスに接続できません。しばらくしてから再度お試しください。";
    if (!payload || typeof payload !== "object") {
        return {
            answer: fallbackAnswer,
            resultType: "error",
            citations: [],
            suggestedLinks: [],
            sessionExpiresAt: null,
        };
    }

    if (typeof payload.answer === "string" && payload.answer.trim()) {
        return {
            answer: payload.answer.trim(),
            resultType: payload.resultType === "fallback" ? "fallback" : payload.resultType === "error" ? "error" : "answer",
            citations: Array.isArray(payload.citations)
                ? payload.citations.map(normalizeCitation).filter(Boolean)
                : [],
            suggestedLinks: Array.isArray(payload.suggestedLinks)
                ? payload.suggestedLinks.map(normalizeLink).filter(Boolean)
                : [],
            sessionExpiresAt: typeof payload.sessionExpiresAt === "string"
                ? payload.sessionExpiresAt
                : typeof payload.sessionExpiresAt === "number"
                    ? new Date(payload.sessionExpiresAt).toISOString()
                    : null,
        };
    }

    if (payload.success && typeof payload.text === "string") {
        return {
            answer: payload.text.trim(),
            resultType: "answer",
            citations: [],
            suggestedLinks: [],
            sessionExpiresAt: null,
        };
    }

    if (typeof payload.error === "string" && payload.error.trim()) {
        return {
            answer: payload.error.trim(),
            resultType: "error",
            citations: [],
            suggestedLinks: [],
            sessionExpiresAt: null,
        };
    }

    return {
        answer: fallbackAnswer,
        resultType: "error",
        citations: [],
        suggestedLinks: [],
        sessionExpiresAt: null,
    };
};

export const serializeChatMessage = (message) => ({
    id: message.id,
    text: message.text,
    sender: message.sender,
    timestamp: typeof message.timestamp === "string" ? message.timestamp : nowIso(),
    resultType: message.resultType || null,
    citations: Array.isArray(message.citations) ? message.citations.map(normalizeCitation).filter(Boolean) : [],
    suggestedLinks: Array.isArray(message.suggestedLinks) ? message.suggestedLinks.map(normalizeLink).filter(Boolean) : [],
});

export const hydrateChatMessage = (message) => {
    if (!message || typeof message !== "object") return null;
    const text = typeof message.text === "string" ? message.text : "";
    const sender = message.sender === MessageSender.USER ? MessageSender.USER : MessageSender.BOT;
    if (!text) return null;
    return {
        id: typeof message.id === "string" && message.id ? message.id : createSessionId(),
        text,
        sender,
        timestamp: typeof message.timestamp === "string" && message.timestamp ? message.timestamp : nowIso(),
        resultType: typeof message.resultType === "string" ? message.resultType : null,
        citations: Array.isArray(message.citations) ? message.citations.map(normalizeCitation).filter(Boolean) : [],
        suggestedLinks: Array.isArray(message.suggestedLinks) ? message.suggestedLinks.map(normalizeLink).filter(Boolean) : [],
    };
};

/**
 * Escape HTML special characters to prevent XSS
 */
export const escapeHtml = (text) =>
    String(text || "").replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

/**
 * Format markdown-style text to HTML
 * Supports: **bold**, *italic*, and line breaks
 */
export const formatMarkdown = (text) => {
    if (!text) return "";
    const escapedText = escapeHtml(text);
    return escapedText
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(?!\*)(.+?)\*/g, "<em>$1</em>")
        .replace(/\n/g, "<br>");
};
