import React, { useState, useEffect, useRef } from 'react';
import 'simple-parallax-js'; // Importa la librería por sus efectos secundarios

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(true);
  const parallaxRef = useRef(null);
  const parallaxInstanceRef = useRef(null); // Ref para guardar la instancia

  useEffect(() => {
    const handleScroll = () => {
      // Ocultamos el header si el scroll es mayor de 480px
      setIsVisible(window.scrollY < 480);
    };

    window.addEventListener('scroll', handleScroll);

    // La librería se adjunta a sí misma en el objeto window
    if (parallaxRef.current && window.simpleParallax) {
      parallaxInstanceRef.current = new window.simpleParallax(parallaxRef.current, {
        scale: 1.6, // Devolvemos la escala a la librería
        overflow: true, // Dejamos que la librería gestione el overflow
        delay: 0.6,
        transition: 'cubic-bezier(0,0,0,1)'
      });
    }

    // Limpiamos el listener y la instancia de parallax cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Destruimos la instancia para evitar memory leaks y errores en Strict Mode
      if (parallaxInstanceRef.current) {
        parallaxInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* Contenedor de la imagen con posicionamiento fijo */}
      <div className="fixed top-60 left-0 w-full h-[50vh] -z-10">
        <img
          ref={parallaxRef}
          src="banera1.jpeg"
          className="w-full h-full object-cover"
          alt="Bañera renovada y brillante"
        />
      </div>

      {/* Contenedor para el contenido que empuja hacia abajo para dejar ver la imagen */}
      <div className="pt-12">
        {/* En lugar de eliminar el header, lo ocultamos con una transición suave */}
        <header
          className={`fixed z-20 bg-background/80 shadow-md transition-all duration-500 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="text-center">
            <h1 className='text-4xl pb-4'>ReparaTuBañera</h1>
            <p className="text-lg text-muted-foreground py-2">Especialistas en la reparación y esmaltado de bañeras y platos de ducha.</p>
          </div>
        </header>
      </div>
    </>
  );
}