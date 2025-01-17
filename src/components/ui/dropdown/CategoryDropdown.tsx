interface CategoryDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

interface VideoCard {
  id: number;
  title: string;
  thumbnail: string;
}

const sampleVideos: VideoCard[] = [
  { id: 1, title: "Filme 1", thumbnail: "/sample-thumb-1.jpg" },
  { id: 2, title: "Filme 2", thumbnail: "/sample-thumb-2.jpg" },
  { id: 3, title: "Filme 3", thumbnail: "/sample-thumb-3.jpg" },
  { id: 4, title: "Filme 4", thumbnail: "/sample-thumb-4.jpg" },
  { id: 5, title: "Filme 5", thumbnail: "/sample-thumb-5.jpg" },
  { id: 6, title: "Filme 6", thumbnail: "/sample-thumb-6.jpg" },
  { id: 7, title: "Filme 6", thumbnail: "/sample-thumb-6.jpg" },
  { id: 8, title: "Filme 6", thumbnail: "/sample-thumb-6.jpg" },
  { id: 9, title: "Filme 6", thumbnail: "/sample-thumb-6.jpg" },
  { id: 10, title: "Filme 6", thumbnail: "/sample-thumb-6.jpg" },
];

const popularSearches = [
  "Ação e aventura",
  "Filmes de terror",
  "Comédia romântica",
  "Documentários",
  "Séries populares",
  "Animação"
];

export function CategoryDropdown({ isOpen, onMouseEnter, onMouseLeave }: CategoryDropdownProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 w-full bg-black  h-[300px] border-t border-gray-800 p-6 rounded-lg"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto flex gap-6">
        <div className="w-[80%]">
          <h1 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-3">Mais populares</h1>
          <div className="grid grid-cols-5 gap-3">
            {sampleVideos.map((video) => (
              <div key={video.id} className="relative group cursor-pointer">
                <div className="aspect-video bg-gray-800 rounded-sm overflow-hidden hover:scale-105 transition-transform duration-200 max-w-[140px]">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-white mt-1 group-hover:text-red-500 transition-colors truncate max-w-[140px]">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[20%] border-l border-gray-800 pl-6">
          <h1 className="text-xl font-bold text-white mb-4 border-l-4 border-red-600 pl-3">Pesquisas mais populares</h1>
          <ul className="space-y-2">
            {popularSearches.map((search, index) => (
              <li 
                key={index} 
                className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
              >
                {search}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
