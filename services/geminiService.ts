import { GoogleGenAI } from "@google/genai";

export async function sendMessageToGemini(message: string, apiKey: string): Promise<string> {
  if (!apiKey) {
    return "API key not provided. Please set your API key to use the chatbot.";
  }

  const ai = new GoogleGenAI({ apiKey });

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
    // Check for common API key errors
    if (error instanceof Error && (error.message.includes('API key not valid') || error.message.includes('API key is invalid'))) {
        return "It seems your API key is not valid. Please check it and try again.";
    }
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
}