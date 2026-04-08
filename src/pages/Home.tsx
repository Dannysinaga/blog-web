import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import Navbar from "../components/Navbar";
import { axiosInstance } from "../lib/axios";
import { useAuth } from "../stores/useAuth";
import type { Blog } from "../types/blog";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const { user } = useAuth();

  const { data: blogs, error, isPending, refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await axiosInstance.get<Blog[]>("/data/Blogs");
      return response.data;
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Latest Blogs</h1>

          {!!user && (
            <Link
              to="/create"
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors shadow-md"
            >
              Create Blog
            </Link>
          )}
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-6 flex items-center justify-between">
            <p>{(error as Error).message}</p>
            <button
              onClick={() => refetch()}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* Loading State */}
        {isPending ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </div>
        ) : (
          <>
            {/* Empty State */}
            {blogs && blogs.length === 0 && !error && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  {/* icon svg */}
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No blogs yet
                </h3>
                <p className="text-gray-500 mb-6">
                  Be the first to share your thoughts with the world!
                </p>
                {!!user && (
                  <Link
                    to="/create"
                    className="inline-flex items-center space-x-2 bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors shadow-md"
                  >
                    <span>Create Your First Blog</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            )}

            {/* Blog Cards */}
            {blogs && blogs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <BlogCard key={blog.objectId} blog={blog} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
