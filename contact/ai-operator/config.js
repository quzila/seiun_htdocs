/**
 * AI Operator Configuration
 * API keys and model settings
 */

const runtimeWindow = typeof window !== "undefined" ? window : undefined;

// export const GEMINI_API_KEY = "YOUR_KEY_IS_NOW_IN_GAS"; // Removed for security
export const GAS_API_URL = "https://script.google.com/macros/s/AKfycbw6pSLO3rM-kyTXertkTyLqY7TOypF_1X7HRcZMk0tSwACplkejPULI8ukmnaWkBwDKrg/exec";
export const CHAT_API_URL = runtimeWindow?.__seiunAiChatApiUrl || runtimeWindow?.__SEIUN_AI_CHAT_API_URL || GAS_API_URL;
export const CHAT_CLIENT_VERSION = "20260324194500";
export const CHAT_STORAGE_KEY = "seiun-ai-operator-chat-state";
export const CHAT_SESSION_TTL_MS = 30 * 60 * 1000;
export const CHAT_HISTORY_LIMIT = 16;
export const CHAT_MAX_INPUT_CHARS = 1200;
export const GEMINI_MODEL = "gemini-2.5-flash-lite";
export const TEMPERATURE = 0.7;

export const WELCOME_MESSAGE = {
    id: "welcome",
    text: "こんにちは！青雲寮AIオペレーターです。公開情報に基づいてご案内します。分からない点はお問い合わせページへご案内します。",
};
