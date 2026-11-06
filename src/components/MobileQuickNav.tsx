import { Bus, Briefcase, FileText, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileQuickNav = () => {
  const location = useLocation();

  const navItems = [
    { href: "/servicos", icon: Briefcase, label: "Serviços" },
    { href: "/frota", icon: Bus, label: "Frota" },
    { href: "/orcamento", icon: FileText, label: "Orçamento" },
    { href: "/contato", icon: Phone, label: "Contato" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#0D0D0D]/95 backdrop-blur-md border-t border-white/10 safe-area-pb">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all ${
                isActive 
                  ? "text-accent" 
                  : "text-white/60 hover:text-accent"
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileQuickNav;
