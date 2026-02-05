'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Soluciones', href: '/soluciones' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo_sin_fondo.webp"
                alt="ELECDATOS Logo"
                fill
                className="object-contain"
              />
            </div>
            <span
              className={`text-2xl font-heading font-bold transition-colors ${
                isScrolled ? 'text-black' : 'text-white drop-shadow-lg'
              }`}
            >
              ELECDATOS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors relative group ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-white hover:text-primary-300 drop-shadow-lg'
                } ${pathname === link.href ? 'font-bold' : ''}`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-primary-600' : 'bg-white'
                  } ${pathname === link.href ? 'w-full' : ''}`}
                />
              </Link>
            ))}
            <Link
              href="/contacto"
              className={`px-6 py-2 rounded-none font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-black text-white hover:bg-primary-600'
                  : 'bg-white text-black hover:bg-primary-500 hover:text-white'
              }`}
            >
              Cotizar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-xl rounded-b-lg absolute top-20 left-0 right-0 mx-4">
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-gray-700 hover:text-primary-600 font-medium transition-colors ${
                    pathname === link.href ? 'text-primary-600 font-bold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-black text-white px-6 py-3 rounded-none font-medium hover:bg-primary-600 transition-colors text-center"
              >
                Cotizar
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
