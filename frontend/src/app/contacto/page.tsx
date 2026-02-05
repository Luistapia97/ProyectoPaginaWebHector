export const metadata = {
  title: 'Contacto - ELECDATOS',
  description: 'Contáctanos para conocer más sobre nuestras soluciones de infraestructura industrial.',
};

export default function ContactoPage() {
  return (
    <main>
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-gradient-to-r from-primary-900 to-secondary-900">
        <div className="container-custom relative z-10 text-white pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 drop-shadow-lg">
            Contacto
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg">
            Estamos listos para ayudarte con tu proyecto
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">Información de Contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Ubicaciones</p>
                      <p className="text-gray-600">Guadalajara, Jalisco</p>
                      <p className="text-gray-600">Colima, Colima</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary-50 p-8 rounded-lg">
                <h3 className="text-xl font-heading font-bold mb-4">Solicita una Cotización</h3>
                <p className="text-gray-600 mb-6">
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                </p>
                <a
                  href="mailto:contacto@elecdatos.com"
                  className="inline-block bg-black text-white px-8 py-3 rounded-none font-medium hover:bg-primary-600 transition-colors"
                >
                  Enviar Correo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
