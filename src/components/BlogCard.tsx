import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router";
import type { Blog } from "../types/blog";
import { formatDate } from "../utils/formatter";
import ThumbnailPlaceholder from "./ThumbnailPlaceholder";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
    {blog.thumbnail ? (
      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
    ) : (
      <ThumbnailPlaceholder title={blog.title} />
    )}

    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
        {blog.title}
      </h2>

      <p className="text-gray-600 mb-4 line-clamp-3">{blog.description}</p>

      <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
        <div className="flex items-center space-x-1">
          <User className="h-4 w-4" />
          <span>{blog.author}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(blog.created)}</span>
        </div>
      </div>

      <Link
        to={`/blogs/${blog.objectId}`}
        className="inline-flex items-center space-x-2 text-yellow-500 hover:text-purple-600 font-semibold transition-colors"
      >
        <span>Read More</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </div>
);

export default BlogCard;
