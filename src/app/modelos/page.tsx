'use client'

import { useEffect, useState } from 'react'
import { ModelCard } from '@/components/ui/ModelCard'
import MediaCardSkeleton from '@/components/ui/MediaCardSkeleton'
import Header from '@/components/ui/Header'

interface Model {
  id: string
  title: string
  thumbnail: string
  category: string
  author: string
  likes: number
}

export default function ModelosPage() {
  const [models, setModels] = useState<Model[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setModels([
        {
          id: '1',
          title: 'Personagem Sci-fi',
          thumbnail: '/model-thumb-1.jpg',
          category: 'Personagens',
          author: 'VRD Studio',
          likes: 1200
        },
        {
          id: '2',
          title: 'Cenário Medieval',
          thumbnail: '/model-thumb-2.jpg',
          category: 'Cenários',
          author: 'Creative Arts',
          likes: 890
        },
        {
          id: '3',
          title: 'Efeito de Partículas',
          thumbnail: '/model-thumb-3.jpg',
          category: 'Efeitos Especiais',
          author: 'FX Master',
          likes: 756
        },
        {
          id: '4',
          title: 'Personagem Fantasia',
          thumbnail: '/model-thumb-4.jpg',
          category: 'Personagens',
          author: 'Digital Arts',
          likes: 945
        }
      ])
      setIsLoading(false)
    }, 2000)
  }, [])

  const handleViewModel = (modelId: string) => {
    console.log(`Visualizando modelo ${modelId}`)
  }

  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      
      <main className="container mx-auto px-4 pt-36">
        <h1 className="text-3xl font-bold text-white mb-8">Modelos em Destaque</h1>     
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          ) : (
            models.map(model => (
              <ModelCard
                key={model.id}
                id={model.id}
                name={model.title}
                imageUrl={model.thumbnail}
                videoCount={model.likes}
              />
            ))
          )}
        </div>
      </main>
    </div>
  )
} 