/**
 * Placeholder component for blogs without thumbnails
 */
interface ThumbnailPlaceholderProps {
  title: string;
}

const ThumbnailPlaceholder = ({ title }: ThumbnailPlaceholderProps) => {
  const initial = title.charAt(0).toUpperCase();
  return (
    <div className="w-full h-48 bg-linear-to-br from-yellow-400 to-purple-500 flex items-center justify-center">
      <span className="text-6xl font-bold text-white">{initial}</span>
    </div>
  );
};

export default ThumbnailPlaceholder;
