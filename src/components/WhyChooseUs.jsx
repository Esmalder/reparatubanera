import React from 'react';
import { HandCoins, Trophy, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="px-6 py-12 mt-150 pt-2 bg-background text-foreground component-bg-main relative overflow-hidden">
      <h2 className="text-center mt-8 text-4xl">A nosotros nos eligen porque somos</h2>

      <div className="mt-8 flex justify-center">
        <div className="bg-card border rounded-2xl p-6 shadow-sm max-w-4xl w-full">
          <div className="mb-6">
            <div className="rounded-full bg-background/10 dark:bg-background/20 p-3 mb-3">
              <Zap className="h-12 w-12 icon-gradient" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-1">Rápidos</h3>
              <p className="text-sm text-muted-foreground max-w-lg">Puedes enviarnos por WhatsApp una foto del desperfecto junto a la localidad y te mandaremos un presupuesto sin compromiso</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="rounded-full bg-background/10 dark:bg-background/20 p-3 mb-3">
              <Trophy className="h-12 w-12 icon-gradient" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-1">Líderes en el sector</h3>
              <p className="text-sm text-muted-foreground max-w-lg">Precios competitivos sin comprometer la calidad</p>
            </div>
          </div>

          <div>
            <div className="rounded-full bg-background/10 dark:bg-background/20 p-3 mb-3">
              <HandCoins className="h-12 w-12 icon-gradient" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-1">Económicos</h3>
              <p className="text-sm text-muted-foreground max-w-lg">Dejar tu baño como nuevo no te costará un ojo de la cara</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}