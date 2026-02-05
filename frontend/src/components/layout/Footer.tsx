export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la Empresa */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">ELECDATOS</h3>
            <p className="text-gray-400 mb-4">
              Más de 19 años ofreciendo soluciones integrales de infraestructura industrial, 
              eléctrica y tecnológica en México.
            </p>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Guadalajara | Colima
              </p>
            </div>
          </div>

          {/* Soluciones */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Soluciones</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/soluciones/infraestructura" className="hover:text-primary-400 transition-colors">Infraestructura y Conectividad</a></li>
              <li><a href="/soluciones/sistemas-electricos" className="hover:text-primary-400 transition-colors">Sistemas Eléctricos</a></li>
              <li><a href="/soluciones/redes-seguridad" className="hover:text-primary-400 transition-colors">Redes y Seguridad</a></li>
            </ul>
          </div>

          {/* Sectores */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Sectores</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Automotriz</li>
              <li>Avícola</li>
              <li>Salud</li>
              <li>Agroindustria</li>
              <li>Embotellado</li>
            </ul>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/nosotros" className="hover:text-primary-400 transition-colors">Nosotros</a></li>
              <li><a href="/proyectos" className="hover:text-primary-400 transition-colors">Proyectos</a></li>
              <li><a href="/contacto" className="hover:text-primary-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Línea Divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ELECDATOS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
