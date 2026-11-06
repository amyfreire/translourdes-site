import { useState } from "react";
import { MapPin, Mail, Phone, Facebook, Instagram, Send, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneNumber = "5541996428588";
    const whatsappMessage = `*Novo contato pelo site*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*E-mail:* ${formData.email}

*Mensagem:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Complete o envio da mensagem pelo WhatsApp.",
    });
    
    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "R. Alberto Soczek, 1771 - Campina da Barra",
      link: null,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "comercial@translourdes.com.br",
      link: "mailto:comercial@translourdes.com.br",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(41) 99642-8588",
      link: "tel:+5541996428588",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Facebook,
      title: "Facebook",
      content: "/translourdes",
      link: "https://www.facebook.com/translourdes",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@translourdesturismo",
      link: "https://www.instagram.com/translourdesturismo",
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <section id="contato" className="pt-32 pb-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20">
            <Sparkles className="text-accent" size={18} />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Entre em Contato
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
            Solicite Seu{" "}
            <span className="text-accent">
              Orçamento
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Fale conosco e descubra como podemos atender suas necessidades
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-up space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-5">
                    <div className="bg-accent text-white p-3 rounded-xl">
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-white mb-1 text-lg group-hover:text-accent transition-colors">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white/60 hover:text-accent transition-colors"
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-white/60">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="relative p-8 rounded-2xl bg-gradient-to-r from-accent to-[#9B1B7A] text-white">
              <h3 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3">
                <CheckCircle2 size={28} />
                Horário de Atendimento
              </h3>
              <div className="space-y-2 text-white/90">
                <p className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  Segunda a Sexta: 8h às 18h
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  Sábado: 8h às 12h
                </p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="font-semibold">
                    ⚡ Respondemos em até 24 horas!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="space-y-4">
                <Input
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-14 text-base rounded-xl border-white/10 focus:border-accent transition-all bg-white/5 text-white placeholder:text-white/40"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-14 text-base rounded-xl border-white/10 focus:border-accent transition-all bg-white/5 text-white placeholder:text-white/40"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-14 text-base rounded-xl border-white/10 focus:border-accent transition-all bg-white/5 text-white placeholder:text-white/40"
                />
                <Textarea
                  name="message"
                  placeholder="Conte-nos sobre sua necessidade de transporte..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="text-base resize-none rounded-xl border-white/10 focus:border-accent transition-all bg-white/5 text-white placeholder:text-white/40"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group w-full h-14 bg-accent text-white hover:bg-accent/90 text-lg font-bold rounded-xl transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Button>

              <p className="text-center text-white/40 text-sm">
                🔒 Suas informações estão seguras conosco
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
