/**
 * Gemini API Service
 * Handles all API calls to Google's Gemini AI
 */

// Versioned imports to ensure fresh fetch even under long-lived caches
import { seiunSystemPrompt } from "./prompt.js?v=20250216120000";
import { GAS_API_URL, GEMINI_MODEL, TEMPERATURE } from "./config.js?v=20250216120000";
import { MessageSender } from "./utils.js?v=20250216120000";

/**
 * Call Gemini API via GAS Proxy
 * @param {Array} messages - Array of message objects with {id, text, sender, timestamp}
 * @returns {Promise<string>} - AI response text
 */
export const callGeminiAPI = async (messages) => {
    try {
        if (!GAS_API_URL) {
            console.error("GAS_API_URL is not set.");
            return "システムエラー: API接続先が設定されていません。";
        }

        // Filter out the initial bot message and convert to Gemini format
        const contents = messages
            .filter((msg, index) => !(index === 0 && msg.sender === MessageSender.BOT))
            .map((msg) => ({
                role: msg.sender === MessageSender.USER ? "user" : "model",
                parts: [{ text: msg.text }]
            }));

        const payload = {
            messages: contents,
            systemPrompt: seiunSystemPrompt,
            temperature: TEMPERATURE,
            model: GEMINI_MODEL
        };

        const response = await fetch(GAS_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8", // GAS requires text/plain for CORS sometimes, or just standard JSON
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.error || "Unknown error from GAS");
        }

        return data.text;

    } catch (error) {
        console.error("Gemini API Error:", error);
        return "申し訳ありません。現在AIサービスに接続できません。時間をおいて再度お試しいただくか、お電話にてお問い合わせください。";
    }
};
