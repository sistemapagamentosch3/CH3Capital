import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Diferencial from "@/components/Diferencial";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-light">
      {/* Navbar Global */}
      <Header />
      
      {/* O main engloba todas as seções e garante a fluidez vertical da página.
          O espaçamento interno (padding-y) de cada seção já cuida do respiro 
          necessário para um design limpo e corporativo. */}
      <main className="flex flex-col flex-1">
        <Hero />
        <About />
        <Diferencial />
        <Services />
      </main>

      {/* Rodapé Global */}
      <Footer />
    </div>
  );
}
