export default function MovieCardSkeleton() {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden animate-pulse">
      {/* Thumbnail */}
      <div className="w-full h-full bg-gray-700" />
      
      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <div className="h-4 bg-gray-600 rounded w-3/4 mb-2" />
        <div className="h-3 bg-gray-600 rounded w-1/2" />
      </div>
    </div>
  )
} 