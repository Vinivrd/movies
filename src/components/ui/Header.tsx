'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Bell, User, Menu, Search } from 'lucide-react'
import { Input } from "@/components/ui/Input"
import { Assine } from "@/components/ui/Assine"
import { CategoryDropdown } from "@/components/ui/dropdown/CategoryDropdown"
import { ModelDropdown } from "@/components/ui/dropdown/ModelDropdown"

type DropdownType = 'category' | 'model' | null;

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleMouseEnter = (type: DropdownType) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setActiveDropdown(type);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 800);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-black bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 space-y-4 md:space-y-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Menu className="text-white w-6 h-6 cursor-pointer mr-4 hover:text-red-600 transition-colors" />
              <Link href="/" className="text-red-600 text-3xl font-bold">VRDFLIX</Link>
            </div>
            <div className="flex items-center space-x-4 md:hidden">
              <Assine size="sm" />
              <User className="text-white w-6 h-6 cursor-pointer" />
            </div>
          </div>
          
          <div className="flex-grow max-w-xl w-full mx-auto md:mx-4">
            <Input 
              type="search" 
              placeholder="Buscar filmes, séries e mais..." 
              className=""
              startIcon={<Search className="w-5 h-5" />}
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Assine />
            <User className="text-white w-6 h-6 cursor-pointer" />
          </div>
        </div>

        <nav className="py-2 relative">
          <ul className="flex space-x-6 overflow-x-auto whitespace-nowrap">
            <li><Link href="/" className="text-gray-300 hover:text-white">Página Inicial</Link></li>
            <li><Link href="/videos" className="text-gray-300 hover:text-white">Vídeos</Link></li>
            <li>
              <Link 
                href="/movies" 
                className="text-gray-300 hover:text-white flex items-center gap-1"
                onMouseEnter={() => handleMouseEnter('category')}
                onMouseLeave={handleMouseLeave}
              >
                Categorias
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link 
                href="/new" 
                className="text-gray-300 hover:text-white flex items-center gap-1"
                onMouseEnter={() => handleMouseEnter('model')}
                onMouseLeave={handleMouseLeave}
              >
                Modelos
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </Link>
            </li>
            <li><Link href="/mylist" className="text-gray-300 hover:text-white">Minha Lista</Link></li>
          </ul>
          <CategoryDropdown 
            isOpen={activeDropdown === 'category'} 
            onMouseEnter={() => handleMouseEnter('category')}
            onMouseLeave={handleMouseLeave}
          />
          <ModelDropdown 
            isOpen={activeDropdown === 'model'} 
            onMouseEnter={() => handleMouseEnter('model')}
            onMouseLeave={handleMouseLeave}
          />
        </nav>
      </div>
    </header>
  )
}

