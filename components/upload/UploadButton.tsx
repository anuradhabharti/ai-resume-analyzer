import { Loader2, UploadCloud } from "lucide-react";

interface UploadButtonProps {
  uploading: boolean;
}

export default function UploadButton({
  uploading,
}: UploadButtonProps) {
  return (
    <button
      type="submit"
      disabled={uploading}
      className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-lg font-semibold text-white transition hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 flex items-center justify-center"
    >
      {uploading ? (
        <>
          <Loader2 className="mr-3 h-5 w-5 animate-spin" />
          Uploading...
        </>
      ) : (
        <>
          <UploadCloud className="mr-3 h-5 w-5" />
          Analyze Resume
        </>
      )}
    </button>
  );
}