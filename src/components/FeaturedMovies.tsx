import Image from 'next/image'

const movies = [
  { id: 1, title: "Filme 1", image: "/placeholder.svg" },
  { id: 2, title: "Filme 2", image: "/placeholder.svg" },
  { id: 3, title: "Filme 3", image: "/placeholder.svg" },
  { id: 4, title: "Filme 4", image: "/placeholder.svg" },
  { id: 5, title: "Filme 5", image: "/placeholder.svg" },
]

export default function FeaturedMovies() {
  return (
    <section id="featured-movies" className="px-4 md:px-8 mt-8">
      <h2 className="text-2xl font-bold text-white mb-4">Videos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="relative aspect-[2/3] rounded overflow-hidden">
            <Image
              src={movie.image}
              alt={movie.title}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

