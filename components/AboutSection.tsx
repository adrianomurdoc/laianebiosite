"use client";

import { FaHeart } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section 
      className="about-card p-8 relative overflow-hidden group" 
      aria-label="Sobre Laiane Souza"
    >
      {/* Brilho sutil interno para dar profundidade ao card */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--gold)] opacity-[0.03] blur-[60px] rounded-full pointer-events-none" />

      {/* Cabeçalho da seção com o estilo gold-divider do seu CSS */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-8 h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent, var(--gold))",
          }}
        />
        <h2
          className="font-lato text-[11px] font-bold uppercase tracking-[0.4em] whitespace-nowrap"
          style={{ color: "var(--gold)" }}
        >
          Sobre Mim
        </h2>
        <div
          className="flex-1 h-[1px]"
          style={{
            background: "linear-gradient(90deg, var(--gold), transparent)",
          }}
        />
      </div>

      {/* Bloco de Texto */}
      <div className="space-y-5">
        <p
          className="font-lato text-[16px] leading-relaxed text-center"
          style={{ color: "var(--white)" }}
        >
          Pode me chamar de{" "}
          <span
            className="font-bold border-b border-[var(--gold-dark)]"
            style={{ color: "var(--gold-light)" }}
          >
            Lay
          </span>
          .
        </p>
        
        <p
          className="font-lato text-sm leading-7 text-center font-light italic"
          style={{ color: "var(--white-muted)" }}
        >
          Tenho 31 anos, sou fotógrafa, esposa, mãe e cristã. Minha jornada é
          marcada pela fé e pelo desejo de revelar a beleza de cada detalhe,
          transformando histórias em memórias com significado.
        </p>
      </div>

      {/* Ícone decorativo com efeito de pulso e brilho */}
      <div className="flex justify-center mt-8">
        <div className="relative flex items-center justify-center">
          <FaHeart
            size={14}
            className="animate-pulse relative z-10"
            style={{ color: "var(--gold)" }}
            aria-hidden="true"
          />
          {/* Aura dourada atrás do coração */}
          <div className="absolute w-6 h-6 bg-[var(--gold-dark)] opacity-20 blur-md rounded-full animate-ping" />
        </div>
      </div>
    </section>
  );
}