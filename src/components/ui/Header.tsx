import Link from 'next/link'
import { Bell, User, Menu, Search } from 'lucide-react'
import { Input } from "@/components/ui/Input"
import { Assine } from "@/components/ui/Assine"

export default function Header() {
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

        <nav className="py-2">
          <ul className="flex space-x-6 overflow-x-auto whitespace-nowrap">
            <li><Link href="/" className="text-gray-300 hover:text-white">Página Inicial</Link></li>
            <li><Link href="/series" className="text-gray-300 hover:text-white">Vídeos</Link></li>
            <li><Link href="/movies" className="text-gray-300 hover:text-white">Categorias</Link></li>
            <li><Link href="/new" className="text-gray-300 hover:text-white">Modelos</Link></li>
            <li><Link href="/mylist" className="text-gray-300 hover:text-white">Minha Lista</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

