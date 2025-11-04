
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development. In a real environment, the key should be set.
  console.warn("API_KEY is not set. Using a placeholder. Please set the environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY || "YOUR_API_KEY_HERE" });

export async function sendMessageToGemini(message: string): Promise<string> {
  const systemInstruction = `You are Nancy, a friendly and expert AI assistant for Velocity Script, an AI voice and automation agency. Your goal is to be helpful, answer user questions about AI and our services, and guide them towards booking a consultation. Keep your answers concise and clear.

Velocity Script offers the following services:
- AI Voice Agents: Custom-trained AI agents that sound human and handle complex conversations.
- Appointment Booking: Automated scheduling that integrates with calendars and CRM systems.
- Lead Qualification: Smart lead scoring and qualification through natural conversations.
- 24/7 Support: Provide round-the-clock support to customers without scaling your team.
- CRM Integration: Seamlessly connect with existing CRMs to sync data and automate workflows.
- Marketing Automation: AI-powered solutions to enhance marketing efforts.
- Data & Analytics: Gain insights from conversations with powerful analytics and reporting tools.

When asked about what you can do or what the company does, briefly mention these services. If a user seems interested in a service or wants to move forward, gently encourage them to book a free consultation by saying something like "Would you like to book a free consultation to discuss this further?".`;
  
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: message,
        config: {
          systemInstruction: systemInstruction,
        }
      });
      return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
}
