// src/components/Header.tsx
import { Search, Globe } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="mx-auto w-full max-w-[1167px] h-[51px] bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-between px-6">
        
        {/* LOGO */}
        <div className="text-2xl font-bold text-gray-800">
          LOGO
        </div>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-blue-600">
          <a href="#" className="hover:underline">Produtos</a>
          <span className="text-gray-300">•</span>
          <a href="#" className="hover:underline">Sobre nós</a>
          <span className="text-gray-300">•</span>
          <a href="#" className="hover:underline">Contato</a>
          <span className="text-gray-300">•</span>
          <a href="#" className="hover:underline">Catálogos</a>
        </nav>

        {/* BUSCA */}
        <div className="hidden md:flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1 text-sm">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar..."
            className="outline-none w-32 text-gray-700"
          />
        </div>

        {/* BOTÃO + BANDEIRA */}
        <div className="flex items-center gap-3">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition">
            Fale conosco
          </button>
          <div className="flex items-center gap-1 text-sm">
            <Globe className="w-4 h-4 text-gray-600" />
            <select className="bg-transparent outline-none text-gray-700">
              <option>🇧🇷</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}