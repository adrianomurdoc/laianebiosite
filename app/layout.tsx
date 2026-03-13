import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laiane Souza | Photographer",
  description:
    "Antes de ser ouvida, você precisa ser vista. Fotógrafa especialista em transformar histórias em memórias com significado.",
  keywords: [
    "fotógrafa",
    "photographer",
    "Portugal",
    "ensaio",
    "presets",
    "Laiane Souza",
    "fotografia",
    "retratos",
    "marca pessoal",
  ],
  authors: [{ name: "Laiane Souza" }],
  creator: "Laiane Souza",
  icons: {
    icon: "/favicon.ico", // Certifique-se de ter este arquivo na pasta public
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://www.laianesouzafotografia.pt",
    title: "Laiane Souza | Photographer",
    description:
      "Antes de ser ouvida, você precisa ser vista. Transformando histórias em memórias com significado.",
    siteName: "Laiane Souza Fotografia",
    images: [
      {
        url: "/og-image.jpg", // Imagem que aparece ao compartilhar o link no WhatsApp/Instagram
        width: 1200,
        height: 630,
        alt: "Laiane Souza Fotografia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laiane Souza | Photographer",
    description:
      "Antes de ser ouvida, você precisa ser vista. Fotógrafa em Portugal.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${playfair.variable} ${lato.variable}`}>
      <body className="animated-bg min-h-screen antialiased selection:bg-[#c9a96e]/30">
        {children}
      </body>
    </html>
  );
}