"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, FileCheck2 } from "lucide-react";
import { Spotlight } from "./ui/spotlight";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 bg-brand-base border-b border-brand-border">
      {/* Elementos de Fundo com Spotlight */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-brand-base">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="#10b981" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
            <span className="w-12 h-px bg-brand-accent"></span>
            <span className="text-brand-accent text-sm font-mono tracking-widest uppercase">
              Operação Estratégica
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-text tracking-tight leading-[1.1] mb-6"
          >
            Precisão e Escalabilidade em <span className="text-brand-accent">Licitações</span>.
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="text-lg md:text-xl text-brand-muted mb-10 max-w-2xl leading-relaxed space-y-4"
          >
            <p>Avaliamos, disputamos e operamos contratos de fornecimento governamental nas verticais de:</p>
            <ul className="list-none space-y-2 ml-2">
              <li className="flex items-start md:items-center gap-3">
                <span className="w-2 h-2 mt-2.5 md:mt-0 rounded-full bg-brand-accent shrink-0"></span>
                <span><strong className="text-brand-text">Mobilidade e TI:</strong> Notebooks, Tablets e Celulares.</span>
              </li>
              <li className="flex items-start md:items-center gap-3">
                <span className="w-2 h-2 mt-2.5 md:mt-0 rounded-full bg-brand-accent shrink-0"></span>
                <span><strong className="text-brand-text">Infraestrutura:</strong> Iluminação Pública e Ar Condicionado.</span>
              </li>
              <li className="flex items-start md:items-center gap-3">
                <span className="w-2 h-2 mt-2.5 md:mt-0 rounded-full bg-brand-accent shrink-0"></span>
                <span><strong className="text-brand-text">Corporativo:</strong> Impressoras e Multifuncionais.</span>
              </li>
            </ul>
            <p className="pt-2 text-base md:text-lg">Unimos <strong>agilidade logística</strong> a uma <strong>entrega técnica impecável</strong>, atuando de ponta a ponta na execução do edital.</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="/#especialidades" className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-base rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-brand-accent-hover transition-colors group">
              <FileCheck2 size={20} className="text-brand-base" />
              Conhecer Soluções
            </a>
            <a 
              href="https://wa.me/5561996888233?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20CH3%20Capital."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-brand-text border border-brand-border rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-brand-surface transition-colors group"
            >
              Falar no WhatsApp
              <ArrowRight size={20} className="text-brand-muted group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
            </a>
          </motion.div>

          {/* Dados de credibilidade sólidos e sem glow */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-brand-border flex flex-wrap gap-12 text-brand-muted"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-text font-mono">100%</span>
              <span className="text-sm font-medium uppercase tracking-wider mt-1">Conformidade</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-text font-mono">ÁGIL</span>
              <span className="text-sm font-medium uppercase tracking-wider mt-1">Logística</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-text font-mono">OTIMIZADO</span>
              <span className="text-sm font-medium uppercase tracking-wider mt-1">Custo-Benefício</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
