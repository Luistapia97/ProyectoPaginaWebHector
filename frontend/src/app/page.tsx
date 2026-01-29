import Hero from '@/components/home/Hero';
import ClientLogos from '@/components/home/ClientLogos';
import Services from '@/components/home/Services';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Stats from '@/components/home/Stats';
import CTA from '@/components/home/CTA';
import Navbar from '@/components/home/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientLogos />
      <Stats />
      <Services />
      <FeaturedProjects />
      <CTA />
    </main>
  );
}
