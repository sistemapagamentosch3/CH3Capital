"use client";

import { Send, MapPin, Mail, Building2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contato" className="bg-brand-base pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          
          <div className="bg-brand-surface p-8 rounded-2xl border border-brand-border flex flex-col justify-center items-start">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Negócios e Parcerias</h3>
            <p className="text-brand-muted mb-8 leading-relaxed">Seja para contato com fabricantes, distribuidores estratégicos, ou alinhamentos institucionais sobre nossa capacidade de fornecimento, nossa diretoria está à disposição.</p>
            
            <a 
              href="https://wa.me/5561996888233?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20CH3%20Capital."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-base rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-brand-accent-hover transition-all shadow-md hover:-translate-y-1"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Iniciar Conversa
            </a>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-10 flex items-center gap-4 group cursor-default">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-accent/40 to-yellow-600/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img 
                  src="/logo.png" 
                  alt="CH3 Capital Logo" 
                  className="relative h-14 md:h-16 w-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-brand-text via-brand-text to-brand-muted/70 drop-shadow-sm mb-0.5">
                  CH3
                </h2>
                <p className="text-xs font-bold text-brand-accent tracking-[0.3em] uppercase">
                  Capital
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-surface border border-brand-border rounded-2xl text-brand-accent">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-text uppercase tracking-wider mb-1">Razão Social</h4>
                  <p className="text-brand-muted">CH3 ELETRO E ELETRONICOS LTDA</p>
                  <p className="text-brand-muted mt-1 text-sm font-mono font-medium">CNPJ: 39.581.101/0001-39</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-surface border border-brand-border rounded-2xl text-brand-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-text uppercase tracking-wider mb-1">Endereço</h4>
                  <p className="text-brand-muted">SHCS CR 516, Bloco B Nº 69, Pav 1, C099</p>
                  <p className="text-brand-muted">Asa Sul, Brasília - DF, CEP 70.381-525</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-surface border border-brand-border rounded-2xl text-brand-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-text uppercase tracking-wider mb-1">Contato Direto</h4>
                  <a href="mailto:licitach3negocios@gmail.com" className="text-brand-accent font-medium hover:underline block mb-1">
                    licitach3negocios@gmail.com
                  </a>
                  <a href="https://wa.me/5561996888233" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-text transition-colors">
                    (61) 99688-8233
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted text-sm">
            © {new Date().getFullYear()} CH3 Capital. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm font-medium text-brand-muted">
            <Link href="/termos" className="hover:text-brand-accent transition-colors">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-brand-accent transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
