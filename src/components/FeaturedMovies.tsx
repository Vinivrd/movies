'use client'

import { useEffect, useState } from 'react'
import MovieCard from '@/components/ui/MovieCard'
import MovieCardSkeleton from '@/components/ui/MovieCardSkeleton'

const movies = [
  {
    id: '1',
    title: 'O Senhor dos Anéis',
    thumbnail: 'https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    duration: '2:30',
    views: '1.2M'
  },
  // ... outros filmes
]

export default function FeaturedMovies() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="featured-movies" className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-6">Filmes em Destaque</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {isLoading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))
        ) : (
          movies.map(movie => (
            <MovieCard
              key={movie.id}
              {...movie}
              onPlay={() => console.log(`Reproduzindo filme ${movie.id}`)}
            />
          ))
        )}
      </div>
    </section>
  )
}

