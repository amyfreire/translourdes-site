import { Briefcase, Palmtree, ArrowRight, Zap, Car, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Palmtree,
      title: "Turismo",
      description:
        "Fazemos viagens turísticas de acordo com a sua necessidade, com excelentes automóveis à disposição para lhe proporcionar uma experiência inesquecível!",
      routes: [
        "Foz do Iguaçu, Beto Carrero, Florianópolis",
        "Gramado, Oktoberfest, Aparecida, São Paulo",
      ],
    },
    {
      icon: Briefcase,
      title: "Transporte Empresarial",
      description:
        "Levamos os funcionários da sua empresa para eventos corporativos, com o máximo de profissionalismo no atendimento.",
      routes: [
        "Transporte de funcionários",
        "Eventos corporativos",
      ],
    },
    {
      icon: Car,
      title: "Carro Executivo",
      description:
        "Transporte executivo de luxo com motorista profissional para suas viagens e compromissos com total conforto e pontualidade.",
      routes: [
        "Transfers e deslocamentos",
        "Viagens executivas com motorista",
      ],
    },
  ];

  return (
    <section id="servicos" className="py-20 sm:py-28 lg:py-36 bg-[#0D0D0D] relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Zap className="text-accent" size={16} />
            <span className="text-accent font-semibold text-xs uppercase tracking-wider">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Soluções Completas em{" "}
            <span className="text-accent italic">Transporte</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            Conheça nossos serviços de transporte com qualidade e segurança
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-accent/10 border border-accent/30">
            <UserCheck className="text-accent flex-shrink-0" size={24} />
            <p className="text-white/90 text-sm md:text-base font-medium">
              <span className="text-accent font-bold">Importante:</span> Todos os nossos serviços são realizados exclusivamente com motorista profissional. Não alugamos veículos para o cliente dirigir.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 rounded-2xl h-full">
                  <div className="relative p-6">
                    {/* Icon */}
                    <div className="mb-5">
                      <div className="bg-accent text-white p-4 rounded-xl inline-block">
                        <Icon size={28} />
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/60 mb-5 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.routes.map((route, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-white/50"
                        >
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span>{route}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="group/btn w-full bg-accent text-white hover:bg-accent/90 transition-all duration-300 font-semibold rounded-full"
                      size="default"
                      asChild
                    >
                      <Link to="/orcamento">
                        <span className="flex items-center justify-center gap-2">
                          Solicitar Orçamento
                          <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
