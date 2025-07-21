import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Calendar,
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import maintenanceImage1 from "@/assets/mantenimiento/mantenimiento1.webp";
import maintenanceImage2 from "@/assets/mantenimiento/mantenimiento2.webp";
import maintenanceImage3 from "@/assets/mantenimiento/mantenimiento3.webp";
import maintenanceImage4 from "@/assets/mantenimiento/mantenimiento4.webp";

import { useState, useEffect } from "react";

const About = () => {
  const mantenimientoImages = [maintenanceImage1, maintenanceImage2, maintenanceImage3, maintenanceImage4];
  const stats = [
    {
      icon: Calendar,
      number: "5+",
      label: "Años de Experiencia",
      description: "Más de cinco años construyendo confianza"
    },
    {
      icon: Users,
      number: "100+",
      label: "Proyectos Completados",
      description: "Soluciones exitosas entregadas"
    },
    {
      icon: Award,
      number: "50+",
      label: "Clientes Satisfechos",
      description: "Empresas que confían en nosotros"
    },
    {
      icon: Target,
      number: "99%",
      label: "Proyectos a Tiempo",
      description: "Cumplimiento en fechas de entrega"
    }
  ];

  const values = [
    "Compromiso con trabajos bien hechos y en menor tiempo",
    "Cercanía y comunicación directa con nuestros clientes",
    "Soluciones flexibles y adaptadas a cada necesidad",
    "Cumplimiento responsable de plazos y presupuestos",
    "Seguridad en cada procedimiento",
    "Respeto por el entorno y el trabajo limpio"
  ];

  const [currentImg, setCurrentImg] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Cambio automático cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev === mantenimientoImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [mantenimientoImages.length]);

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImg((prev) => (prev === 0 ? mantenimientoImages.length - 1 : prev - 1));
      setIsFading(false);
    }, 350);
  };

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImg((prev) => (prev === mantenimientoImages.length - 1 ? 0 : prev + 1));
      setIsFading(false);
    }, 350);
  };

  const Carousel = () => (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <img
          loading="lazy"
          src={mantenimientoImages[currentImg]}
          alt={`Mantenimiento ${currentImg + 1}`}
          className={`w-full h-[400px] object-cover transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
        {/* Controles */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-10"
          aria-label="Anterior"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-10"
          aria-label="Siguiente"
        >
          &#8594;
        </button>
        {/* Indicadores */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {mantenimientoImages.map((_, idx) => (
            <span
              key={idx}
              className={`block w-3 h-3 rounded-full ${idx === currentImg ? "bg-primary" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            EME CONSTRUCCIÓN Y MANTENIMIENTO es tu aliado estratégico en construcciones, estructuras metálicas y mantenimiento industrial, comprometidos con la calidad, la rapidez y la confianza.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Soluciones prácticas con compromiso y experiencia
            </h3>

            <p className="text-lg text-white leading-relaxed">
              Nos especializamos en ofrecer servicios eficientes y personalizados en trabajos como estructuras metálicas, portones, revestimientos, fachadas y soluciones en material ligero. Nos enfocamos en proyectos de rápida ejecución, sin dejar de lado la seguridad y la durabilidad.
            </p>

            <p className="text-lg text-white leading-relaxed">
              Contamos con un equipo técnico con experiencia comprobada en distintas áreas del mantenimiento industrial, electricidad y climatización. Nos adaptamos a las necesidades específicas de cada cliente, asegurando resultados de calidad en cada etapa del proceso.
            </p>

            {/* Values List */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-white mb-4">
                Nuestros Valores:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <a href="https://www.instagram.com/emeconst_mant/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground"
              >
                Conoce Nuestro Equipo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Autorización SEC */}
            <div className="mt-16 flex flex-col items-center justify-center gap-4">
              <Card className="bg-card border-border text-center hover:shadow-lg transition-shadow duration-300 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-white">Autorización SEC</CardTitle>
                  <CardDescription className="text-white">
                    Servicio autorizado por la Superintendencia de Electricidad y Combustibles (SEC)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    {/* Logo SEC SVG estilizado */}
                    <img
                      loading="lazy"
                      src="https://www.guiachileenergia.cl/wp-content/uploads/2018/10/sec-300x240.jpg"
                      className="rounded-2xl"
                      alt=""
                    />
                  </div>
                </CardContent>
              </Card>
              {/* Carrusel de imágenes */}
              <Carousel />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border text-center hover:shadow-lg transition-shadow duration-300 bg-primary/5">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-foreground mb-1 text-white">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground text-white">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;