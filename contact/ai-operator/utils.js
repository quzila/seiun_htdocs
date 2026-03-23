/**
 * Utility Functions
 * Helper functions for message formatting and sanitization
 */

/**
 * Message sender types
 */
export const MessageSender = {
    USER: "user",
    BOT: "bot"
};

/**
 * Escape HTML special characters to prevent XSS
 */
export const escapeHtml = (text) =>
    text.replace(/&/g, "&amp;")
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
