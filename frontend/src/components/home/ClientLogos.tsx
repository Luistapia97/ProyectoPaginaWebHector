import Image from 'next/image';

const clients = [
  { name: 'Pepsico', logo: '/images/logos/pepsico.png' },
  { name: 'Don Julio', logo: '/images/logos/donjulio.png' },
  { name: 'Jose Cuervo', logo: '/images/logos/josecuervo.png' },
  { name: 'Arca Continental', logo: '/images/logos/arcacontinental.png' },
  { name: 'Foxconn', logo: '/images/logos/foxconn.png' },
  { name: 'TAPX TMM', logo: '/images/logos/tapxtmm.png' },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-heading font-bold text-center mb-4">
          Empresas líderes confían en nuestra infraestructura
        </h2>
        
        <div className="w-20 h-1 bg-primary-600 mx-auto mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-40 h-20">
                <Image
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
