import { Loader2 } from "lucide-react";

interface LoadingOverlayProps {
  uploading: boolean;
}

export default function LoadingOverlay({
  uploading,
}: LoadingOverlayProps) {
  if (!uploading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <Loader2 className="h-16 w-16 animate-spin text-white" />

        <p className="mt-5 text-white text-lg">
          Analyzing Resume...
        </p>
      </div>
    </div>
  );
}