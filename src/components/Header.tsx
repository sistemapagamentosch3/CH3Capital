"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-brand-base/95 backdrop-blur-sm border-b border-brand-border py-4"
          : "bg-brand-base py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="CH3 Capital Logo" 
            className="h-10 md:h-12 w-auto object-contain drop-shadow-md"
          />
          <span className="text-xl md:text-2xl font-bold tracking-tight text-brand-text">
            CH3
            <span className="text-brand-muted text-sm tracking-widest uppercase ml-2 hidden sm:inline-block">Capital</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#sobre" className="text-sm font-medium text-brand-muted hover:text-brand-accent transition-colors">
            Sobre
          </Link>
          <Link href="/#especialidades" className="text-sm font-medium text-brand-muted hover:text-brand-accent transition-colors">
            Especialidades
          </Link>
          <Link href="/#contato" className="text-sm font-medium text-brand-muted hover:text-brand-accent transition-colors">
            Contato
          </Link>
          <a
            href="https://wa.me/5561996888233?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20CH3%20Capital."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-brand-accent text-brand-base px-6 py-2.5 rounded-2xl hover:bg-brand-accent-hover transition-colors"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-text p-2 hover:bg-brand-surface rounded-2xl transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Alternar menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-brand-surface border-b border-brand-border"
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link href="/#sobre" className="text-base font-medium text-brand-text hover:text-brand-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Sobre
            </Link>
            <Link href="/#especialidades" className="text-base font-medium text-brand-text hover:text-brand-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Especialidades
            </Link>
            <Link href="/#contato" className="text-base font-medium text-brand-text hover:text-brand-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Contato
            </Link>
            <a
              href="https://wa.me/5561996888233?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20CH3%20Capital."
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-center font-semibold bg-brand-accent text-brand-base px-6 py-3 rounded-2xl hover:bg-brand-accent-hover transition-colors mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Chamar no WhatsApp
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
