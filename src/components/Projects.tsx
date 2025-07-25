import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import patagoniaImage from "@/assets/logos/patagonia_logo.webp";
import vinaSutilImage from "@/assets/logos/logoSutil.png";

import maintenanceImage1 from "@/assets/mantenimiento/mantenimiento1.webp";
import maintenanceImage2 from "@/assets/mantenimiento/mantenimiento2.webp";
import maintenanceImage3 from "@/assets/mantenimiento/mantenimiento3.webp";
import maintenanceImage4 from "@/assets/mantenimiento/mantenimiento4.webp";
import maintenanceImage5 from "@/assets/mantenimiento/mantenimiento5.webp";
import maintenanceImage6 from "@/assets/mantenimiento/mantenimiento6.webp";
import maintenanceImage7 from "@/assets/mantenimiento/mantenimiento7.webp";
import maintenanceImage8 from "@/assets/mantenimiento/mantenimiento8.webp";
import maintenanceImage9 from "@/assets/mantenimiento/mantenimiento9.webp";


import constructionImage1 from "@/assets/contruccion/construccion1.webp";
import constructionImage2 from "@/assets/contruccion/construccion2.webp";
import constructionImage3 from "@/assets/contruccion/construccion3.webp";
import constructionImage4 from "@/assets/contruccion/construccion4.webp";
import constructionImage5 from "@/assets/contruccion/construccion5.webp";
import constructionImage6 from "@/assets/contruccion/construccion6.webp";
import constructionImage7 from "@/assets/contruccion/construccion7.webp";
import constructionImage8 from "@/assets/contruccion/construccion8.webp";

import electricImage1 from "@/assets/electricidad/electricidad1.webp";
import electricImage2 from "@/assets/electricidad/electricidad2.webp";
import electricImage3 from "@/assets/electricidad/electricidad3.webp";
import electricImage4 from "@/assets/electricidad/electricidad4.webp";
import electricImage5 from "@/assets/electricidad/electricidad5.webp";
import electricImage6 from "@/assets/electricidad/electricidad6.webp";

import acondicionamientoImage1 from "@/assets/acondicionado/acondicionado1.webp";
import acondicionamientoImage2 from "@/assets/acondicionado/acondicionado2.webp";
import acondicionamientoImage3 from "@/assets/acondicionado/acondicionado3.webp";
import acondicionamientoImage4 from "@/assets/acondicionado/acondicionado4.webp";

import { useState, useEffect } from "react";

const Projects = () => {
  const mantenimientoImages = [maintenanceImage1, maintenanceImage2, maintenanceImage3, maintenanceImage4, maintenanceImage5, maintenanceImage6, maintenanceImage7, maintenanceImage8, maintenanceImage9];
  const construccionesImages = [constructionImage1, constructionImage2, constructionImage3, constructionImage4, constructionImage5, constructionImage6, constructionImage7, constructionImage8];
  const electricidadImages = [electricImage1, electricImage2, electricImage3, electricImage4, electricImage5, electricImage6];
  const acondicionamientoImages = [acondicionamientoImage1, acondicionamientoImage2, acondicionamientoImage3, acondicionamientoImage4];
  const projects = [
    {
      title: "Mantenimiento",
      description: "Mantenimiento de equipos industriales",
      image: maintenanceImage1,
    },
    {
      title: "patagonia del valle",
      description: "Mantenimiento integral de equipos industriales y modernización de sistemas de control automatizado.",
      image: patagoniaImage,
    },
    {
      title: "Complejo Residencial Los Altos",
      description: "Desarrollo residencial de 120 viviendas con áreas comunes, piscina y sistemas de seguridad integrados.",
      image: maintenanceImage2,
    },
    {
      title: "Modernización Puerto La Guaira",
      description: "Renovación de infraestructura portuaria incluyendo muelles, grúas y sistemas de manejo de carga.",
      image: vinaSutilImage,
    }
  ];

  // Carrusel reutilizable para cada temática
  const Carousel = ({ images, title }: { images: string[]; title: string }) => {
    const [current, setCurrent] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);

    useEffect(() => {
      if (fullscreen) return; // No iniciar transición si está en fullscreen
      const interval = setInterval(() => {
        setIsFading(true);
        setTimeout(() => {
          setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
          setIsFading(false);
        }, 400);
      }, 5000);
      return () => clearInterval(interval);
    }, [images.length, fullscreen]);

    const handlePrev = () => {
      setIsFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setIsFading(false);
      }, 400);
    };
    const handleNext = () => {
      setIsFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setIsFading(false);
      }, 400);
    };

    return (
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">{title}</h3>
        <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <img
            loading="lazy"
            src={images[current]}
            alt={`${title} ${current + 1}`}
            className={`w-full h-[500px] object-cover transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
            style={{ cursor: 'zoom-in' }}
            onClick={() => setFullscreen(true)}
          />
          {/* Botón pantalla completa */}
          <button
            onClick={() => setFullscreen(true)}
            className="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 z-20"
            aria-label="Ver pantalla completa"
            title="Ver imagen en pantalla completa"
          >&#x26F6;</button>
          {/* Controles */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-10"
            aria-label="Anterior"
          >&#8592;</button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-10"
            aria-label="Siguiente"
          >&#8594;</button>
          {/* Indicadores */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`block w-3 h-3 rounded-full ${idx === current ? "bg-primary" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
        {/* Modal pantalla completa */}
        {fullscreen && (
  <div
    className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300 opacity-100`}
    onClick={() => setFullscreen(false)}
  >
    {/* Contenedor para evitar que los clicks en la imagen o controles cierren el modal */}
    <div
      className="relative flex flex-col items-center justify-center w-full h-full"
      onClick={e => e.stopPropagation()}
    >
      <img
        loading="lazy"
        src={images[current]}
        alt={`${title} ${current + 1}`}
        className={`max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border-4 border-primary transition-all duration-300 scale-100 opacity-100`}
        style={{ background: '#111' }}
      />
      {/* Botón cerrar */}
      <button
        onClick={() => setFullscreen(false)}
        className="absolute top-6 right-8 text-white text-3xl font-bold bg-black/60 hover:bg-black/90 rounded-full px-3 py-1 z-50"
        aria-label="Cerrar pantalla completa"
        title="Cerrar"
      >&#x2715;</button>
      {/* Botón anterior */}
      <button
        onClick={() => setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1))}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-3 z-50 text-2xl"
        aria-label="Anterior"
        title="Anterior"
      >&#8592;</button>
      {/* Botón siguiente */}
      <button
        onClick={() => setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1))}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-3 z-50 text-2xl"
        aria-label="Siguiente"
        title="Siguiente"
      >&#8594;</button>
      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-3 h-3 rounded-full ${idx === current ? "bg-primary" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  </div>
)}
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nuestros Proyectos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-white">
            Conoce algunos de nuestros proyectos más destacados que demuestran
            nuestra experiencia y compromiso con la excelencia
          </p>
        </div>

        {/* Carruseles por temática en tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-card border-border text-center p-2 flex flex-col items-center hover:shadow-lg transition-all duration-300 group bg-primary/5">
            <Carousel images={mantenimientoImages} title="Mantenimiento" />
          </Card>
          <Card className="bg-card border-border text-center p-2 flex flex-col items-center hover:shadow-lg transition-all duration-300 group bg-primary/5">
            <Carousel images={construccionesImages} title="Construcción" />
          </Card>
          <Card className="bg-card border-border text-center p-2 flex flex-col items-center hover:shadow-lg transition-all duration-300 group bg-primary/5">
            <Carousel images={electricidadImages} title="Electricidad" />
          </Card>
          <Card className="bg-card border-border text-center p-2 flex flex-col items-center hover:shadow-lg transition-all duration-300 group bg-primary/5">
            <Carousel images={acondicionamientoImages} title="Climatización" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;