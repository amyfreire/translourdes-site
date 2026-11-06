import { CheckCircle, Award, Users, Shield, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import teamImage from "@/assets/team.jpg";

const About = () => {
  const highlights = [
    { icon: Award, text: "Fundada em 1988" },
    { icon: Target, text: "Líder em Araucária" },
    { icon: Users, text: "Colaboradores treinados" },
    { icon: Shield, text: "Segurança garantida" },
    { icon: TrendingUp, text: "Frota moderna" },
    { icon: CheckCircle, text: "Atendimento premium" },
  ];

  return (
    <section id="sobre" className="py-20 sm:py-28 lg:py-36 bg-[#0D0D0D] relative overflow-hidden">
      {/* Subtle gradient accents */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Award className="text-accent" size={16} />
              <span className="text-accent font-semibold text-xs uppercase tracking-wider">
                Quem Somos
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              37 Anos de{" "}
              <span className="text-accent italic">Tradição</span>
              {" "}em Transporte
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                Fundada em 1988, a TransLourdes Transportes hoje se consolidou como a mais importante empresa deste segmento em Araucária e região metropolitana.
              </p>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                Atuando nas áreas de transporte empresarial, locação e turismo, a empresa conta com colaboradores muito bem treinados e capacitados para oferecer o melhor e mais seguro serviço a seus clientes.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3"
                  >
                    <div className="bg-accent text-white p-2 rounded-lg flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <span className="text-white font-medium text-sm">
                      {highlight.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={teamImage} 
                alt="Equipe TransLourdes" 
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-5 rounded-xl bg-[#1B1B1B]/90 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl sm:text-5xl font-heading font-bold text-accent">
                      1988
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium leading-relaxed">
                        Comprometidos com excelência desde o início
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pink Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-accent to-[#9B1B7A] text-white shadow-xl">
            <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed text-center">
              Serviço de qualidade, com segurança e excelente atendimento é com a TransLourdes!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
