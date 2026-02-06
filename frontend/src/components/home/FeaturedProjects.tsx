import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'Modern Villa',
    category: 'Residential',
    image: '/images/projects/modern-villa.jpg',
    slug: 'modern-villa',
  },
  {
    title: 'Corporate Headquarters',
    category: 'Commercial',
    image: '/images/services/electrical2.jpg',
    slug: 'corporate-headquarters',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-4">
          <p className="text-sm uppercase tracking-wider text-primary-600 font-semibold mb-2">
            PORTFOLIO
          </p>
          <h2 className="section-title">Futuros Proyectos</h2>
        </div>

        <p className="section-subtitle mb-16">
          Explore nuestra colección de proyectos que muestran nuestro compromiso con el diseño excepcional y la innovación tecnológica.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/proyectos/${project.slug}`}
              className="group relative h-[500px] overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Contenido */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-sm uppercase tracking-wider mb-2">
                  {project.category}
                </p>
                <h3 className="text-3xl font-heading font-bold">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/proyectos"
            className="inline-block border-2 border-black text-black px-8 py-3 rounded-none font-medium hover:bg-black hover:text-white transition-all duration-200"
          >
            Ver Todos los Proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
