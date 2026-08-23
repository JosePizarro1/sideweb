import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Focus Club Fitness Tacna",
  description:
    "Entrena fuerza, fitness y funcional en Focus Club Fitness, Gregorio Albarracín, Tacna. Consulta planes y promociones por WhatsApp.",
  openGraph: {
    title: "Focus Club Fitness Tacna",
    description: "Tu energía. Tu disciplina. Tu enfoque.",
    type: "website",
    images: [{ url: "/focus-og.png", width: 1200, height: 630, alt: "Focus Club Fitness Tacna" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Club Fitness Tacna",
    description: "Entrena con propósito.",
    images: ["/focus-og.png"],
  },
  icons: { icon: "/focus-logo-transparent.png", shortcut: "/focus-logo-transparent.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
