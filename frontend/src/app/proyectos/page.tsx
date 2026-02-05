export const metadata = {
  title: 'Proyectos - ELECDATOS',
  description: 'Conoce los proyectos exitosos que hemos realizado en diferentes sectores industriales.',
};

export default function ProyectosPage() {
  return (
    <main>
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-gradient-to-r from-primary-900 to-secondary-900">
        <div className="container-custom relative z-10 text-white pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 drop-shadow-lg">
            Nuestros Proyectos
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg">
            Casos de éxito en diferentes sectores industriales
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <p className="text-center text-xl text-gray-600">
            Contenido en desarrollo...
          </p>
        </div>
      </section>
    </main>
  );
}
