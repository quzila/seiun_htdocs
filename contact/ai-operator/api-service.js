/**
 * Gemini API Service
 * Handles all API calls to Google's Gemini AI
 */

// Versioned imports to ensure fresh fetch even under long-lived caches
import { seiunSystemPrompt } from "./prompt.js?v=20260324194500";
import {
    CHAT_API_URL,
    CHAT_CLIENT_VERSION,
    CHAT_HISTORY_LIMIT,
    GAS_API_URL,
    GEMINI_MODEL,
    TEMPERATURE
} from "./config.js?v=20260324194500";
import { normalizeChatResponse, serializeChatMessage } from "./utils.js?v=20260324194500";

/**
 * Call the chat backend and normalize the response shape.
 * @param {Object} options
 * @returns {Promise<Object>} structured chat response
 */
export const callChatAPI = async ({ messages = [], sessionId, currentUrl, currentPath, lastActivityAt }) => {
    const fallbackMessage = "申し訳ありません。現在AIサービスに接続できません。時間をおいて再度お試しいただくか、お問い合わせページをご利用ください。";
    const timeoutController = typeof AbortController !== "undefined" ? new AbortController() : null;
    const timeoutId = timeoutController
        ? window.setTimeout(() => timeoutController.abort(), 30000)
        : null;

    try {
        if (!CHAT_API_URL) {
            console.error("CHAT_API_URL is not set.");
            return normalizeChatResponse(
                { answer: "システムエラー: API接続先が設定されていません。", resultType: "error" },
                fallbackMessage
            );
        }

        const serializedMessages = messages
            .filter((msg, index) => !(index === 0 && msg.sender === "bot"))
            .slice(-CHAT_HISTORY_LIMIT)
            .map((msg) => serializeChatMessage(msg));

        const payload = {
            sessionId,
            currentUrl,
            currentPath,
            lastActivityAt,
            messages: serializedMessages,
            clientVersion: CHAT_CLIENT_VERSION,
        };

        if (CHAT_API_URL === GAS_API_URL) {
            payload.systemPrompt = seiunSystemPrompt;
            payload.temperature = TEMPERATURE;
            payload.model = GEMINI_MODEL;
        }

        const response = await fetch(CHAT_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Accept": "application/json",
            },
            body: JSON.stringify(payload),
            credentials: "omit",
            signal: timeoutController ? timeoutController.signal : undefined,
        });

        const rawText = await response.text();
        let data = null;
        if (rawText) {
            try {
                data = JSON.parse(rawText);
            } catch (_error) {
                data = null;
            }
        }

        if (!response.ok) {
            return normalizeChatResponse(
                data || { answer: `HTTP Error: ${response.status}`, resultType: "error" },
                fallbackMessage
            );
        }

        return normalizeChatResponse(data, fallbackMessage);
    } catch (error) {
        console.error("Gemini API Error:", error);
        return normalizeChatResponse(
            { answer: fallbackMessage, resultType: "error" },
            fallbackMessage
        );
    } finally {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    }
};

export const callGeminiAPI = callChatAPI;
