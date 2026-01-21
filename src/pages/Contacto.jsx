import React from 'react';
import { Mail, Phone, MessageSquare, MapPin, Globe } from 'lucide-react';

const socialLinks = [
  {
    icon: <Mail className="w-6 h-6 icon-gradient" />,
    label: 'Email',
    href: 'mailto:info@reparatubanera.com', // Reemplaza con tu email
  },
  {
    icon: <Phone className="w-6 h-6 icon-gradient" />,
    label: 'Llamada',
    href: 'tel:+34613116385', // Reemplaza con tu teléfono
  },
  {
    icon: <MessageSquare className="w-6 h-6 icon-gradient" />,
    label: 'WhatsApp',
    href: 'https://wa.me/34613116385', // Reemplaza con tu número de WhatsApp
  }
];

export default function Contacto() {
  return (
    <div className="flex items-center justify-center min-h-screen py-24 px-4">
      <div className="w-full max-w-sm text-center">

        {/* Name & Title */}
        <div className="mt-4">
          <h1 className="text-3xl font-bold">Repara Tu Bañera</h1>
          <p className="">Técnicos Especialistas</p>
        </div>

        {/* Description */}
        <div className="mt-6 text-sm leading-relaxed">
          <p>
            Hola, contamos con equipo técnico con más de 15 años de experiencia; nos dedicamos a devolverle la vida a tu baño. Nuestro compromiso es ofrecer un trabajo de máxima calidad, rápido, limpio y con garantía. Tu satisfacción es nuestra prioridad.
          </p>
        </div>

        {/* Areas legend (moved here from below the map) */}
        <div className="mt-3 text-sm text-left">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 icon-gradient" />
            <span className="font-semibold">Particular:</span>
            <span className="ml-2 text-right">Cataluña, Valencia y Madrid</span>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <Globe className="w-4 h-4 icon-gradient" />
            <span className="font-semibold">Profesional:</span>
            <span className="ml-2">Toda España, Baleares y Canarias</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col space-y-4">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 px-4 border rounded-lg font-semibold transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
              {link.icon}
              <span className="ml-3">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Map & Areas (Google Maps iframe) */}
        <div className="mt-6 w-full max-w-md mx-auto">
          <div className="relative bg-white rounded-lg shadow-sm overflow-hidden" style={{paddingTop: '56.25%'}}>
            <iframe
              title="Mapa de actuación"
              src="https://www.google.com/maps?q=40.0,-4.0&z=6&hl=es&output=embed"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0, zIndex: 1 }}
              loading="lazy"
            />

            {/* Pines eliminados: ya no se muestran puntos rojos sobre el mapa */}
          </div>
        </div>

      </div>
    </div>
  );
}