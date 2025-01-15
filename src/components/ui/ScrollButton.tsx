'use client'

import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ScrollButtonProps {
  className?: string;
}

export default function ScrollButton({ className = '' }: ScrollButtonProps) {
  const [isVisible, setIsVisible] = useState(true)

  const scrollToFeatured = () => {
    const featuredSection = document.getElementById('featured-movies');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    setIsVisible(window.scrollY < 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <button
      onClick={scrollToFeatured}
      className={`fixed left-1/2 top-[90%] -translate-x-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm
      text-white rounded-full flex items-center justify-center hover:bg-white/30 
      transition-all duration-300 ease-in-out
      animate-bounce ${className} 
      ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      aria-label="Rolar para destaques"
    >
      <ChevronDown className="w-6 h-6" />
    </button>
  );
} 