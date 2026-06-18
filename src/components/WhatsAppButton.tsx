"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const waLink = "https://wa.me/5561996888233?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20CH3%20Capital.";

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute inset-0 bg-brand-accent rounded-full animate-ping opacity-20"></div>
      <div className="relative bg-brand-accent text-brand-base p-4 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1 hover:scale-110 transition-all flex items-center justify-center border border-brand-accent/50">
        <MessageCircle size={28} className="fill-brand-base text-brand-base" />
      </div>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-brand-surface text-brand-text px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-border shadow-xl">
        Fale conosco agora
      </span>
    </motion.a>
  );
}
