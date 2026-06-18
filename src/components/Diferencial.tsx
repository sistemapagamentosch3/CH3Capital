"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { Marquee } from "./ui/marquee";

export default function Diferencial() {
  const garantias = [
    { title: "Zero Falhas", desc: "Auditoria de editais" },
    { title: "Homologação Garantida", desc: "Especificações exatas" },
    { title: "Logística Nacional", desc: "Entrega no prazo" },
    { title: "Hardware Enterprise", desc: "Notebooks, Celulares e Tablets" },
    { title: "Infraestrutura", desc: "Iluminação e Climatização" },
  ];

  return (
    <section className="py-24 bg-[#09090b] border-y border-brand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-surface border border-brand-border rounded-2xl text-brand-muted text-xs font-mono font-bold tracking-widest uppercase mb-6">
              <ShieldAlert size={14} className="text-brand-accent" />
              Filosofia Operacional
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text mb-6 leading-tight">
              Operação Robusta: <span className="text-brand-accent block mt-2">Do pregão à entrega final sem gargalos.</span>
            </h2>
            <p className="text-xl text-brand-muted mb-8 leading-relaxed">
              Nosso diferencial competitivo é a verticalização da operação. Somos responsáveis primários pela análise do instrumento convocatório, arremate do lote, estruturação financeira da compra, importação e entrega direta e auditada no órgão público.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Fading edges for marquee */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#09090b] z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#09090b] z-10"></div>

            <Marquee pauseOnHover className="[--duration:20s]">
              {garantias.map((item, idx) => (
                <div key={idx} className="flex flex-col justify-center bg-brand-surface p-6 border border-brand-border rounded-2xl min-w-[250px] mx-2 h-32">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-lg font-bold text-brand-text">{item.title}</h4>
                      <p className="text-sm text-brand-muted">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
