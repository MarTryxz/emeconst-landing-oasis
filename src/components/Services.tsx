import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Wrench, 
  HardHat, 
  Cog, 
  Truck, 
  ShieldCheck,
  ArrowRight
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
      icon: HardHat,
      title: "Obras de Infraestructura",
      description: "Desarrollo de proyectos de infraestructura vial, hidráulica y de servicios públicos.",
      features: ["Carreteras y vialidad", "Sistemas hidráulicos", "Obras portuarias", "Urbanismo"]
    },
    {
      icon: Cog,
      title: "Servicios Mecánicos",
      description: "Instalación, reparación y mantenimiento de sistemas mecánicos industriales y comerciales.",
      features: ["Sistemas HVAC", "Equipos industriales", "Calderas y compresores", "Sistemas de bombeo"]
    },
    {
      icon: Truck,
      title: "Transporte Especializado",
      description: "Logística y transporte de equipos pesados y materiales especializados para proyectos industriales.",
      features: ["Transporte de maquinaria", "Grúas y montacargas", "Logística de materiales", "Equipos especiales"]
    },
    {
      icon: ShieldCheck,
      title: "Consultoría y Supervisión",
      description: "Asesoría técnica especializada y supervisión de proyectos de construcción y mantenimiento.",
      features: ["Supervisión técnica", "Gestión de proyectos", "Control de calidad", "Asesoría especializada"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en construcción y mantenimiento industrial 
            con la más alta calidad y profesionalismo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card hover:shadow-lg transition-all duration-300 border-border group hover:border-primary/20"
            >
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
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