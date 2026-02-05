export const metadata = {
  title: 'Soluciones - ELECDATOS',
  description: 'Descubre nuestras soluciones de infraestructura industrial, sistemas eléctricos y redes de seguridad.',
};

export default function SolucionesPage() {
  return (
    <main>
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-gradient-to-r from-primary-900 to-secondary-900">
        <div className="container-custom relative z-10 text-white pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 drop-shadow-lg">
            Nuestras Soluciones
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg">
            Infraestructura, tecnología y electricidad para tu industria
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
