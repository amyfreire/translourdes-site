const WhatsAppButton = () => {
  const phoneNumber = "5541996428588";
  const message = "Olá, acabei de ver seu site quero mais informações.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 lg:bottom-6 lg:right-6 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
          <svg 
            viewBox="0 0 32 32" 
            className="w-8 h-8 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.002 3.2c-7.066 0-12.8 5.734-12.8 12.8 0 2.256.586 4.458 1.698 6.4l-1.762 6.4 6.564-1.724a12.71 12.71 0 0 0 6.3 1.658c7.066 0 12.8-5.734 12.8-12.8s-5.734-12.734-12.8-12.734zm0 23.334a10.46 10.46 0 0 1-5.334-1.458l-.382-.228-3.964 1.04 1.058-3.864-.25-.398a10.42 10.42 0 0 1-1.596-5.56c0-5.794 4.716-10.534 10.534-10.534 5.794 0 10.466 4.74 10.466 10.534 0 5.818-4.738 10.468-10.532 10.468zm5.77-7.892c-.316-.158-1.872-.924-2.162-1.03-.29-.106-.502-.158-.714.158-.212.316-.82 1.03-1.006 1.242-.186.212-.372.238-.688.08-.316-.158-1.334-.492-2.542-1.568-.94-.838-1.574-1.874-1.76-2.19-.186-.316-.02-.486.14-.644.144-.142.316-.37.474-.554.158-.186.212-.316.316-.528.106-.212.054-.398-.026-.554-.08-.158-.714-1.72-.978-2.356-.258-.618-.52-.534-.714-.544-.186-.01-.398-.012-.61-.012s-.554.08-.844.398c-.29.316-1.108 1.082-1.108 2.64s1.134 3.062 1.292 3.274c.158.212 2.232 3.408 5.408 4.778.756.326 1.346.52 1.806.666.758.242 1.448.208 1.994.126.608-.092 1.872-.766 2.136-1.506.264-.74.264-1.374.186-1.506-.08-.132-.29-.212-.608-.37z"/>
          </svg>
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco!
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-foreground" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
