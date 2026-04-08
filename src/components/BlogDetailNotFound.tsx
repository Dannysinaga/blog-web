import Navbar from "./Navbar";
import BackNavigation from "./BackNavigation";

const BlogDetailNotFound = () => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Blog Not Found
        </h1>
        <BackNavigation />
      </div>
    </div>
  </div>
);

export default BlogDetailNotFound;
