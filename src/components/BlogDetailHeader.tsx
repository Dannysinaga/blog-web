import { Calendar, User } from "lucide-react";
import { formatDate } from "../utils/formatter";

interface BlogDetailHeaderProps {
  title: string;
  author: string;
  created: number;
}

const BlogDetailHeader = ({
  title,
  author,
  created,
}: BlogDetailHeaderProps) => (
  <>
    <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>

    <div className="flex items-center text-gray-600 mb-6 space-x-6">
      <div className="flex items-center space-x-2">
        <User className="h-5 w-5" />
        <span className="font-medium">{author}</span>
      </div>
      <div className="flex items-center space-x-2">
        <Calendar className="h-5 w-5" />
        <span>{formatDate(created)}</span>
      </div>
    </div>
  </>
);

export default BlogDetailHeader;
