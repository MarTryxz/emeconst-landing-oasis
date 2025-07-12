import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      title: "Construcción Civil",
      description: "Construcción de edificaciones residenciales, comerciales e industriales con los más altos estándares de calidad.",
      features: ["Viviendas unifamiliares", "Edificios comerciales", "Naves industriales", "Infraestructura civil"]
    },
    {
      icon: Wrench,
      title: "Mantenimiento Industrial",
      description: "Servicios especializados de mantenimiento preventivo y correctivo para equipos y maquinarias industriales.",
      features: ["Mantenimiento preventivo", "Reparaciones especializadas", "Optimización de procesos", "Soporte técnico 24/7"]
    },
    {
      icon: Zap,
      title: "Electrificación",
      description: "Instalación y mantenimiento de sistemas eléctricos para edificios comerciales.",
      features: ["Instalación de sistemas eléctricos", "Mantenimiento preventivo", "Optimización de procesos", "Soporte técnico 24/7"]
    },
    {
      icon: AirVent,
      title: "Climatización",
      description: "Instalación y mantenimiento de sistemas de climatización para edificios comerciales.",
      features: ["Instalación de sistemas de aire acondicionado", "Mantenimiento preventivo", "Optimización de procesos", "Soporte técnico 24/7"]
    }
  ];

  return (
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
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                >
                  Más Información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4"
          >
            Solicitar Cotización Personalizada
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;