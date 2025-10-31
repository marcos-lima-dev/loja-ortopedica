// src/components/Banner.tsx
export default function Banner() {
  return (
    <section className="relative w-full h-[617px] mt-[83px] overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src="/images/banner-orthopedic.webp"
          alt="Linha Orthopedic"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Overlay roxo suave */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-purple-800/50 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">
          {/* Breadcrumb */}
          <p className="text-sm mb-4 opacity-90">
            <a href="#" className="hover:underline">Início</a> ›{' '}
            <span className="text-purple-200">Linha Orthopedic</span>
          </p>

          {/* Título */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            LINHA <span className="text-purple-300">ORTHOPEDIC</span>
          </h1>

          {/* Slogan inspirador */}
          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            Produtos desenvolvidos para auxiliar na <strong>prevenção</strong> e <strong>recuperação</strong> de pacientes com lesões ortopédicas.
          </p>

          {/* Botão */}
          <a
            href="#produtos"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition shadow-lg"
          >
            Conheça a linha completa
          </a>
        </div>
      </div>

      {/* Onda decorativa (opcional) */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" 
           style={{ clipPath: "ellipse(80% 100% at 50% 100%)" }} />
    </section>
  )
}