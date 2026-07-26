import { NextResponse } from "next/server";
import { extractPdfText } from "@/lib/pdf";
import { analyzeResume } from "@/lib/gemini";
import { calculateATS } from "@/lib/ats";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded." },
        { status: 400 }
      );
    }

    if (!file.name.endsWith(".pdf")) {
      return NextResponse.json(
        { error: "Only PDF files are allowed." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

 const text = await extractPdfText(buffer);

const analysis = await analyzeResume(text);


const ats = calculateATS(text);

return NextResponse.json({
  analysis,
  ats,
});

  }catch (error) {
  console.error("========== PDF ERROR ==========");
  console.error(error);
  console.error("===============================");

  return NextResponse.json(
    {
      error:
        error instanceof Error
          ? error.message
          : String(error),
    },
    { status: 500 }
  );
}
}