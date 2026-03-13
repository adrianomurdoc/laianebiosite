"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center gap-6 pb-10 pt-4">
      
      {/* Divisor Gold do seu CSS */}
      <div className="gold-divider w-full max-w-[200px] opacity-50">
        <span
          className="text-[var(--gold)] text-[10px] select-none"
          aria-hidden="true"
        >
          ✦
        </span>
      </div>

      {/* Símbolo cristão com brilho sutil */}
      <div className="flex flex-col items-center">
        <span
          className="text-lg select-none transition-opacity duration-700 hover:opacity-100"
          style={{ 
            color: "var(--gold)", 
            opacity: 0.4,
            filter: "drop-shadow(0 0 5px rgba(201,169,110,0.3))"
          }}
          aria-label="Símbolo cristão"
        >
          ✝
        </span>
      </div>

      {/* Redes sociais usando a classe .social-icon do seu CSS */}
      <div className="flex items-center gap-4">
        <Link
          href="https://www.instagram.com/laiannesouzafotografias/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Instagram de Laiane Souza"
        >
          <FaInstagram size={18} />
        </Link>
      </div>

      {/* Identidade e Copyright */}
      <div className="flex flex-col items-center gap-2">
        <p
          className="font-lato text-[10px] font-bold uppercase tracking-[0.4em]"
          style={{ color: "var(--gold)", opacity: 0.8 }}
        >
          @laianesouzafotografia
        </p>

        <div className="flex flex-col items-center gap-1">
          <p
            className="font-lato text-[9px] tracking-widest uppercase"
            style={{ color: "var(--white-muted)", opacity: 0.4 }}
          >
            © {currentYear} • Laiane Souza
          </p>
          <div className="w-4 h-[1px] bg-[var(--gold-dark)] opacity-20" />
          <p
             className="font-lato text-[8px] tracking-[0.2em] uppercase"
             style={{ color: "var(--white-muted)", opacity: 0.3 }}
          >
            Memórias com Significado
          </p>
        </div>
      </div>
    </footer>
  );
}