import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoTranslourdes from "@/assets/logo-translourdes-new.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "/servicos", label: "Serviços" },
    { href: "/frota", label: "Frota" },
    { href: "/depoimentos", label: "Depoimentos" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0D0D0D]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src={logoTranslourdes} 
              alt="TransLourdes" 
              className="h-[7.6rem] md:h-[8.8rem] w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative py-2 transition-colors duration-200 font-medium text-sm uppercase tracking-wide ${
                  location.pathname === link.href 
                    ? "text-accent" 
                    : "text-white/70 hover:text-accent"
                }`}
              >
                {link.label}
                {location.pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href="https://wa.me/5541996428588"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/20 text-white/70 hover:text-accent hover:border-accent transition-all"
            >
              <MessageCircle size={18} />
            </a>
            <a 
              href="tel:+5541996428588"
              className="p-2 rounded-full border border-white/20 text-white/70 hover:text-accent hover:border-accent transition-all"
            >
              <Phone size={18} />
            </a>
            <Link to="/orcamento">
              <Button className="bg-accent text-white hover:bg-accent/90 transition-all font-semibold rounded-full px-6">
                Solicitar Orçamento
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in bg-[#0D0D0D]/98 backdrop-blur-md rounded-2xl mt-2 border border-white/10">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`transition-colors duration-200 font-medium py-2 border-l-2 pl-3 ${
                    location.pathname === link.href 
                      ? "text-accent border-accent" 
                      : "text-white/70 hover:text-accent border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/orcamento" className="w-full">
                <Button className="bg-accent text-white hover:bg-accent/90 transition-all w-full font-semibold rounded-full">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
