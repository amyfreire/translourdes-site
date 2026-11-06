import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Users, MapPin, Phone, Mail, User, MessageSquare, Sparkles, Send } from "lucide-react";

const Orcamento = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
    origem: "",
    destino: "",
    data: "",
    dataRetorno: "",
    numPassageiros: "",
    observacoes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneNumber = "5541996428588";
    const whatsappMessage = `*Solicitação de Orçamento pelo Site*

*DADOS DO CLIENTE*
*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}
*E-mail:* ${formData.email}

*DETALHES DA VIAGEM*
*Tipo de Serviço:* ${formData.servico}
*Origem:* ${formData.origem}
*Destino:* ${formData.destino}
*Data de Ida:* ${formData.data}
*Data de Retorno:* ${formData.dataRetorno || "Não informada"}
*Nº de Passageiros:* ${formData.numPassageiros}

*OBSERVAÇÕES:*
${formData.observacoes || "Nenhuma"}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Complete o envio do orçamento pelo WhatsApp.",
    });
    
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      servico: "",
      origem: "",
      destino: "",
      data: "",
      dataRetorno: "",
      numPassageiros: "",
      observacoes: "",
    });
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

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      servico: value,
    }));
  };

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
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-gradient-glass backdrop-blur-glass border border-accent/20">
              <Sparkles className="text-accent" size={18} />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Orçamento Gratuito
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6">
              Solicite Seu <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">Orçamento</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Preencha o formulário e receba uma proposta personalizada em até 24 horas
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8 p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-scale-in">
              {/* Dados Pessoais */}
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                  <User className="text-accent" size={24} />
                  Seus Dados
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      name="nome"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="h-12 text-base rounded-xl border-white/10 focus:border-accent transition-all bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                      <Input
                        name="telefone"
                        type="tel"
                        placeholder="(41) 99999-9999"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        className="h-12 text-base rounded-xl border-white/10 focus:border-accent transition-all bg-white/5 text-white placeholder:text-white/40 pl-12"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                      <Input
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 text-base rounded-xl border-white/10 focus:border-accent transition-all bg-white/5 text-white placeholder:text-white/40 pl-12"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Detalhes da Viagem */}
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                  <MapPin className="text-accent" size={24} />
                  Detalhes da Viagem
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Tipo de Serviço *
                    </label>
                    <Select onValueChange={handleSelectChange} value={formData.servico}>
                      <SelectTrigger className="h-12 text-base rounded-xl border-white/10 focus:border-accent transition-all bg-white/5 text-white">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1B1B1B] border-white/10 z-50">
                        <SelectItem value="empresarial" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">Transporte Empresarial</SelectItem>
                        <SelectItem value="turismo" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">Turismo e Excursões</SelectItem>
                        <SelectItem value="eventos" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">Eventos e Congressos</SelectItem>
                        <SelectItem value="transfer" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">Transfer Aeroporto</SelectItem>
                        <SelectItem value="outro" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Origem *
                    </label>
                    <Input
                      name="origem"
                      placeholder="Cidade/Local de origem"
                      value={formData.origem}
                      onChange={handleChange}
                      required
                      className="h-12 text-base rounded-xl border-white/10 focus:border-accent transition-all bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Destino *
                    </label>
                    <Input
                      name="destino"
                      placeholder="Cidade/Local de destino"
                      value={formData.destino}
                      onChange={handleChange}
                      required
                      className="h-12 text-base rounded-xl border-white/10 focus:border-accent transition-all bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Data de Ida *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                      <Input
                        name="data"
                        type="date"
                        value={formData.data}
                        onChange={handleChange}
                        required
                        className="h-12 text-base rounded-xl border-white/10 focus:border-accent transition-all bg-white/5 text-white pl-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Data de Retorno
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                      <Input
                        name="dataRetorno"
                        type="date"
                        value={formData.dataRetorno}
                        onChange={handleChange}
                        className="h-12 text-base rounded-xl border-white/10 focus:border-accent transition-all bg-white/5 text-white pl-12"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Número de Passageiros *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                      <Input
                        name="numPassageiros"
                        type="number"
                        min="1"
                        placeholder="Quantidade de passageiros"
                        value={formData.numPassageiros}
                        onChange={handleChange}
                        required
                        className="h-12 text-base rounded-xl border-white/10 focus:border-accent transition-all bg-white/5 text-white placeholder:text-white/40 pl-12"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Observações */}
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                  <MessageSquare className="text-accent" size={24} />
                  Informações Adicionais
                </h3>
                <Textarea
                  name="observacoes"
                  placeholder="Descreva detalhes importantes: horários específicos, necessidades especiais, paradas intermediárias, etc."
                  value={formData.observacoes}
                  onChange={handleChange}
                  rows={5}
                  className="text-base resize-none rounded-xl border-white/10 focus:border-accent transition-all bg-white/5 text-white placeholder:text-white/40"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group w-full h-14 bg-accent text-white hover:bg-accent/90 text-lg font-bold rounded-xl transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? "Enviando..." : "Solicitar Orçamento Gratuito"}
                  <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Button>

              <p className="text-center text-white/40 text-sm">
                🔒 Suas informações estão seguras conosco • Resposta em até 24 horas
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Garantia Section */}
      <section className="py-16 bg-[#0D0D0D]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-accent mb-2">24h</div>
              <p className="text-white/60">Resposta rápida</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-white/60">Orçamento gratuito</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-accent mb-2">37+</div>
              <p className="text-white/60">Anos de experiência</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Orcamento;
