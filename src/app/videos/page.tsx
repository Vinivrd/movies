'use client'

import { useEffect, useState } from 'react'
import MediaCard from '@/components/ui/MediaCard'
import MediaCardSkeleton from '@/components/ui/MediaCardSkeleton'
import Header from '@/components/ui/Header'

interface Video {
  id: string
  title: string
  thumbnail: string
  duration: string
  views: string
}

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setVideos([
        {
          id: '1',
          title: 'Trailer: O Senhor dos Anéis',
          thumbnail: 'https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
          duration: '2:30',
          views: '1.2M'
        },
        {
          id: '2',
          title: 'Matrix Resurrections',
          thumbnail: 'https://image.tmdb.org/t/p/original/8c4a8kE7PizaGQQnditMmI1xbRp.jpg',
          duration: '3:15',
          views: '800K'
        },
        {
          id: '3',
          title: 'Batman: O Cavaleiro das Trevas',
          thumbnail: 'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
          duration: '2:45',
          views: '950K'
        },
        {
          id: '4',
          title: 'Duna',
          thumbnail: 'https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
          duration: '3:00',
          views: '1.5M'
        }
      ])
      setIsLoading(false)
    }, 2000)
  }, [])

  const handlePlayVideo = (videoId: string) => {
    console.log(`Reproduzindo vídeo ${videoId}`)
  }

  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      
      <main className="container mx-auto px-4 pt-36">
        <h1 className="text-3xl font-bold text-white mb-8">Vídeos em Destaque</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          ) : (
            videos.map(video => (
              <MediaCard
                key={video.id}
                {...video}
                onPlay={() => handlePlayVideo(video.id)}
              />
            ))
          )}
        </div>
      </main>
    </div>
  )
} 