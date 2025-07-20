import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ClientCards from "@/components/ClientCards";
import { 
  Building, 
  Wrench, 
  Zap, 
  ArrowRight,
  AirVent
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Construcción",
      description: "Soluciones rápidas, prácticas y seguras en construcciones menores",
      features: ["Construcción en material ligero", "Portones y cierres perimetrales", "Estructuras metálicas", "Revestimientos y cambios de fachada", "Trabajos adaptados a tus necesidades"]
    },
    {
      icon: Wrench,
      title: "Mantenimiento",
      description: "Servicios técnicos confiables para conservar y mejorar tus espacios",
      features: ["Mantenimiento industrial general", "Instalación y reparación eléctrica", "Sistemas de riego", "Reparaciones estructurales menores", "Soporte técnico 24/7"]
    },
    {
      icon: Zap,
      title: "Electricidad y electrónica",
      description: "Instalación y mantenimiento de sistemas eléctricos para edificios comerciales.",
      features: ["Instalación de sistemas eléctricos", "Mantenimiento preventivo y correctivo", "Proyectos eléctricos", "Soporte técnico 24/7"]
    },
    {
      icon: AirVent,
      title: "Climatización",
      description: "Instalación y mantenimiento de sistemas de climatización para edificios comerciales.",
      features: ["Instalación de sistemas de aire acondicionado", "Mantenimiento preventivo", "Ventas de equipos", "Soporte técnico 24/7"]
    }
  ];

  return (
    <>
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Ofrecemos soluciones integrales en construcción y mantenimiento industrial 
              con la más alta calidad y profesionalismo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card hover:shadow-lg transition-all duration-300 border-border group hover:border-primary/20 bg-primary/5 border-primary/5"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-white">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground text-white">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#projects">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  >
                    Más Información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
          <a href="https://wa.me/56938762596?text=" target="_blank">  
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4"
            >
              Solicitar Cotización Personalizada
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;