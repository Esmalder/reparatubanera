import React from 'react';
import Layout from '../components/Layout';
import { Wrench, PaintBucket, Palette, ScanSearch, ShieldCheck } from 'lucide-react';

const servicesData = [
  {
    icon: <Wrench className="w-12 h-12 icon-gradient" />,
    title: 'Reparación de Bañeras y Platos de Ducha',
    description: 'Solucionamos cualquier desperfecto en la superficie de tu bañera o plato de ducha. Eliminamos grietas, agujeros, óxido y desconchados, devolviendo la integridad estructural y estética a tus sanitarios. Nuestro proceso de reparación es rápido, limpio y evita la necesidad de costosas obras y reemplazos.',
    image: 'agu1a.jpg',
    alt: 'Bañera con un desconchado antes de ser reparada'
  },
  {
    icon: <PaintBucket className="w-12 h-12 icon-gradient" />,
    title: 'Esmaltado Profesional',
    description: 'El esmaltado es la solución definitiva para renovar por completo la apariencia de tus sanitarios. Aplicamos un esmalte de poliuretano de alta resistencia que crea una nueva superficie lisa, brillante y extremadamente duradera. Es ideal para bañeras y lavabos que han perdido su brillo, tienen manchas permanentes o un tacto áspero.',
    image: 'banera1b.jpg',
    alt: 'Bañera blanca reluciente después de un esmaltado profesional'
  },
  {
    icon: <Palette className="w-12 h-12 icon-gradient" />,
    title: 'Cambio de Color',
    description: '¿Cansado del color de tu baño? Modernízalo sin obras. Ofrecemos un servicio de cambio de color que te permite personalizar tus sanitarios para que se adapten a tu nuevo estilo. Utilizamos pigmentos de alta calidad para garantizar un acabado uniforme y resistente, disponible en una amplia gama de colores.',
    image: 'baneraazul.jpeg',
    alt: 'Bañera esmaltada en un moderno color azul'
  },
  {
    icon: <ShieldCheck className="w-12 h-12 icon-gradient" />,
    title: 'Garantía y Calidad',
    description: 'Todos nuestros trabajos están respaldados por una garantía por escrito, porque confiamos en la calidad de nuestros materiales y la pericia de nuestros técnicos. Nuestro objetivo es tu total satisfacción y la máxima durabilidad de nuestras reparaciones y esmaltados.',
    image: 'jhonny.jpeg',
    alt: 'Técnico aplicando esmalte en una bañera'
  }
];

export default function Servicios() {
  return (
    <div className="">
      {/* Encabezado */}
      <div className="text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl">Nuestros Servicios</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Devolvemos la vida a tu baño con soluciones profesionales, rápidas y sin obras. Calidad y durabilidad garantizadas.
        </p>
      </div>

      {/* Lista de Servicios */}
      <div className="container mx-auto px-4 py-2">
        <div className="space-y-16">
          {servicesData.map((service, index) => (
            <div key={service.title} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2">
                <img src={service.image} alt={service.alt} className="w-full rounded-lg shadow-2xl" />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="text-lg leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}