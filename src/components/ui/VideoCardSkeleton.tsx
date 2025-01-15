export default function VideoCardSkeleton() {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden animate-pulse">
      {/* Thumbnail do vídeo */}
      <div className="w-full h-full bg-gray-700" />
      
      {/* Overlay com informações */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        {/* Título */}
        <div className="h-4 bg-gray-500 rounded w-3/4 mb-2" />
        
        {/* Metadados */}
        <div className="flex gap-2">
          <div className="h-3 bg-gray-500 rounded w-20" />
          <div className="h-3 bg-gray-500 rounded w-16" />
        </div>
      </div>
    </div>
  )
} 