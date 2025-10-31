// src/components/ProductsSection.tsx
import { Search, ChevronDown } from 'lucide-react'
import ProductCard from './ProductCard'

export default function ProductsSection() {
  const products = [
    { imageUrl: '/images/modelo-a.png', title: 'Órtese Soft Curta com Polegar', code: 'OR1065', isNew: true },
    { imageUrl: '/images/modelo-b.png', title: 'Órtese Soft Curta sem Polegar', code: 'OR1066', isNew: false },
    { imageUrl: '/images/modelo-c.png', title: 'Órtese Safe Air', code: 'OR1051', isNew: false },
    { imageUrl: '/images/modelo-d.png', title: 'Órtese Soft Curta com Polegar', code: 'OR1065', isNew: true },
    { imageUrl: '/images/modelo-a.png', title: 'Órtese Soft Curta sem Polegar', code: 'OR1066', isNew: false },
    { imageUrl: '/images/modelo-b.png', title: 'Órtese Safe Air', code: 'OR1051', isNew: true },
  ]

  return (
    <section className="mt-16">
      <div className="flex gap-8">
        {/* FILTROS LATERAIS */}
        <aside 
          className="w-[306px] h-[325px] bg-white rounded-[10px] border border-[#D5D7D8] p-6"
          style={{ marginLeft: '86px' }}
        >
          <h3 className="font-raleway font-medium text-[16px] leading-[20px] text-gray-900 mb-6">
            Filtros
          </h3>
          
          <div className="space-y-6">
            <div className="bg-[#F8F8F8] rounded-lg p-4">
              <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-purple-700 transition">
                <span className="text-sm font-medium">Lançamentos</span>
              </button>
            </div>

            <div className="bg-[#F8F8F8] rounded-lg p-4">
              <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-purple-700 transition">
                <span className="text-sm font-medium">Famílias/Tecnologias</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-[#F8F8F8] rounded-lg p-4">
              <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-purple-700 transition">
                <span className="text-sm font-medium">Produtos</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>

        {/* ÁREA PRINCIPAL */}
        <div className="flex-1">
          <div 
            className="w-[864px] h-[40px] flex items-center justify-between mb-8"
            style={{ marginLeft: '24px' }}
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

          {/* GRID DE PRODUTOS */}
          <div 
            className="grid grid-cols-3 gap-6 w-[864px]"
            style={{ marginLeft: '24px' }}
          >
            {products.map((product, index) => (
              <ProductCard
                key={index}
                imageUrl={product.imageUrl}
                title={product.title}
                code={product.code}
                isNew={product.isNew}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}