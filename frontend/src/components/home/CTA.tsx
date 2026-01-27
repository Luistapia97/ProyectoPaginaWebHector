import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          ¿Listo para transformar tu proyecto?
        </h2>
        
        <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
          Contáctanos hoy y descubre cómo nuestras soluciones pueden llevar tu infraestructura al siguiente nivel.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="bg-white text-black px-8 py-4 rounded-none font-medium hover:bg-primary-500 hover:text-white transition-all duration-300"
          >
            Solicitar Cotización
          </Link>
          
          <Link
            href="/catalogo"
            className="border-2 border-white text-white px-8 py-4 rounded-none font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            Ver Catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}
