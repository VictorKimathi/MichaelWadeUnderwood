import React from 'react';
interface PortfolioCardProps {
  title: string;
  publication: string;
  description: string;
  imageUrl: string;
  articleUrl: string;
  tags?: string[];
}
const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  publication,
  description,
  imageUrl,
  articleUrl,
  tags = []
}) => {
  return <div className="group overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold line-clamp-2 mb-2 group-hover:text-gray-800">
            {title}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-500 mb-3">{publication}</p>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        {tags.length > 0 && <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                {tag}
              </span>)}
          </div>}
        <a href={articleUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-medium text-black hover:text-gray-800 transition-colors">
          Read Article
          <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>;
};
export default PortfolioCard;