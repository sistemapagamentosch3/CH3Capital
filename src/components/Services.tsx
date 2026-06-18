"use client";

import { motion } from "framer-motion";
import { SearchCheck, Cpu, Briefcase } from "lucide-react";
import { HoverEffect } from "./ui/card-hover-effect";

export default function Services() {
  const services = [
    {
      icon: <SearchCheck size={32} className="text-brand-accent" />,
      title: "Mapeamento e Prospecção",
      description: "Monitoramento e análise rigorosa de editais governamentais. Desenhamos a arquitetura técnica da nossa proposta assegurando aderência absoluta ao instrumento convocatório.",
      className: "md:col-span-2",
    },
    {
      icon: <Cpu size={32} className="text-brand-accent" />,
      title: "Vertical de Hardware",
      description: "Capacidade de fornecimento massivo e estruturado: Iluminação Pública, Impressoras, Notebooks, Tablets, Celulares e equipamentos de Ar Condicionado.",
      className: "md:col-span-1",
    },
    {
      icon: <Briefcase size={32} className="text-brand-accent" />,
      title: "Execução Fim a Fim",
      description: "Operamos todas as fases do nosso fornecimento público. Da compra direta e importação, logística e testes até a prova de conceito (POC) e entrega definitiva ao órgão.",
      className: "md:col-span-3",
    }
  ];

  return (
    <section id="especialidades" className="py-24 bg-brand-surface relative border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-left max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-3 font-mono"
          >
            Nossas Especialidades
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-brand-text leading-tight"
          >
            Domínio completo da operação licitatória
          </motion.h3>
        </div>

        <HoverEffect items={services} />
      </div>
    </section>
  );
}
