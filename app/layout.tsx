import type { Metadata } from "next";
import { archivo, workSans, plexMono } from "@/lib/fonts";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boxer Atelier — Especialistas em Porsche",
  description:
    "Ateliê especializado exclusivamente em veículos Porsche, na Vila Leopoldina, São Paulo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${workSans.variable} ${plexMono.variable}`}>
      <body className="bg-bg font-body text-ink antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
