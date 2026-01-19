import React from 'react';
import { trabajosData } from '../trabajos';

function TrabajoCard({ trabajo }) {
  return (
    <a
      href={`trabajos.html?id=${trabajo.id}`}
      aria-label={`Ver ${trabajo.title}`}
      className="block rounded-lg shadow-md overflow-hidden text-left border hover:shadow-lg transition-shadow duration-150 transform hover:scale-105 cursor-pointer"
    >
      <div className="relative">
        <img src={trabajo.images?.[0]} alt={trabajo.title} className="w-full h-56 sm:h-64 lg:h-72 object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl lg:text-3xl font-semibold mb-3">{trabajo.title}</h3>
        <p className="text-muted-foreground text-base lg:text-lg mb-4 leading-relaxed">
          {trabajo.shortDescription || trabajo.description}
        </p>
        <div className="text-sm text-muted-foreground space-y-1">
          {Object.entries({
            'Tiempos de trabajo': trabajo.tiempo,
            'Obra necesaria': trabajo.obraNecesaria,
            'Tiempo de secado': trabajo.tiempoSecado
          }).map(([label, value]) => (
            <div key={label} className="flex justify-between">
              <span className="font-bold">{label}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Trabajos() {
  return (
    <section className="-mt-px px-4 py-16 text-center bg-background text-foreground">
      <h2 className="text-4xl mb-12">Algunos de Nuestros Trabajos</h2>
      <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {trabajosData.map((trabajo) => (
          <TrabajoCard key={trabajo.id} trabajo={trabajo} />
        ))}
      </div>
    </section>
  );
}
