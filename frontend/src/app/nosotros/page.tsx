import Image from 'next/image';

export const metadata = {
  title: 'Nosotros - ELECDATOS',
  description: 'Conoce más sobre ELECDATOS, empresa líder con más de 19 años de experiencia en soluciones de infraestructura industrial en México.',
};

export default function NosotrosPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-gradient-to-r from-primary-900 to-secondary-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/hero-bg.jpg"
            alt="ELECDATOS"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 text-white pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 drop-shadow-lg">
            Nosotros
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg">
            Más de 19 años transformando la infraestructura industrial en México
          </p>
        </div>
      </section>

      {/* Perfil de la Empresa */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              ¿Quiénes Somos?
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Elecdatos</strong> es una empresa nacional que ofrece <strong>soluciones integrales 
                de infraestructura industrial, servicios tecnológicos y eléctricos</strong> en México.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Con más de <strong>19 años de experiencia</strong> en el panorama industrial mexicano, 
                nos hemos consolidado como un socio estratégico para empresas líderes en diversos sectores.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-primary-50 p-8 rounded-lg">
                  <h3 className="text-xl font-heading font-bold text-primary-900 mb-4">
                    Ubicaciones Estratégicas
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Guadalajara, Jalisco
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Colima, Colima
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary-50 p-8 rounded-lg">
                  <h3 className="text-xl font-heading font-bold text-secondary-900 mb-4">
                    Sectores de Especialidad
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Automotriz
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Avícola
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Salud
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Agroindustria
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Embotellado
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Nuestros Valores
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Calidad</h3>
              <p className="text-gray-600">
                Compromiso con la excelencia en cada proyecto que desarrollamos
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Experiencia</h3>
              <p className="text-gray-600">
                Más de 19 años de trayectoria en el sector industrial mexicano
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Innovación</h3>
              <p className="text-gray-600">
                Soluciones tecnológicas de vanguardia adaptadas a cada cliente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos y descubre cómo podemos ayudarte a transformar tu infraestructura industrial
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-black px-8 py-4 rounded-none font-medium hover:bg-primary-500 hover:text-white transition-all duration-300"
          >
            Contactar Ahora
          </a>
        </div>
      </section>
    </main>
  );
}
