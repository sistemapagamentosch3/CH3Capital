import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CH3 Capital | Fornecimento Estratégico em Licitações",
  description: "A CH3 Capital é especialista em licitações de iluminação pública, impressoras, notebooks, tablets, celulares e ar condicionado. Garantimos o melhor custo-benefício para o setor público.",

  keywords: ["licitações", "iluminação pública", "impressoras", "notebooks", "tablets", "celulares", "ar condicionado", "fornecimento estratégico", "CH3 Capital"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen flex flex-col bg-brand-base text-brand-text selection:bg-brand-accent selection:text-brand-base">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
