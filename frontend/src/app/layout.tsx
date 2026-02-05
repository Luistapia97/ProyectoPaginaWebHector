import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ELECDATOS - Soluciones de Infraestructura Industrial, Eléctrica y Tecnológica',
  description: 'Especialistas en cableado estructurado, instalaciones eléctricas de media y alta tensión, sistemas de videovigilancia CCTV y redes para la industria. Empresas líderes confían en nuestra infraestructura.',
  keywords: 'infraestructura industrial, instalaciones eléctricas, cableado estructurado, fibra óptica, videovigilancia CCTV, redes industriales, transformadores, energía renovable',
  authors: [{ name: 'ELECDATOS' }],
  openGraph: {
    title: 'ELECDATOS - Infraestructura Industrial',
    description: 'Soluciones integrales de infraestructura para la industria',
    url: 'https://elecdatos.com',
    siteName: 'ELECDATOS',
    locale: 'es_MX',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
