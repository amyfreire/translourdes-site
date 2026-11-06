import Layout from "@/components/Layout";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Depoimentos = () => {
  const depoimentos = [
    {
      nome: "Carlos Mendes",
      cargo: "Gerente de RH",
      empresa: "TechSolutions",
      texto: "Contratamos a TransLourdes para transporte corporativo da nossa equipe. Excelente serviço, motoristas educados e veículos sempre impecáveis. Recomendo!",
      rating: 5,
    },
    {
      nome: "Ana Paula Costa",
      cargo: "Organizadora de Eventos",
      empresa: "Eventos & Cia",
      texto: "Já organizei diversos eventos e congressos com o apoio da TransLourdes. O transporte dos participantes sempre foi perfeito, sem atrasos e com muito conforto.",
      rating: 5,
    },
    {
      nome: "Roberto Santos",
      cargo: "Coordenador de Turismo",
      empresa: "Viagens Paraná",
      texto: "Parceiro confiável para excursões turísticas. A frota é moderna, os motoristas experientes e o atendimento sempre atencioso. Perfeito para nossos clientes!",
      rating: 5,
    },
    {
      nome: "Fernando Lima",
      cargo: "Diretor Comercial",
      empresa: "Indústria ABC",
      texto: "Utilizamos os serviços para transporte de funcionários e visitas técnicas. Sempre pontuais, veículos limpos e organizados. Parceria de confiança!",
      rating: 5,
    },
  ];

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
              O Que Dizem <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">Nossos Clientes</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Histórias reais de quem confia na TransLourdes para suas necessidades de transporte
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos Grid */}
      <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {depoimentos.map((depoimento, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-300 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote size={60} className="text-accent" />
                </div>

                <div className="relative mb-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(depoimento.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-white/70 leading-relaxed text-sm italic">
                    "{depoimento.texto}"
                  </p>
                </div>

                <div className="relative pt-4 border-t border-white/10">
                  <p className="font-heading font-bold text-white">
                    {depoimento.nome}
                  </p>
                  <p className="text-sm text-white/50">
                    {depoimento.cargo}
                    {depoimento.empresa && ` • ${depoimento.empresa}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0D0D0D]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">3000+</div>
              <p className="text-white/60">Clientes Satisfeitos</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">37+</div>
              <p className="text-white/60">Anos de Experiência</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
              <p className="text-white/60">Taxa de Satisfação</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">150+</div>
              <p className="text-white/60">Veículos na Frota</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-scale-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Seja Nosso Próximo Cliente Satisfeito
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10">
              Junte-se a centenas de clientes que confiam na TransLourdes
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

export default Depoimentos;
