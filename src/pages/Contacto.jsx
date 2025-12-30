import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

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
        
        {/* Profile Image */}
        <img 
          src="jhonny.jpeg" 
          alt="Jonatan Garcia, técnico especialista" 
          className="w-60 h-60 rounded-full mx-auto border-4 shadow-lg"
        />

        {/* Name & Title */}
        <div className="mt-4">
          <h1 className="text-3xl font-bold">Jonatan Garcia</h1>
          <p className="">Técnico Especialista</p>
        </div>

        {/* Description */}
        <div className="mt-6 text-sm leading-relaxed">
          <p>
            ¡Hola! Soy Jonatan. Con más de 15 años de experiencia, me dedico a devolverle la vida a tu baño. Mi compromiso es ofrecer un trabajo de máxima calidad, rápido, limpio y con garantía. Tu satisfacción es mi prioridad.
          </p>
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

      </div>
    </div>
  );
}