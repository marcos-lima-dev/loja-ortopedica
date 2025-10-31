// src/components/ProductsSection.tsx
import { Search, ChevronDown } from 'lucide-react'

export default function ProductsSection() {
  return (
    <section className="mt-16"> {/* ~64px de espaço após o divisor */}
      <div className="flex gap-8">
        {/* FILTROS LATERAIS */}
        <aside 
          className="w-[306px] h-[325px] bg-white rounded-lg border border-[#D5D7D8] p-6"
          style={{ marginLeft: '86px' }}
        >
          <h3 className="font-raleway font-semibold text-lg mb-4">Filtros</h3>
          
          <div className="space-y-4">
            <div>
              <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-purple-700">
                <span>Lançamentos</span>
              </button>
            </div>

            <div className="border-t pt-4">
              <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-purple-700">
                <span>Famílias/Tecnologias</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="border-t pt-4">
              <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-purple-700">
                <span>Produtos</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>

        {/* ÁREA PRINCIPAL: CONTADOR + BUSCA + GRID */}
        <div className="flex-1">
          {/* CONTADOR + BUSCA + BOTÃO */}
          <div 
            className="w-[864px] h-[40px] flex items-center justify-between mb-8"
            style={{ marginLeft: '24px' }} // 416px - 86px - 306px - gap
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-700">86 produtos</span>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm w-64 focus:outline-none focus:border-purple-500"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition flex items-center gap-2">
              Baixar Catálogo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2-8H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z" />
              </svg>
            </button>
          </div>

          {/* GRID DE PRODUTOS (vazio por enquanto) */}
          <div className="grid grid-cols-3 gap-6">
            {/* Cards virão aqui */}
          </div>
        </div>
      </div>
    </section>
  )
}