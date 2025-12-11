import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateClinicalSummary = async (rawNotes: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      Actúa como un asistente médico avanzado experto en documentación clínica. 
      Tu tarea es recibir notas médicas desestructuradas (raw text) y convertirlas en un formato SOAP (Subjetivo, Objetivo, Análisis, Plan) profesional y conciso en Español.
      Utiliza terminología médica apropiada.
      Mantén un tono formal y objetivo.
      Si la información es insuficiente para una sección, indica "No reportado".
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: rawNotes,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.3, // Low temperature for factual consistency
        topK: 40,
      }
    });

    if (response.text) {
      return response.text;
    }
    
    throw new Error("No response generated");
  } catch (error) {
    console.error("Error generating clinical summary:", error);
    throw error;
  }
};
