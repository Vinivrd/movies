import React from 'react';

interface CategoryCardProps {
  category: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="relative w-72 h-48 rounded-lg overflow-hidden bg-gray-800 hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white font-medium text-lg">{category}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
