import { GoogleGenAI } from "@google/genai";
import { resumePrompt } from "./prompts";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const MODEL =
  process.env.GEMINI_MODEL ?? "gemini-flash-latest";
export async function analyzeResume(text: string) {
  const response = await ai.models.generateContent({
    model: MODEL,
    contents: resumePrompt(text),
  });

  let output = response.text ?? "";

  // Remove markdown code fences if Gemini adds them
  output = output
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(output);
}