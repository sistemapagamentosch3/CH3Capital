import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Termos() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen bg-brand-base text-brand-text px-6 md:px-12 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto bg-brand-surface p-8 md:p-12 rounded-2xl border border-brand-border relative z-10 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-brand-text">
            Termos de <span className="text-brand-accent">Uso</span>
          </h1>
          
          <div className="space-y-8 text-brand-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-2">1. Aceitação dos Termos</h2>
              <p>Ao acessar e usar o site da CH3 ELETRO E ELETRONICOS LTDA, você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso, que junto com nossa Política de Privacidade regem o nosso relacionamento com você em relação a este site.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-2">2. Uso do Site</h2>
              <p>Este site é destinado a fornecer informações sobre nossos serviços de fornecimento estratégico e inteligência em licitações governamentais. O conteúdo das páginas deste site é para sua informação geral e uso exclusivo comercial.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-2">3. Propriedade Intelectual</h2>
              <p>Todo o material presente no site (incluindo design, layout, aparência, gráficos e logotipos) é de propriedade ou licenciado para a CH3. A reprodução é rigorosamente proibida.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-2">4. Modificações e Atualizações</h2>
              <p>Reservamo-nos o direito de alterar estes termos a qualquer momento sem aviso prévio. O uso continuado do site após quaisquer alterações constitui aceitação dos novos termos. Recomendamos a leitura periódica desta página.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-2">5. Contato</h2>
              <p>Dúvidas, reclamações ou apontamentos sobre estes Termos de Uso devem ser enviadas diretamente para o nosso e-mail oficial: <a href="mailto:licitach3negocios@gmail.com" className="text-brand-accent hover:underline">licitach3negocios@gmail.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
