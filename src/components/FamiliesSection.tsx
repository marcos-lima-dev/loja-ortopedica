// src/components/FamiliesSection.tsx
import { ChevronRight } from 'lucide-react'

const families = [
  { name: 'Hidrolight Neo®', color: 'bg-[#80276C]', textColor: 'text-white', width: 'w-[135px]' },
  { name: 'Comfort Air®', color: 'bg-[#F8F8F8]', textColor: 'text-gray-800', width: 'w-[112px]' },
  { name: 'Ortho Recovery®', color: 'bg-[#F8F8F8]', textColor: 'text-gray-800', width: 'w-[112px]' },
  { name: 'Air Flex®', color: 'bg-[#F8F8F8]', textColor: 'text-gray-800', width: 'w-[112px]' },
  { name: 'Softline®', color: 'bg-[#F8F8F8]', textColor: 'text-gray-800', width: 'w-[112px]' },
  { name: 'Foot Care®', color: 'bg-[#F8F8F8]', textColor: 'text-gray-800', width: 'w-[112px]' },
  { name: 'Lean®', color: 'bg-[#F8F8F8]', textColor: 'text-gray-800', width: 'w-[112px]' },
]

export default function FamiliesSection() {
  return (
    <section 
      className="w-[814px] h-[156px] bg-white mt-8"
      style={{ 
        marginLeft: '86px',
        paddingLeft: '32px',
        paddingRight: '32px'
      }}
    >
      {/* TÍTULO */}
      <div className="mt-6">
        <h2 className="font-raleway font-medium text-[32px] leading-[37px] text-[#4C4D4C]">
          Conheça as{' '}
          <span className="font-bold text-[#80276C]">
            famílias exclusivas
          </span>{' '}
          da linha Orthopedic
        </h2>
      </div>

      {/* BOTÕES */}
      <div className="mt-4 flex items-center gap-4">
        {families.map((family) => (
          <button
            key={family.name}
            className={`
              ${family.color} ${family.textColor} 
              ${family.width} h-[36px] 
              rounded-[10px] 
              px-[8px] py-[8px] 
              text-xs font-medium 
              hover:opacity-90 transition 
              flex items-center justify-center gap-[8px]
              whitespace-nowrap
              border border-gray-300
            `}
          >
            <span>{family.name}</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        ))}
      </div>

      {/* DESCRIÇÃO */}
      <div className="mt-6 text-sm text-gray-700 leading-relaxed">
        <strong>Família voltada para extrair os benefícios do Neoprene.</strong><br />
        Propriedades térmicas, compressivas e elásticas: são essas três propriedades que fazem do Neoprene uma ferramenta eficaz no tratamento e prevenção de lesões no tratamento ortopédico.
      </div>
    </section>
  )
}