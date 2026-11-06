import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroWaves from "@/assets/hero-waves.png";

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-[#0D0D0D] text-white relative overflow-hidden ${className}`}>
      {/* Waves Background */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={heroWaves} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10">
        {/* CTA Section */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-2">
                  Pronto para sua próxima viagem?
                </h3>
                <p className="text-white/60">
                  Entre em contato e solicite um orçamento sem compromisso.
                </p>
              </div>
              <Link to="/orcamento">
                <Button
                  size="lg"
                  className="group bg-accent text-white hover:bg-accent/90 font-bold rounded-full px-8"
                >
                  <span className="flex items-center gap-2">
                    Solicitar Orçamento
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                Trans<span className="text-accent">Lourdes</span>
              </h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Comprometidos com excelência em transporte desde 1988. Qualidade,
                segurança e conforto em cada viagem.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.facebook.com/translourdes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors"
                >
                  <Facebook size={20} />
                  <span>/translourdes</span>
                </a>
                <a
                  href="https://www.instagram.com/translourdesturismo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors"
                >
                  <Instagram size={20} />
                  <span>@translourdesturismo</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-heading font-bold mb-4">
                Navegação Rápida
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Início", href: "/" },
                  { label: "Quem Somos", href: "/quem-somos" },
                  { label: "Serviços", href: "/servicos" },
                  { label: "Frota", href: "/frota" },
                  { label: "Depoimentos", href: "/depoimentos" },
                  { label: "Contato", href: "/contato" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-heading font-bold mb-4">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-white/60">
                    R. Alberto Soczek, 1771 - Campina da Barra
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:comercial@translourdes.com.br"
                    className="text-white/60 hover:text-accent transition-colors break-all"
                  >
                    comercial@translourdes.com.br
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:+5541996428588"
                    className="text-white/60 hover:text-accent transition-colors"
                  >
                    (41) 99642-8588
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
            <p className="text-white/40 text-sm">
              © {currentYear} TransLourdes Transportes. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
