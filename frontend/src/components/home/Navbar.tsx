'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/' },
    { name: 'Nosotros', href: '/' },
    { name: 'Contacto', href: '/' },
    { name: 'Catálogo', href: '/' },
  ];

  return (
    <nav className="sticky top-0 w-full bg-primary-900/95 backdrop-blur-sm z-50 border-b border-gray-700 shadow-md">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white hover:text-gray-200 transition-colors">
              ELECDATOS
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-7">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-gray-300 hover:text-white font-medium transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              
              <Link 
                href="/cotizacion" 
                className="bg-white text-primary-900 px-4 py-2 rounded-none font-bold hover:bg-gray-200 transition-all duration-300"
              >
                Cotizar
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary-800 focus:outline-none"
              aria-label="Menú principal"
            >
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary-900 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)} 
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-primary-800 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};