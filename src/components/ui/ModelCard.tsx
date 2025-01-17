import Image from 'next/image'
import Link from 'next/link'

interface ModelCardProps {
  id: string
  name: string
  imageUrl: string
  videoCount: number
}

export function ModelCard({ id, name, imageUrl, videoCount }: ModelCardProps) {
  return (
    <Link href={`/modelos/${id}`}>
      <div className="flex flex-col gap-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium text-white">{name}</h3>
          <p className="text-sm text-gray-500">{videoCount} vídeos</p>
        </div>
      </div>
    </Link>
  )
}
