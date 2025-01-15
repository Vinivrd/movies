'use client'

import { ChevronDown } from 'lucide-react'

interface ScrollButtonProps {
  className?: string;
}

export default function ScrollButton({ className = '' }: ScrollButtonProps) {
  const scrollToFeatured = () => {
    const featuredSection = document.getElementById('featured-movies');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToFeatured}
      className={`fixed left-1/2 top-[90%] -translate-x-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm
      text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all
        animate-bounce ${className}`}
      aria-label="Rolar para destaques"
    >
      <ChevronDown className="w-6 h-6" />
    </button>
  );
} 