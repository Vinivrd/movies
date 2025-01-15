'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'

interface VideoCardProps {
  title: string
  thumbnail: string
  duration: string
  views: string
  onPlay: () => void
}

export default function VideoCard({ title, thumbnail, duration, views, onPlay }: VideoCardProps) {
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
      
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
        <Play className="w-12 h-12 text-white" />
      </div>
      
      {/* Informações */}
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