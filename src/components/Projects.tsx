import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import buildingImage from "@/assets/building-construction.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Centro Comercial Plaza Norte",
      description: "Construcción completa de centro comercial de 5 plantas con estacionamiento subterráneo y sistemas especializados.",
      image: buildingImage,
      location: "Caracas, Venezuela",
      duration: "18 meses",
      category: "Construcción Civil",
      status: "Completado",
      features: ["25,000 m² construidos", "150 locales comerciales", "Sistema contra incendios", "HVAC centralizado"]
    },
    {
      title: "Planta Industrial PDVSA",
      description: "Mantenimiento integral de equipos industriales y modernización de sistemas de control automatizado.",
      image: buildingImage,
      location: "Maracaibo, Venezuela",
      duration: "12 meses",
      category: "Mantenimiento Industrial",
      status: "En Ejecución",
      features: ["50 equipos industriales", "Sistema SCADA", "Instrumentación", "Capacitación técnica"]
    },
    {
      title: "Complejo Residencial Los Altos",
      description: "Desarrollo residencial de 120 viviendas con áreas comunes, piscina y sistemas de seguridad integrados.",
      image: buildingImage,
      location: "Valencia, Venezuela",
      duration: "24 meses",
      category: "Construcción Civil",
      status: "Completado",
      features: ["120 viviendas", "Áreas recreacionales", "Sistema de seguridad", "Urbanismo completo"]
    },
    {
      title: "Modernización Puerto La Guaira",
      description: "Renovación de infraestructura portuaria incluyendo muelles, grúas y sistemas de manejo de carga.",
      image: buildingImage,
      location: "La Guaira, Venezuela",
      duration: "30 meses",
      category: "Infraestructura",
      status: "En Planificación",
      features: ["3 muelles nuevos", "Grúas especializadas", "Sistema logístico", "Dragado portuario"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "En Ejecución":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "En Planificación":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Construcción Civil":
        return "bg-primary/10 text-primary hover:bg-primary/20";
      case "Mantenimiento Industrial":
        return "bg-accent/10 text-accent-foreground hover:bg-accent/20";
      case "Infraestructura":
        return "bg-secondary/10 text-secondary-foreground hover:bg-secondary/20";
      default:
        return "bg-muted/10 text-muted-foreground hover:bg-muted/20";
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestros Proyectos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce algunos de nuestros proyectos más destacados que demuestran 
            nuestra experiencia y compromiso con la excelencia
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                  <Badge variant="outline" className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Project Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Características principales:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                >
                  Ver Detalles del Proyecto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para hacer realidad tu proyecto. 
            Desde la planificación hasta la entrega, te acompañamos en cada paso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground"
            >
              Solicitar Consulta Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Ver Todos los Proyectos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;