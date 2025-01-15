import Image from 'next/image'
import { Play, Info } from 'lucide-react'
import ScrollButton from './ui/ScrollButton'

export default function Banner() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/eldenRIng.jpg"
        alt="Elden Ring Banner"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/50 to-transparent h-[70%]">
        <div className="absolute bottom-16 left-8 right-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Elden Ring</h1>
          <p className="text-lg text-white mb-6 max-w-xl">
            Uma jornada épica através das Terras Intermédias, um lugar onde lendas nascem. 
            Explore um vasto mundo cheio de mistérios, enfrente inimigos formidáveis e descubra 
            a grandeza de se tornar um Lorde Prístino.
          </p>
          <div className="flex space-x-4">
            <button className="flex items-center bg-white text-black px-6 py-2 rounded hover:bg-white/90 transition">
              <Play className="w-6 h-6 mr-2" />
              Assistir
            </button>
            <button className="flex items-center bg-gray-500 bg-opacity-50 text-white px-6 py-2 rounded hover:bg-opacity-70 transition">
              <Info className="w-6 h-6 mr-2" />
              Mais Informações
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

