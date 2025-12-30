import React from 'react';
import { Wrench, PaintBucket, Palette, ScanSearch } from 'lucide-react';

const services = [
  {
    icon: <Wrench className="h-12 w-12 icon-gradient" />,
    title: 'Reparación General',
    description: 'Solucionamos grietas, agujeros, y óxido en bañeras y platos de ducha.',
  },
  {
    icon: <PaintBucket className="h-12 w-12 icon-gradient" />,
    title: 'Esmaltado Completo',
    description: 'Renovamos completamente la superficie, devolviendo el brillo y la durabilidad original.',
  },
  {
    icon: <Palette className="h-12 w-12 icon-gradient" />,
    title: 'Cambio de Color',
    description: 'Moderniza tu baño cambiando el color de tus sanitarios con un acabado profesional.',
  },
  {
    icon: <ScanSearch className="h-12 w-12 icon-gradient" />,
    title: 'Reparación Parcial',
    description: 'Arreglamos desperfectos localizados de forma rápida y eficiente, sin obras mayores.',
  },
];


export default function OurServicesSection() {
  return (
    <section className="-mt-px bg-background text-foreground pt-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl">Nuestros Servicios</h2>
        <p className="mt-4 text-lg">
          Ofrecemos soluciones expertas para la renovación de bañeras y sanitarios.
        </p>
      </div>

      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <a
            key={service.title}
            href="servicios.html"
            className="p-6 flex flex-col items-center text-center rounded-lg transition-shadow hover:shadow-md"
            aria-label={`Ver más sobre ${service.title}`}>
            {service.icon}
            <h3 className="mt-4 text-xl font-semibold text-card-foreground">{service.title}</h3>
            <p className="mt-2 text-muted-foreground">{service.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
