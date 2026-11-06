import { useState } from "react";
import { Bus, Users, Shield, Star, Zap, ArrowRight, ImageIcon, X, ChevronLeft, ChevronRight, Images, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import heroWaves from "@/assets/hero-waves.png";
import carroExecutivo from "@/assets/carro-executivo.jpeg";
import carroExecutivo2 from "@/assets/carro-executivo-2.jpeg";
import carroExecutivo3 from "@/assets/carro-executivo-3.jpeg";
import vanExecutiva from "@/assets/van-executiva.jpeg";
import vanExecutiva2 from "@/assets/van-executiva-2.jpeg";
import microOnibus1 from "@/assets/micro-onibus-1.jpeg";
import microOnibus2 from "@/assets/micro-onibus-2.jpeg";
import microOnibus3 from "@/assets/micro-onibus-3.jpeg";
import onibus1 from "@/assets/onibus-1.jpeg";
import onibus2 from "@/assets/onibus-2.jpeg";
import onibusSemileito1 from "@/assets/onibus-semileito-1.png";
import onibusSemileito2 from "@/assets/onibus-semileito-2.png";
import onibusSemileito3 from "@/assets/onibus-semileito-3.png";
import onibusSemileito4 from "@/assets/onibus-semileito-4.jpeg";
import onibusSemileito5 from "@/assets/onibus-semileito-5.jpeg";
import onibusSemileito6 from "@/assets/onibus-semileito-6.jpeg";
import onibusSemileito7 from "@/assets/onibus-semileito-7.jpeg";
import onibusExecutivo1 from "@/assets/onibus-executivo-1.jpeg";
import onibusExecutivo2 from "@/assets/onibus-executivo-2.jpeg";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const Fleet = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const features = [
    {
      icon: Bus,
      title: "Frota Moderna",
      description: "Veículos novos e bem mantidos",
    },
    {
      icon: Users,
      title: "Conforto",
      description: "Assentos confortáveis e espaçosos",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Todos os equipamentos de segurança",
    },
    {
      icon: Star,
      title: "Qualidade",
      description: "Excelência em cada viagem",
    },
  ];

  const vehicles = [
    {
      name: "Van Executiva",
      capacity: "17, 18 e 19 lugares",
      images: [vanExecutiva, vanExecutiva2],
    },
    {
      name: "Micro-ônibus",
      capacity: "30 lugares • Com Banheiro",
      highlight: true,
      images: [microOnibus1, microOnibus2, microOnibus3],
    },
    {
      name: "Ônibus Semi Leito",
      capacity: "44 lugares • Com Banheiro",
      description: "Poltronas reclináveis para maior conforto",
      images: [onibus1, onibus2, onibusSemileito1, onibusSemileito2, onibusSemileito3, onibusSemileito4, onibusSemileito5, onibusSemileito6, onibusSemileito7],
    },
    {
      name: "Ônibus Executivo",
      capacity: "44 lugares • Com Banheiro",
      description: "Ideal para viagens corporativas",
      images: [onibusExecutivo1, onibusExecutivo2],
      cropWatermark: true,
    },
    {
      name: "Carro Executivo",
      capacity: "4 passageiros",
      images: [carroExecutivo, carroExecutivo2, carroExecutivo3],
    },
  ];

  const openGallery = (vehicleIndex: number) => {
    if (vehicles[vehicleIndex].images.length > 0) {
      setSelectedVehicle(vehicleIndex);
      setCurrentImageIndex(0);
    }
  };

  const closeGallery = () => {
    setSelectedVehicle(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedVehicle !== null) {
      const totalImages = vehicles[selectedVehicle].images.length;
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    }
  };

  const prevImage = () => {
    if (selectedVehicle !== null) {
      const totalImages = vehicles[selectedVehicle].images.length;
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

  return (
    <section id="frota" className="py-12 sm:py-16 lg:py-20 bg-[#0D0D0D] relative overflow-hidden">
      {/* Subtle gradient accents */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      
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
              Nossa Frota
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Veículos Para Todas as{" "}
            <span className="text-accent italic">Necessidades</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            Mais de <span className="text-accent font-semibold">150 veículos</span> para atender todas as suas necessidades
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
              <span className="text-accent font-bold">Importante:</span> Todos os veículos são disponibilizados exclusivamente com motorista profissional. Não realizamos locação de veículos.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-300 text-center backdrop-blur-sm"
              >
                <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 mb-4 bg-accent text-white rounded-xl flex items-center justify-center">
                  <Icon size={24} className="sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-sm sm:text-base font-heading font-bold text-white mb-1 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Vehicle Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white text-center mb-10">
            Conheça Nossos <span className="text-accent">Veículos</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => openGallery(index)}
                className={`group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-accent/50 transition-all duration-300 ${vehicle.images.length > 0 ? 'cursor-pointer' : ''}`}
              >
                {/* Image Container */}
                <div className="aspect-[16/10] bg-white/5 relative overflow-hidden">
                  {vehicle.images.length > 0 ? (
                    <>
                      <img 
                        src={vehicle.images[0]} 
                        alt={vehicle.name}
                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${vehicle.cropWatermark ? 'object-[center_20%]' : 'object-center'}`}
                        loading="lazy"
                      />
                      {/* Multiple images indicator */}
                      {vehicle.images.length > 1 && (
                        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
                          <Images size={14} />
                          {vehicle.images.length} fotos
                        </div>
                      )}
                      {/* Click to view overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm bg-accent px-4 py-2 rounded-full">
                          Clique para ver mais
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-white/30">
                      <ImageIcon size={48} className="mb-2" />
                      <span className="text-sm">Adicionar imagem</span>
                    </div>
                  )}
                </div>
                
                {/* Info */}
                <div className="p-5">
                  <h4 className="text-lg font-heading font-bold text-white group-hover:text-accent transition-colors">
                    {vehicle.name}
                  </h4>
                  <p className={`text-sm mt-1 ${vehicle.highlight ? 'text-accent font-semibold' : 'text-white/60'}`}>
                    {vehicle.capacity}
                  </p>
                  {vehicle.description && (
                    <p className="text-white/50 text-xs mt-1">
                      {vehicle.description}
                    </p>
                  )}
                  <p className="text-accent/80 text-xs mt-2 flex items-center gap-1">
                    <UserCheck size={12} />
                    Aluguel acompanhado apenas de motorista
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner with Waves */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
        >
          {/* Dark Background */}
          <div className="absolute inset-0 bg-[#0D0D0D]" />
          
          {/* Waves Image */}
          <div className="absolute inset-0 opacity-50">
            <img 
              src={heroWaves} 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative p-8 sm:p-12 md:p-16 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight">
              Diversos Veículos Disponíveis
            </h3>
            <p className="text-base sm:text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Temos uma grande frota de automóveis para qualquer tipo de necessidade!
              Todos os nossos veículos foram projetados com a maior comodidade para você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/orcamento">
                <Button
                  size="lg"
                  className="group/btn bg-accent text-white hover:bg-accent/90 shadow-glow font-bold rounded-full px-8 transition-all"
                >
                  <span className="flex items-center gap-2">
                    Consultar Disponibilidade
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} />
                  </span>
                </Button>
              </Link>

              <Link to="/contato">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-accent font-semibold rounded-full px-8 transition-all"
                >
                  Entre em Contato
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Gallery Modal */}
      <Dialog open={selectedVehicle !== null} onOpenChange={() => closeGallery()}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black/95 border-white/10 overflow-hidden">
          {selectedVehicle !== null && (
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              {/* Main image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={vehicles[selectedVehicle].images[currentImageIndex]}
                    alt={`${vehicles[selectedVehicle].name} - Foto ${currentImageIndex + 1}`}
                    className={`w-full h-full object-cover ${vehicles[selectedVehicle].cropWatermark ? 'object-[center_20%]' : 'object-center'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {/* Navigation arrows */}
                {vehicles[selectedVehicle].images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-3 rounded-full transition-colors"
                    >
                      <ChevronLeft size={28} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-3 rounded-full transition-colors"
                    >
                      <ChevronRight size={28} />
                    </button>
                  </>
                )}
              </div>

              {/* Info and thumbnails */}
              <div className="p-6 bg-[#0D0D0D]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">
                      {vehicles[selectedVehicle].name}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {vehicles[selectedVehicle].capacity}
                    </p>
                  </div>
                  <span className="text-white/50 text-sm">
                    {currentImageIndex + 1} / {vehicles[selectedVehicle].images.length}
                  </span>
                </div>

                {/* Thumbnails */}
                {vehicles[selectedVehicle].images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {vehicles[selectedVehicle].images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex
                            ? 'border-accent'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Miniatura ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Fleet;