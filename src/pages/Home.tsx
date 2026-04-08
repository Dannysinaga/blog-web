import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import Navbar from "../components/Navbar";
import { axiosInstance } from "../lib/axios";
import { useAuth } from "../stores/useAuth";
import type { Blog } from "../types/blog";

function Home() {
  const { user } = useAuth();

  const {
    data: blogs,
    isPending,
    error,
    refetch,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await axiosInstance.get<Blog[]>(
        "/data/Blogs?sortBy=%60created%60%20desc",
      );
      return response.data;
    },
  });

  console.log(blogs);

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
            <p>{error.message}</p>
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
                  <svg
                    className="mx-auto h-24 w-24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
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
