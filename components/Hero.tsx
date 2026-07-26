import { FileText } from "lucide-react";

export default function Hero() {
  return (
    <div className="text-center mb-8">
      <FileText className="mx-auto mb-4 h-16 w-16 text-white" />

      <h1 className="text-4xl font-bold text-white">
        AI Resume Analyzer
      </h1>

      <p className="mt-3 text-gray-300">
        Upload your resume and receive AI-powered feedback.
      </p>
    </div>
  );
}