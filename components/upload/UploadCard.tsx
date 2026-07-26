import { DocumentText, UploadCloud } from "lucide-react";

interface UploadCardProps {
  fileName: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadCard({
  fileName,
  onChange,
}: UploadCardProps) {
  return (
    <label
      htmlFor="resume-file"
      className="flex flex-col items-center justify-center h-56 rounded-2xl border-2 border-dashed border-blue-400/40 bg-white/5 hover:bg-white/10 transition cursor-pointer"
    >
      <UploadCloud className="mb-4 h-16 w-16 text-blue-400" />

      <p className="mt-4 text-white font-medium">
        Click to upload your resume
      </p>

      <span className="text-sm text-gray-400">
        PDF files only
      </span>

      {fileName && (
        <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-green-300">
          <DocumentText className="h-4 w-4" />
          {fileName}
        </span>
      )}

      <input
        id="resume-file"
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={onChange}
      />
    </label>
  );
}