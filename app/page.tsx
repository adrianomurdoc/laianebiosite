"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ActionButtons from "@/components/ActionButtons";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen animated-bg relative overflow-x-hidden">
      {/* Partículas decorativas */}
      {mounted && (
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {/* CORREÇÃO AQUI: Criando um array real de 8 posições para mapear */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${10 + i * 12}%`,
                top: `${5 + ((i * 17) % 80)}%`,
                "--duration": `${7 + (i % 4)}s`,
                animationDelay: `${i * 0.8}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      {/* Container principal */}
      <div className="relative z-10 max-w-sm mx-auto px-5 py-10 flex flex-col gap-7">
        
        {/* Seções com renderização condicional de classes para evitar o flash de conteúdo sem estilo */}
        <section
          className={`transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Header />
        </section>

        <section
          className={`transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <AboutSection />
        </section>

        <section
          className={`transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <ActionButtons />
        </section>

        <section
          className={`transition-all duration-700 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Footer />
        </section>
      </div>
    </main>
  );
}