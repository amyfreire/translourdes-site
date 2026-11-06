import Layout from "@/components/Layout";
import Services from "@/components/Services";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Servicos = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6">
              Nossos <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">Serviços</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Soluções completas em transporte para todas as suas necessidades
            </p>
          </div>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* CTA Section */}
      <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="p-12 rounded-3xl bg-gradient-hero text-primary-foreground shadow-strong text-center animate-scale-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Não Encontrou o Serviço que Procura?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco! Oferecemos soluções personalizadas para atender suas necessidades específicas de transporte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-accent text-accent-foreground hover:opacity-90 text-xl font-bold rounded-2xl shadow-glow transition-all hover:scale-105 hover:shadow-[0_0_60px_hsl(18_95%_60%/0.8)]"
                >
                  Solicitar Orçamento
                  <ArrowRight size={24} />
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-background/10 text-primary-foreground border-2 border-primary-foreground/30 hover:border-accent hover:bg-background/20 text-xl font-bold rounded-2xl transition-all"
                >
                  Falar com Especialista
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
