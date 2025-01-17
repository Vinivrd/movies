'use client'

import { useEffect, useState } from 'react'
import CategoryCard from '@/components/ui/CategoryCard'
import MediaCardSkeleton from '@/components/ui/MediaCardSkeleton'
import Header from '@/components/ui/Header'

interface Category {
  id: string
  name: string
}

export default function CategoriasPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setCategories([
        {
          id: '1',
          name: 'Ação'
        },
        {
          id: '2',
          name: 'Comédia'
        },
        {
          id: '3',
          name: 'Drama'
        },
        {
          id: '4',
          name: 'Ficção Científica'
        },
        {
          id: '5',
          name: 'Terror'
        },
        {
          id: '6',
          name: 'Documentário'
        },
        {
          id: '7',
          name: 'Animação'
        },
        {
          id: '8',
          name: 'Romance'
        }
      ])
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      
      <main className="container mx-auto px-4 pt-36">
        <h1 className="text-3xl font-bold text-white mb-8">Categorias</h1>     
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          ) : (
            categories.map(category => (
              <CategoryCard
                key={category.id}
                category={category.name}
              />
            ))
          )}
        </div>
      </main>
    </div>
  )
} 