import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacidade() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen bg-brand-base text-brand-text px-6 md:px-12 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto bg-brand-surface p-8 md:p-12 rounded-2xl border border-brand-border relative z-10 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-brand-text">
            Política de <span className="text-brand-accent">Privacidade</span>
          </h1>
          
          <div className="space-y-8 text-brand-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-2">1. Coleta de Informações</h2>
              <p>Nós coletamos informações comerciais apenas quando você entra em contato conosco voluntariamente, seja através dos nossos botões de WhatsApp ou via e-mail direto. Essas informações podem incluir seu nome, cargo, órgão público/empresa, e-mail e número de telefone.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-2">2. Uso e Tratamento dos Dados</h2>
              <p>Utilizamos suas informações de contato exclusivamente para fins de atendimento comercial: resposta a dúvidas técnicas sobre licitações, fornecimento de cotações, envio de especificações de hardware e estruturação de arquiteturas de propostas (POCs e Termos de Referência).</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-2">3. Proteção e Compartilhamento</h2>
              <p>Temos um compromisso rígido com o sigilo industrial e governamental. Nós não vendemos, trocamos ou transferimos de forma alguma suas informações pessoais a terceiros. Seus dados são utilizados estritamente no âmbito interno operacional da CH3 ELETRO E ELETRONICOS LTDA.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-2">4. Segurança da Comunicação</h2>
              <p>Implementamos medidas de segurança para manter as suas informações blindadas. Nosso fluxo de comunicação principal e a troca de documentos sensíveis são realizados através de plataformas corporativas estabelecidas e com protocolos de segurança de ponta-a-ponta.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-2">5. Conformidade Legal</h2>
              <p>Nossas diretrizes estão alinhadas com a LGPD (Lei Geral de Proteção de Dados - Lei 13.709/2018), focadas na transparência e na finalidade estrita do dado para a relação comercial B2B/B2G.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
