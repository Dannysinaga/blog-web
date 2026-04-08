interface BlogDetailContentProps {
  description: string;
  content: string;
}

const BlogDetailContent = ({
  description,
  content,
}: BlogDetailContentProps) => (
  <>
    <div className="border-t border-gray-200 pt-6 mb-6">
      <p className="text-xl text-gray-700 font-medium leading-relaxed">
        {description}
      </p>
    </div>

    <div className="prose prose-lg max-w-none">
      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {content}
      </div>
    </div>
  </>
);

export default BlogDetailContent;
