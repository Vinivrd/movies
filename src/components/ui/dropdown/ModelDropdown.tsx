interface ModelDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

interface ModelCard {
  id: number;
  title: string;
  thumbnail: string;
}

const sampleModels: ModelCard[] = [
  { id: 1, title: "Modelo 1", thumbnail: "/model-thumb-1.jpg" },
  { id: 2, title: "Modelo 2", thumbnail: "/model-thumb-2.jpg" },
  { id: 3, title: "Modelo 3", thumbnail: "/model-thumb-3.jpg" },
  { id: 4, title: "Modelo 4", thumbnail: "/model-thumb-4.jpg" },
  { id: 5, title: "Modelo 5", thumbnail: "/model-thumb-5.jpg" },
  { id: 6, title: "Modelo 6", thumbnail: "/model-thumb-6.jpg" },
  { id: 7, title: "Modelo 7", thumbnail: "/model-thumb-7.jpg" },
  { id: 8, title: "Modelo 8", thumbnail: "/model-thumb-8.jpg" },
  { id: 9, title: "Modelo 9", thumbnail: "/model-thumb-9.jpg" },
  { id: 10, title: "Modelo 10", thumbnail: "/model-thumb-10.jpg" },
];

const popularModels = [
  "Modelos 3D",
  "Animações",
  "Personagens",
  "Cenários",
  "Texturas",
  "Efeitos Especiais"
];

export function ModelDropdown({ isOpen, onMouseEnter, onMouseLeave }: ModelDropdownProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 w-full bg-black h-[300px] border-t border-gray-800 p-6 rounded-lg"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto flex gap-6">
        <div className="w-[80%]">
          <h1 className="text-2xl font-bold text-white mb-4 border-l-4 border-red-600 pl-3">Modelos em destaque</h1>
          <div className="grid grid-cols-5 gap-3">
            {sampleModels.map((model) => (
              <div key={model.id} className="relative group cursor-pointer">
                <div className="aspect-video bg-gray-800 rounded-sm overflow-hidden hover:scale-105 transition-transform duration-200 max-w-[140px]">
                  <img 
                    src={model.thumbnail} 
                    alt={model.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-white mt-1 group-hover:text-red-500 transition-colors truncate max-w-[140px]">
                  {model.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[20%] border-l border-gray-800 pl-6">
          <h1 className="text-xl font-bold text-white mb-4 border-l-4 border-red-600 pl-3">Categorias populares</h1>
          <ul className="space-y-2">
            {popularModels.map((model, index) => (
              <li 
                key={index} 
                className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
              >
                {model}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 