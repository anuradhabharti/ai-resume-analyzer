import pdf from "pdf-parse-new";

export async function extractPdfText(buffer: Buffer): Promise<string> {
  const data = await pdf(buffer);

  return data.text
    .replace(/\s+/g, " ")
    .trim();
}