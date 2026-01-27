'use client';

import { useEffect, useRef } from 'react';

const stats = [
  { value: '250+', label: 'Proyectos Completados' },
  { value: '15+', label: 'Años de Experiencia' },
  { value: '50+', label: 'Clientes Satisfechos' },
  { value: '100%', label: 'Clientes Satisfechos' },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const statElements = sectionRef.current?.querySelectorAll('.stat-item');
    statElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item text-center opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl md:text-6xl font-heading font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-secondary-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
