// src/components/Footer.tsx
import { Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react'
import { Button } from './ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Coluna 1: Logo */}
          <div className="flex items-start">
            <h2 className="text-3xl font-bold text-white">LOGO</h2>
          </div>

          {/* Coluna 2: Institucional */}
          <div>
            <h3 className="text-white font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trabalhe conosco</a></li>
            </ul>
          </div>

          {/* Coluna 3: Download de Catálogos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Download de Catálogos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Catálogo geral</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Linha Orthopedic</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Linha Sports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Linha Special Cares</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Catálogo Foot Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Catálogo Acessibilidade</a></li>
            </ul>
          </div>

          {/* Coluna 4: Linhas de Produtos + Contato */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-4">Linhas de produtos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Orthopedic</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Special Cares</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Entre em contato e tire suas dúvidas</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>+55 48 3333 3333</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span>sac@loremipsum.com.br ou rp@loremipsum.com.br</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm mb-3">Nos acompanhe também nas redes sociais</p>
                <div className="flex gap-3">
                  <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center text-xs text-gray-400">
            {/* Selecionar País */}
            <div className="flex items-center gap-2 mb-3 lg:mb-0">
              <span>Selecionar País</span>
              <Select defaultValue="br">
                <SelectTrigger className="w-fit h-8 text-xs border-gray-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="br">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🇧🇷</span>
                      <span>Brasil</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Copyright e Endereço */}
            <div className="text-center lg:text-right space-y-1">
              <p>© 2023 Lorem Ipsum. Todos os direitos reservados.</p>
              <p>Av dos Butiá, 150 – Florianópolis – SC – Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}