import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero1.webp";
import heroImage2 from "@/assets/hero2.webp";
import heroImage3 from "@/assets/hero3.webp";
import { useState, useEffect } from "react";

const images = [heroImage, heroImage2, heroImage3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const prevImage = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Transición automática cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: `url(${images[current]})` }}
      >
        {/* Imagen oculta para SEO y lazy loading */}
        <img src={images[current]} alt="Fondo hero" loading="lazy" style={{ display: 'none' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Tu Espacio,
            <span className="block bg-primary/20 text-primary rounded-full px-2 py-1">Nuestro Compromiso</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          En <strong>EME CONSTRUCCIÓN Y MANTENIMIENTO </strong> damos forma a tus ideas con soluciones prácticas: estructuras metálicas, fachadas, portones y más. Calidad, rapidez y confianza en cada proyecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#projects">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver Nuestros Proyectos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-primary-foreground/10 border-white/80 text-white hover:bg-primary text-lg px-8 py-4 backdrop-blur-sm"
            >
              Solicitar Cotización
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-medium">+56 9 3876 2596</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="font-medium">ventas@empresaeme.cl</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
