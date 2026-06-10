export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          AI Resume Analyzer
        </h1>

        <p className="mt-4 text-gray-400">
          Upload your resume and get AI feedback
        </p>

        <button className="mt-8 px-6 py-3 bg-white text-black rounded-xl font-semibold">
          Upload Resume
        </button>
      </div>
    </main>
  );
}