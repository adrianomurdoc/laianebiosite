"use client";

import Link from "next/link";
import { FaWhatsapp, FaArrowRight, FaImage } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface ActionButtonProps {
  href: string;
  label: string;
  subtext?: string;
  variant: "primary" | "secondary" | "whatsapp";
  icon?: React.ReactNode;
  target?: "_blank" | "_self";
  rel?: string;
}

function ActionButton({
  href,
  label,
  subtext,
  variant,
  icon,
  target = "_blank",
  rel = "noopener noreferrer",
}: ActionButtonProps) {
  const className =
    variant === "primary"
      ? "btn-primary"
      : variant === "whatsapp"
      ? "btn-whatsapp"
      : "btn-secondary";

  return (
    <div className="flex flex-col gap-2">
      <Link
        href={href}
        target={target}
        rel={rel}
        className={`${className} flex items-center justify-between gap-3 group px-6`}
        aria-label={label}
      >
        <div className="flex items-center gap-3">
          {icon && (
            <span className="transition-transform duration-300 group-hover:scale-110">
              {icon}
            </span>
          )}
          <span className="flex-1">{label}</span>
        </div>

        {variant === "primary" && (
          <FiExternalLink
            size={16}
            className="opacity-70 group-hover:opacity-100 transition-opacity"
          />
        )}

        {variant === "whatsapp" && (
          <FaArrowRight
            size={14}
            className="opacity-70 group-hover:translate-x-1 transition-transform duration-300"
          />
        )}
      </Link>

      {subtext && (
        <p
          className="font-lato text-[11px] text-center px-4 leading-relaxed italic"
          style={{ color: "var(--white-muted)", opacity: 0.8 }}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}

export default function ActionButtons() {
  const whatsappMessage = encodeURIComponent(
    "Olá Laiane! Vim pelo site e gostaria de saber mais sobre os ensaios fotográficos."
  );

  return (
    <section className="flex flex-col gap-5" aria-label="Links e botões de ação">
      {/* Título da Seção com Divisor */}
      <div className="flex items-center gap-3 mb-1">
        <div
          className="w-8 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, var(--gold))",
          }}
        />
        <p
          className="font-lato text-[10px] font-bold uppercase tracking-[0.35em] whitespace-nowrap"
          style={{ color: "var(--gold)" }}
        >
          Explore
        </p>
        <div
          className="flex-1 h-px"
          style={{
            background: "linear-gradient(90deg, var(--gold), transparent)",
          }}
        />
      </div>

      {/* Botões */}
      <div className="flex flex-col gap-5">
        <ActionButton
          href="https://www.laianesouzafotografia.pt/portfolio.php"
          label="Meu Portfólio"
          variant="primary"
          target="_blank"
        />

        <ActionButton
          href="/presets"
          label="Meus Presets"
          subtext="A edição que uso em minhas fotos, agora disponível para você."
          variant="secondary"
          icon={<FaImage size={16} />}
          target="_self"
        />

        <ActionButton
          href={`https://wa.me/351913599042?text=${whatsappMessage}`}
          label="Agendar Ensaio"
          subtext="Invista no seu posicionamento e eleve sua marca pessoal."
          variant="whatsapp"
          icon={<FaWhatsapp size={20} />}
          target="_blank"
        />
      </div>
    </section>
  );
}