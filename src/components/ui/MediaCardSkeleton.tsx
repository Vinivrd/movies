export default function MediaCardSkeleton() {
  return (
    <div className="w-full space-y-2">
      {/* Thumbnail skeleton */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden animate-pulse">
        <div className="w-full h-full bg-gray-700" />
      </div>

      {/* Info skeleton */}
      <div className="px-1 space-y-2">
        <div className="h-4 bg-gray-700 rounded w-3/4" />
        <div className="h-3 bg-gray-700 rounded w-1/2" />
      </div>
    </div>
  )
} 