import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Infraestructura y Conectividad',
    description: 'Cableado estructurado (UTP/Fibra óptica), canalización y torres de comunicación para escalabilidad industrial.',
    image: '/images/services/cableado.webp',
    link: '/soluciones/infraestructura',
  },
  {
    title: 'Sistemas Eléctricos',
    description: 'Instalaciones de media y alta tensión, transformadores, sistemas de puesta a tierra y energía renovable.',
    image: '/images/services/electrical.jpg',
    link: '/soluciones/sistemas-electricos',
  },
  {
    title: 'Redes y Seguridad',
    description: 'Switching, routing, telefonía IP y sistemas de videovigilancia CCTV para protección de activos.',
    image: '/images/services/networks.jpg',
    link: '/soluciones/redes-seguridad',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Soluciones Integrales para la Industria</h2>
        
        <div className="w-20 h-1 bg-primary-600 mx-auto mb-16" />

        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Imagen */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-[400px] overflow-hidden group rounded-lg shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* Contenido */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl md:text-4xl font-heading font-bold">
                  {service.title}
                </h3>
                
                <p className="text-lg text-secondary-600 leading-relaxed">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="inline-block bg-black text-white px-8 py-3 rounded-none font-medium hover:bg-primary-600 transition-colors duration-200"
                >
                  Leer mas
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
