import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

interface BackNavigationProps {
  to?: string;
  text?: string;
  className?: string;
}

const BackNavigation = ({
  to = "/",
  text = "Back to Home",
  className = "",
}: BackNavigationProps) => (
  <Link
    to={to}
    className={`inline-flex items-center space-x-2 text-yellow-500 hover:text-purple-600 font-semibold transition-colors ${className}`}
  >
    <ArrowLeft className="h-5 w-5" />
    <span>{text}</span>
  </Link>
);

export default BackNavigation;
