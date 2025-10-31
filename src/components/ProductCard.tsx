// src/components/ProductCard.tsx
// SEM import de Badge — usamos span com Tailwind puro

interface ProductCardProps {
  imageUrl: string
  title: string
  code: string
  isNew?: boolean
}

export default function ProductCard({ imageUrl, title, code, isNew = false }: ProductCardProps) {
  return (
    <div className="w-[268px] bg-white border border-[#D5D7D8] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {/* IMAGEM */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[338px] object-cover rounded-[7.78px] border border-[#D5D7D8]"
          style={{ borderRadius: '7.78px' }}
        />
        
        {/* BADGE "LANÇAMENTO" — Tailwind puro */}
        {isNew && (
          <span className="absolute top-3 left-3 bg-[#80276C] text-white text-xs font-medium px-2 py-1 rounded-md">
            Lançamento
          </span>
        )}
      </div>

      {/* CONTEÚDO */}
      <div className="p-4">
        <h4 className="font-raleway font-medium text-sm text-gray-900 line-clamp-2">
          {title}
        </h4>
        <p className="text-xs text-gray-600 mt-1">
          Cód. Produto <span className="font-medium">{code}</span>
        </p>
      </div>
    </div>
  )
}