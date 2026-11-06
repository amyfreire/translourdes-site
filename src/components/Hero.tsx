import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroWaves from "@/assets/hero-waves.png";
import tourismImage from "@/assets/tourism-beach.jpg";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const rotatingTexts = [
    "Transporte com Excelência",
    "37 Anos de Tradição",
    "Segurança Garantida",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: 37, label: "Anos de Experiência", suffix: "+", delay: 0 },
    { value: 3000, label: "Clientes Atendidos", suffix: "+", delay: 200 },
    { value: 150, label: "Veículos na Frota", suffix: "+", delay: 400 },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-[#0D0D0D]" />
      
      {/* Waves Background Image - Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] z-0">
        <img 
          src={heroWaves} 
          alt="" 
          className="w-full h-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Rotating Text Animation */}
            <div className="mb-6 min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentTextIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] tracking-tight"
                >
                  {rotatingTexts[currentTextIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed"
            >
              Líder em transporte turístico e empresarial em Araucária e região metropolitana. 
              Qualidade, segurança e pontualidade em cada viagem.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link to="/orcamento">
                <Button
                  size="lg"
                  className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow font-bold rounded-full px-8 transition-all w-full sm:w-auto"
                >
                  <span className="flex items-center gap-2 justify-center">
                    Solicitar Orçamento Grátis
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </span>
                </Button>
              </Link>

              <Link to="/servicos">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-accent font-semibold rounded-full px-8 transition-all w-full sm:w-auto"
                >
                  Nossos Serviços
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl"
            >
              {stats.map((stat, idx) => (
                <AnimatedCounter
                  key={idx}
                  end={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  delay={stat.delay}
                  duration={2500}
                />
              ))}
            </motion.div>
          </div>

          {/* Right - Single Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
              <img 
                src={tourismImage} 
                alt="Turismo TransLourdes" 
                className="w-full h-[400px] lg:h-[450px] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/30 via-transparent to-transparent" />
            </div>

            {/* Decorative Blur Effect */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-accent/40 to-[#9B1B7A]/40 rounded-full blur-3xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
