import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Calendar, 
  Target, 
  CheckCircle,
  ArrowRight 
} from "lucide-react";
import maintenanceImage from "@/assets/maintenance-service.jpg";

const About = () => {
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
    "Calidad garantizada en cada proyecto",
    "Cumplimiento estricto de cronogramas",
    "Personal altamente capacitado y certificado",
    "Tecnología de vanguardia en construcción",
    "Compromiso con la seguridad laboral",
    "Responsabilidad ambiental y sostenibilidad"
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            EME CONSTRUCCIÓN Y MANTENIMIENTO es tu aliado estratégico en construcción y mantenimiento industrial, 
            comprometidos con la excelencia y sostenibilidad.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Construyendo el Futuro con Experiencia y Compromiso
            </h3>
            
            <p className="text-lg text-white leading-relaxed">
              Desde nuestros inicios, nos hemos especializado en brindar soluciones integrales 
              de construcción y mantenimiento industrial. Nuestro equipo multidisciplinario 
              está conformado por ingenieros, arquitectos y técnicos especializados que 
              garantizan la excelencia en cada proyecto.
            </p>

            <p className="text-lg text-white leading-relaxed">
              Trabajamos con tecnología de vanguardia y seguimos los más estrictos estándares 
              de calidad y seguridad, asegurando que cada proyecto se entregue a tiempo y 
              dentro del presupuesto establecido.
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

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground"
            >
              Conoce Nuestro Equipo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={maintenanceImage} 
                alt="Equipo de mantenimiento EMECONST MANT"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
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