"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, BarChart3 } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Truck className="text-brand-accent" size={24} />,
      title: "Logística Otimizada",
      description: "Entregas precisas e ágeis em todo o território nacional, blindadas contra imprevistos.",
    },
    {
      icon: <ShieldCheck className="text-brand-accent" size={24} />,
      title: "Rigor Técnico Total",
      description: "Análise minuciosa de cada exigência para garantir 100% de conformidade documental e de hardware.",
    },
    {
      icon: <BarChart3 className="text-brand-accent" size={24} />,
      title: "Escalabilidade Segura",
      description: "Capacidade operacional para atender desde demandas pontuais até contratos de altíssimo volume.",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-brand-surface relative border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-3 font-mono">
              Nossa Identidade
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-text leading-tight mb-6">
              Operação Licitatória Completa
            </h3>
            <p className="text-brand-muted text-lg mb-6 leading-relaxed">
              Somos uma empresa estruturada para dominar o ciclo completo de vendas governamentais. Nossa atuação não é uma consultoria, é a <strong className="text-brand-text">execução real e direta</strong>: desde a captação e análise técnica do edital até a importação, logística e entrega final no órgão.
            </p>
            <p className="text-brand-muted text-lg leading-relaxed">
              Assumimos o protagonismo no fornecimento de <strong className="text-brand-text">Iluminação Pública e Climatização</strong>, além do suprimento robusto de <strong className="text-brand-text">TI e Mobilidade (Notebooks, Tablets, Celulares e Impressoras)</strong>, sempre com lastro financeiro sólido.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-brand-base border border-brand-border hover:border-brand-accent/50 transition-colors"
              >
                <div className="p-3 bg-brand-surface border border-brand-border rounded-2xl">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-text mb-2">{card.title}</h4>
                  <p className="text-brand-muted leading-relaxed text-sm md:text-base">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
