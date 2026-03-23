/**
 * Google Apps Script Proxy for Gemini API
 * 
 * Instructions:
 * 1. Create a new Google Apps Script project at https://script.google.com/
 * 2. Copy and paste this entire code into the editor (replace existing code).
 * 3. Go to Project Settings (gear icon) -> Script Properties.
 * 4. Add a new property:
 *    Property: GEMINI_API_KEY
 *    Value: Your Gemini API Key (AIza...)
 * 5. Click "Deploy" -> "New deployment".
 * 6. Select type: "Web app".
 * 7. Description: "Gemini Proxy" (or anything).
 * 8. Execute as: "Me".
 * 9. Who has access: "Anyone" (Important! This allows your site to call it).
 * 10. Click "Deploy".
 * 11. Copy the "Web App URL" and provide it to the developer.
 */

function doPost(e) {
    // CORS Handling
    // We need to return JSON with headers allowing cross-origin requests

    try {
        const requestData = JSON.parse(e.postData.contents);
        const messages = requestData.messages;
        const systemPrompt = requestData.systemPrompt;
        const temperature = requestData.temperature || 0.7;
        const modelName = requestData.model || "gemini-1.5-flash";

        const apiKey = PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY");
        if (!apiKey) {
            throw new Error("API Key not found in Script Properties");
        }

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

        const payload = {
            contents: messages,
            generationConfig: {
                temperature: temperature
            }
        };

        if (systemPrompt) {
            payload.systemInstruction = {
                parts: [{ text: systemPrompt }]
            };
        }

        const options = {
            method: "post",
            contentType: "application/json",
            payload: JSON.stringify(payload),
            muteHttpExceptions: true
        };

        const response = UrlFetchApp.fetch(apiUrl, options);
        const responseCode = response.getResponseCode();
        const responseBody = response.getContentText();

        if (responseCode !== 200) {
            throw new Error(`Gemini API Error (${responseCode}): ${responseBody}`);
        }

        const data = JSON.parse(responseBody);
        const text = data.candidates[0].content.parts[0].text;

        return createResponse({ success: true, text: text });

    } catch (error) {
        return createResponse({ success: false, error: error.toString() });
    }
}

function doOptions(e) {
    // Handle preflight requests for CORS
    return createResponse({ status: "ok" });
}

function createResponse(data) {
    const json = JSON.stringify(data);
    return ContentService.createTextOutput(json)
        .setMimeType(ContentService.MimeType.JSON);
}
