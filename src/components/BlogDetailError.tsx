import { useCallback } from "react";
import Navbar from "./Navbar";
import BackNavigation from "./BackNavigation";

interface BlogDetailErrorProps {
  error: string;
  onRetry: () => void;
}

const BlogDetailError = ({ error, onRetry }: BlogDetailErrorProps) => {
  const handleRetry = useCallback(() => {
    onRetry();
  }, [onRetry]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-6">
          <p className="mb-4">{error}</p>
          <button
            onClick={handleRetry}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Retry
          </button>
        </div>
        <BackNavigation />
      </div>
    </div>
  );
};

export default BlogDetailError;
