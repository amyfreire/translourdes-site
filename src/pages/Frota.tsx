import Layout from "@/components/Layout";
import Fleet from "@/components/Fleet";
import { Link } from "react-router-dom";

const Frota = () => {

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6">
              Nossa <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">Frota</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Veículos modernos e confortáveis para todas as suas necessidades
            </p>
          </div>
        </div>
      </section>


      {/* Fleet Component */}
      <Fleet />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-scale-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Reserve Sua Viagem Hoje
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10">
              Entre em contato e garanta o veículo perfeito para sua necessidade
            </p>
            <Link
              to="/orcamento"
              className="inline-block px-10 py-5 bg-gradient-accent text-accent-foreground hover:opacity-90 text-xl font-bold rounded-2xl shadow-glow transition-all hover:scale-105 hover:shadow-[0_0_60px_hsl(18_95%_60%/0.8)]"
            >
              Solicitar Orçamento Agora
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Frota;
