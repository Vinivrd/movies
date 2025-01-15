'use client'

import Image from 'next/image'
import VideoCardSkeleton from './VideoCardSkeleton'

interface MovieCardProps {
  title: string
  thumbnail: string
  duration: string
  views: string
  onPlay: () => void
  isLoading?: boolean
}

export default function MovieCard({ title, thumbnail, duration, views, onPlay, isLoading }: MovieCardProps) {
  if (isLoading) {
    return <VideoCardSkeleton />
  }

  return (
    <div 
      className="relative w-full aspect-video rounded-lg overflow-hidden group cursor-pointer"
      onClick={onPlay}
    >
      <Image 
        src={thumbnail}
        alt={title}
        fill
        className="object-cover transition-transform group-hover:scale-105"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="text-white font-bold mb-1">{title}</h3>
        <div className="flex gap-2 text-sm text-gray-200">
          <span>{duration}</span>
          <span>•</span>
          <span>{views} visualizações</span>
        </div>
      </div>
    </div>
  )
}
