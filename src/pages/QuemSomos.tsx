import Layout from "@/components/Layout";
import { CheckCircle2, Users, Award, Clock, Shield, Heart } from "lucide-react";
import teamImage from "@/assets/team.jpg";

const QuemSomos = () => {
  const valores = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Priorizamos a segurança de todos os passageiros com manutenção preventiva rigorosa e motoristas treinados.",
    },
    {
      icon: Heart,
      title: "Confiabilidade",
      description: "Cumprimos horários e compromissos com pontualidade e responsabilidade em todos os serviços.",
    },
    {
      icon: Users,
      title: "Atendimento",
      description: "Equipe dedicada e atenciosa, sempre pronta para oferecer a melhor experiência ao cliente.",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Frota moderna e confortável, mantida com os mais altos padrões de qualidade.",
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Respeito total aos horários acordados, garantindo que você chegue sempre no horário.",
    },
  ];

  const diferenciais = [
    "Frota própria moderna e diversificada",
    "Motoristas experientes e qualificados",
    "Manutenção preventiva rigorosa",
    "Atendimento personalizado 24/7",
    "Seguros completos para todos os serviços",
    "Tecnologia de rastreamento em tempo real",
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
              Nossa <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">História</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Há mais de 37 anos conectando pessoas e empresas com segurança, conforto e profissionalismo
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <img 
                src={teamImage} 
                alt="Equipe TransLourdes" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="animate-fade-in space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                A TransLourdes
              </h2>
              <div className="space-y-4 text-lg text-white/70 leading-relaxed">
                <p>
                  Fundada em Araucária, Paraná, a <strong className="text-white">TransLourdes</strong> nasceu do sonho de oferecer serviços de transporte que unem <strong className="text-accent">segurança, conforto e confiabilidade</strong>.
                </p>
                <p>
                  Ao longo dos anos, construímos uma reputação sólida atendendo empresas e grupos turísticos. Nossa frota moderna e equipe qualificada são o resultado de anos de dedicação e compromisso com a excelência.
                </p>
                <p>
                  Hoje, somos referência em transporte na região, sempre buscando inovação e qualidade para superar as expectativas dos nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Princípios que guiam cada quilômetro da nossa jornada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-300 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <div className="bg-accent text-white p-3 rounded-xl inline-block">
                      <Icon size={28} />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {valor.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                Por Que Escolher a TransLourdes?
              </h2>
              <p className="text-xl text-white/60">
                Diferenciais que nos tornam únicos no mercado
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {diferenciais.map((diferencial, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                  <span className="text-white font-medium">{diferencial}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-scale-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Pronto Para Viajar Com Segurança?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10">
              Solicite um orçamento personalizado e descubra como podemos atender suas necessidades
            </p>
            <a
              href="/orcamento"
              className="inline-block px-10 py-5 bg-gradient-accent text-accent-foreground hover:opacity-90 text-xl font-bold rounded-2xl shadow-glow transition-all hover:scale-105 hover:shadow-[0_0_60px_hsl(18_95%_60%/0.8)]"
            >
              Solicitar Orçamento Agora
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QuemSomos;
