import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const CallToAction = () => {
  const email = 'info@reparatubanera.com';
  const phoneNumber = '+34613116385';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}`;

  // Button style: icon + label horizontally (like Contacto buttons)
  const ctaButton =
    "flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-lg transition-colors duration-300 bg-background/50 border hover:bg-foreground hover:text-background w-full";

  return (
    <div className="flex flex-col items-center justify-center bg-background text-foreground px-4 py-4">
      <h2 className="text-3xl font-bold px-2 text-center">¿Listo para renovar tu baño?</h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto px-2 text-center">
        Envíanos una foto del desperfecto por WhatsApp y te daremos un presupuesto sin compromiso. ¡Es rápido, fácil y económico!
      </p>
      <div className="flex flex-col items-center gap-6 py-6 pt-12 w-[80%] mx-auto">
        <a href={`mailto:${email}`} className={ctaButton} aria-label="Enviar correo">
          <Mail className="w-6 h-6 icon-gradient" />
          <span className="ml-3">Email</span>
        </a>

        <a href={`tel:${phoneNumber}`} className={ctaButton} aria-label="Llamar por teléfono">
          <Phone className="w-6 h-6 icon-gradient" />
          <span className="ml-3">Llamanos</span>
        </a>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={ctaButton} aria-label="Contactar por WhatsApp">
          <MessageSquare className="w-6 h-6 icon-gradient" />
          <span className="ml-3">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;

