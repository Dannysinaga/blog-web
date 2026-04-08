import type { Blog } from "../types/blog";

interface BlogDetailThumbnailProps {
  blog: Blog;
}

const BlogDetailThumbnail = ({ blog }: BlogDetailThumbnailProps) => {
  if (blog.thumbnail) {
    return (
      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="w-full h-96 object-cover"
      />
    );
  }

  const initial = blog.title.charAt(0).toUpperCase();
  return (
    <div className="w-full h-96 bg-gradient-to-br from-yellow-400 to-purple-600 flex items-center justify-center">
      <h2 className="text-4xl font-bold text-white">{initial}</h2>
    </div>
  );
};

export default BlogDetailThumbnail;
