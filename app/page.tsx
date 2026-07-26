"use client";

import { useState } from "react";

import { AlertTriangle, Rocket, ShieldCheck, Wrench } from "lucide-react";
import Hero from "@/components/Hero";
import UploadCard from "@/components/upload/UploadCard";
import UploadButton from "@/components/upload/UploadButton";
import LoadingOverlay from "@/components/LoadingOverlay";

import ATSScore from "@/components/result/ATSScore";
import SummaryCard from "@/components/result/SummaryCard";
import RecommendationCard from "@/components/result/RecommendationCard";

interface ResumeAnalysis {
  summary: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  skills: string[];
}

interface ATSResult {
  score: number;

  breakdown: {
    sections: number;
    skills: number;
    experience: number;
    education: number;
    projects: number;
    verbs: number;
    contact: number;
  };
}

export default function Home() {
  const [fileName, setFileName] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);

  const [ats, setATS] = useState<ATSResult | null>(null);

  function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setStatus("");

    const file = e.target.files?.[0];

    if (!file) {
      setFileName(null);
      return;
    }

    if (
      file.type !== "application/pdf" &&
      !file.name.endsWith(".pdf")
    ) {
      setStatus("Only PDF files are allowed.");
      e.target.value = "";
      return;
    }

    setFileName(file.name);
  }

  async function handleUpload(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const input = document.getElementById(
      "resume-file"
    ) as HTMLInputElement;

    const file = input.files?.[0];

    if (!file) {
      setStatus("Please select a PDF.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("file", file);

      const response = await fetch("/api/analyze", {
  method: "POST",
  body: formData,
});

const body = await response.text();

console.log("API Response:", body);

let data;

try {
  data = JSON.parse(body);
} catch {
  throw new Error("Server returned HTML instead of JSON.");
}

if (!response.ok) {
  throw new Error(data.error);
}
      setAnalysis(data.analysis);

      setATS(data.ats);

      setStatus("");

    } catch (error) {
      console.error(error);

      setStatus("Failed to analyze resume.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <LoadingOverlay uploading={loading} />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6 py-12 text-white">

        <div className="mx-auto max-w-4xl">

          <Hero />

          <form
            onSubmit={handleUpload}
            className="space-y-6"
          >
            <UploadCard
              fileName={fileName}
              onChange={handleFileChange}
            />

            <UploadButton uploading={loading} />

            {status && (
              <div className="rounded-xl bg-red-500/20 border border-red-500 p-4 text-center text-red-300">
                {status}
              </div>
            )}
          </form>

          {analysis && ats && (
            <div className="mt-12 space-y-6">

              <ATSScore score={ats.score} />

              <SummaryCard
                summary={analysis.summary}
              />

              <RecommendationCard
                title="Strengths"
                items={analysis.strengths}
                Icon={ShieldCheck}
              />

              <RecommendationCard
                title="Weaknesses"
                items={analysis.weaknesses}
                Icon={AlertTriangle}
              />

              <RecommendationCard
                title="Recommendations"
                items={analysis.recommendations}
                Icon={Rocket}
              />

              <RecommendationCard
                title="Skills"
                items={analysis.skills}
                Icon={Wrench}
              />

            </div>
          )}

        </div>
      </main>
    </>
  );
}