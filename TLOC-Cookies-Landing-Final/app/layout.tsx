import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tloc-cookies-tacna.utopian-hurries-0n.chatgpt.site"),
  title: "TLOC Cookies Tacna",
  description: "Cookies rellenas, momentos felices y mucho sabor en Tacna. Descubre los favoritos de TLOC y pide por WhatsApp.",
  openGraph: {
    title: "TLOC Cookies Tacna | Horneamos felicidad",
    description: "Cookies rellenas, sabores que sorprenden y mucho espíritu TLOC. Conoce los favoritos y pide por WhatsApp.",
    url: "https://tloc-cookies-tacna.utopian-hurries-0n.chatgpt.site",
    siteName: "TLOC Cookies Tacna",
    locale: "es_PE",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "TLOC Cookies — Horneamos felicidad en Tacna" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TLOC Cookies Tacna | Horneamos felicidad",
    description: "Cookies rellenas, sabores que sorprenden y mucho espíritu TLOC.",
    images: ["/og.png"],
  },
  icons: { icon: "/images/mascot.webp", shortcut: "/images/mascot.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
