import Link from 'next/link';
import Image from 'next/image';


export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
      {/* Background Image con Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Infraestructura Industrial ELECDATOS"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Contenido */}
      <div className="container-custom relative z-10 text-white pt-20">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            ELECDATOS
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light">
            Soluciones de Infraestructura Industrial, Eléctrica y Tecnológica
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/soluciones"
              className="bg-white text-black px-8 py-4 rounded-none font-medium hover:bg-primary-500 hover:text-white transition-all duration-300 text-center"
            >
              Ver Catálogo
            </Link>
            
            <Link 
              href="/contacto"
              className="border-2 border-white text-white px-8 py-4 rounded-none font-medium hover:bg-white hover:text-black transition-all duration-300 text-center"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-10 h-10 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-7 7-7-7 M19 13l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
