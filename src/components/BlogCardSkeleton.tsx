/**
 * Skeleton card component for loading state
 */
const BlogCardSkeleton = () => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <div className="w-full h-48 bg-gray-200 animate-pulse" />
    <div className="p-6">
      <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
      <div className="h-4 bg-gray-200 rounded animate-pulse mb-1 w-3/4" />
      <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-1/2" />
      <div className="flex items-center space-x-4">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-20" />
      </div>
    </div>
  </div>
);

export default BlogCardSkeleton;
