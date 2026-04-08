import Navbar from "./Navbar";

const BlogDetailLoading = () => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-500"></div>
      </div>
    </div>
  </div>
);

export default BlogDetailLoading;
