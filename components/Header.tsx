"use client";

import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";

export default function Header() {
  const [currentImage, setCurrentImage] = useState(0);

  // Lista das 3 fotos (Coloque os nomes reais dos arquivos na pasta public)
  const images = [
    "/laiane-1.jpg", 
    "/laiane-2.jpg", 
    "/laiane-3.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Troca a foto a cada 4 segundos
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <header className="flex flex-col items-center gap-6 pt-4 text-center">
      
      {/* Ícone câmera com linha guia */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative">
          <FaCamera
            size={20}
            style={{ color: "var(--gold)" }}
            className="relative z-10 opacity-90"
            aria-hidden="true"
          />
          <div className="absolute inset-0 blur-lg bg-[var(--gold)] opacity-20 scale-150" />
        </div>

        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, var(--gold), transparent)",
          }}
        />
      </div>

      {/* Avatar com Ring Animado - Mantido em w-36 (15% maior) */}
      <div className="avatar-ring p-[3px]" aria-label="Fotos de Laiane Souza">
        <div
          className="w-36 h-36 rounded-full overflow-hidden relative border border-white/10"
          style={{
            background: "var(--black-soft)",
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Foto de Laiane Souza ${index + 1}`}
              /* Adicionado o efeito Ken Burns: a foto começa com zoom e estabiliza ao aparecer */
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-out ${
                index === currentImage 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-110"
              }`}
            />
          ))}
          
          {/* Efeito de vidro interno para acabamento premium */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5 pointer-events-none" />
        </div>
      </div>

      {/* Nome e Título */}
      <div className="space-y-3">
        <h1
          className="font-playfair text-4xl font-bold tracking-tight leading-tight"
          style={{ color: "var(--white)" }}
        >
          Laiane Souza
        </h1>

        <div className="inline-block px-4 py-1 border-y border-[var(--gold-dark)] opacity-90">
          <p
            className="font-lato text-[10px] font-bold uppercase tracking-[0.4em]"
            style={{ color: "var(--gold)" }}
          >
            Photographer
          </p>
        </div>
      </div>

      {/* Divisor Gold */}
      <div className="gold-divider w-full max-w-[280px]">
        <span
          className="text-[var(--gold)] text-xs opacity-70"
          aria-hidden="true"
        >
          ✦
        </span>
      </div>

      {/* Frase Inspiracional */}
      <blockquote className="max-w-[280px]" aria-label="Frase de efeito">
        <p
          className="font-playfair text-[17px] italic leading-relaxed"
          style={{ color: "var(--white-soft)" }}
        >
          “Antes de ser ouvida, você precisa ser vista.”
        </p>
      </blockquote>

    </header>
  );
}