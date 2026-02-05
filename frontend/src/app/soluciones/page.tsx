import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Soluciones - ELECDATOS',
  description: 'Descubre nuestras soluciones de infraestructura industrial, sistemas eléctricos y redes de seguridad.',
};

export default function SolucionesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-gradient-to-r from-primary-900 to-secondary-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/hero-bg.jpg"
            alt="Soluciones ELECDATOS"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 text-white pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 drop-shadow-lg">
            Nuestras Soluciones
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg max-w-3xl">
            Infraestructura, tecnología y electricidad de clase mundial para tu industria
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Soluciones Integrales para la Industria Moderna
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              En ELECDATOS diseñamos e implementamos soluciones tecnológicas y eléctricas 
              a la medida de las necesidades de tu empresa. Con más de 19 años de experiencia 
              respaldando a líderes de la industria mexicana, ofrecemos servicios que garantizan 
              eficiencia, seguridad y escalabilidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Certificación Internacional</h3>
              <p className="text-gray-600">Cumplimos con estándares internacionales de calidad y seguridad</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Tecnología de Vanguardia</h3>
              <p className="text-gray-600">Utilizamos equipos y sistemas de última generación</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Soporte Continuo</h3>
              <p className="text-gray-600">Acompañamiento técnico antes, durante y después del proyecto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solución 1: Infraestructura y Conectividad */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/services/cableado.webp"
                  alt="Infraestructura y Conectividad"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block bg-primary-600 text-white px-4 py-1 text-sm font-semibold rounded">
                SOLUCIÓN 01
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Infraestructura y Conectividad
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Desarrollamos la columna vertebral de tu operación industrial con sistemas de 
                cableado estructurado de alto desempeño que garantizan conectividad confiable 
                y escalable para todas tus necesidades tecnológicas.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-primary-900">
                  Servicios Incluidos:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Cableado estructurado categoría 6, 6A y 7</strong> (UTP/STP) para redes de datos de alta velocidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Fibra óptica monomodo y multimodo</strong> para enlaces de larga distancia y alto ancho de banda</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Canalización profesional</strong> con charolas, tubería conduit y sistemas de ruteo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Torres y mástiles de comunicación</strong> para enlaces inalámbricos punto a punto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Racks y gabinetes de telecomunicaciones</strong> con certificación de cableado</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <h4 className="font-heading font-bold mb-3">Beneficios Clave:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Escalabilidad para crecimiento futuro</li>
                  <li>✓ Reducción de tiempos de inactividad</li>
                  <li>✓ Certificación con garantía extendida</li>
                  <li>✓ Documentación completa y marcaje profesional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solución 2: Sistemas Eléctricos */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/services/Sistemas-electricos.jpeg"
                  alt="Sistemas Eléctricos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block bg-primary-600 text-white px-4 py-1 text-sm font-semibold rounded">
                SOLUCIÓN 02
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Sistemas Eléctricos Industriales
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Diseñamos e instalamos sistemas eléctricos robustos y eficientes que cumplen con 
                las normativas mexicanas (NOM) e internacionales (NEC/IEC), garantizando seguridad 
                y continuidad operativa en entornos industriales exigentes.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-primary-900">
                  Servicios Especializados:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Instalaciones de media y alta tensión</strong> (hasta 34.5 kV) con subestaciones eléctricas completas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Transformadores eléctricos</strong> secos y de aceite con sistemas de protección</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Tableros de distribución y control</strong> con ingeniería detallada y automatización</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Sistemas de puesta a tierra</strong> y pararrayos certificados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Plantas de emergencia y UPS</strong> para continuidad crítica</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Energía solar y renovable</strong> para reducción de costos operativos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary-50 p-6 rounded-lg">
                <h4 className="font-heading font-bold mb-3">Sectores que Atendemos:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>✓ Automotriz</div>
                  <div>✓ Avícola</div>
                  <div>✓ Salud</div>
                  <div>✓ Agroindustria</div>
                  <div>✓ Embotellado</div>
                  <div>✓ Manufactura</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solución 3: Redes y Seguridad */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/services/networks.jpg"
                  alt="Redes y Seguridad"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block bg-primary-600 text-white px-4 py-1 text-sm font-semibold rounded">
                SOLUCIÓN 03
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Redes y Seguridad Electrónica
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Protegemos tus activos más valiosos con sistemas de red inteligentes y 
                plataformas de videovigilancia de última generación que te permiten monitorear 
                y controlar tu operación desde cualquier lugar, en tiempo real.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-primary-900">
                  Tecnologías Implementadas:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Switching y routing empresarial</strong> con switches administrables capa 2/3 y routers corporativos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Redes WiFi corporativas</strong> con puntos de acceso de alta densidad y controladores centralizados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Telefonía IP (VoIP)</strong> con centrales telefónicas IP y conferencias unificadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>CCTV IP de alta resolución</strong> con cámaras 4K, análisis de video (IA) y almacenamiento NVR/Cloud</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Control de acceso biométrico</strong> y lectores de proximidad con integración CCTV</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Sistemas de intrusión y alarmas</strong> perimetrales con monitoreo 24/7</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <h4 className="font-heading font-bold mb-3">Ventajas Competitivas:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Monitoreo remoto desde cualquier dispositivo</li>
                  <li>✓ Integración total entre sistemas (CCTV + Acceso + Alarmas)</li>
                  <li>✓ Análisis inteligente con IA (detección de rostros, conteo de personas)</li>
                  <li>✓ Respaldo automático en la nube</li>
                  <li>✓ Segmentación de redes con VLANs para mayor seguridad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrias que Atendemos */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Industrias que Atendemos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Automotriz',
                description: 'Soluciones para plantas de manufactura y ensamble automotriz'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: 'Embotellado y Bebidas',
                description: 'Infraestructura para líneas de producción y distribución'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: 'Salud',
                description: 'Sistemas críticos para hospitales y centros médicos'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                title: 'Agroindustria',
                description: 'Tecnología para procesamiento y empaque agrícola'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: 'Avícola',
                description: 'Control ambiental y automatización de procesos'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Manufactura',
                description: 'Sistemas para cualquier proceso manufacturero'
              },
            ].map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary-600 mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            ¿Listo para Transformar tu Infraestructura?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agenda una evaluación gratuita de tus necesidades y descubre cómo podemos 
            llevar tu operación al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-primary-900 px-8 py-4 font-bold hover:bg-gray-100 transition-colors duration-200"
            >
              Solicitar Cotización
            </Link>
            <a
              href="https://wa.me/523321234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 font-bold hover:bg-white hover:text-primary-900 transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
