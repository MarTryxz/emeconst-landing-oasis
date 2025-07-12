import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Calculator,
  UserCheck
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+58 414-123-4567",
      description: "Llámanos de lunes a sabado"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contacto@emeconst.com",
      description: "Respuesta en maximo 24 horas"
    },
    {
      icon: MapPin,
      title: "Oficina Principal",
      info: "Av. Rancagua 1234",
      description: "Chile"
    },
    {
      icon: Clock,
      title: "Horario",
      info: "Lun - Vie: 8:00 - 17:00",
      description: "Sáb: 8:00 - 12:00"
    }
  ];

  const services = [
    { icon: Calculator, title: "Cotización Gratuita", desc: "Evaluación sin costo" },
    { icon: UserCheck, title: "Consulta Técnica", desc: "Asesoría especializada" },
    { icon: MessageSquare, title: "Soporte 24/7", desc: "Atención inmediata" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros y 
            descubre cómo podemos hacer realidad tu proyecto
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Envíanos un Mensaje
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Completa el formulario y te contactaremos en las próximas 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Nombre Completo
                    </Label>
                    <Input 
                      id="name"
                      placeholder="Tu nombre completo"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email
                    </Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Teléfono
                    </Label>
                    <Input 
                      id="phone"
                      placeholder="+58 414-xxx-xxxx"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground font-medium">
                      Empresa
                    </Label>
                    <Input 
                      id="company"
                      placeholder="Nombre de tu empresa"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project" className="text-foreground font-medium">
                    Tipo de Proyecto
                  </Label>
                  <select 
                    id="project"
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:border-primary focus:outline-none text-foreground"
                  >
                    <option value="">Selecciona un tipo de proyecto</option>
                    <option value="construccion">Construcción Civil</option>
                    <option value="mantenimiento">Mantenimiento Industrial</option>
                    <option value="infraestructura">Electrificacion</option>
                    <option value="mecanico">Climatizacion</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Describe tu Proyecto
                  </Label>
                  <Textarea 
                    id="message"
                    placeholder="Cuéntanos los detalles de tu proyecto, presupuesto estimado, fechas importantes, etc."
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground"
                >
                  Enviar Mensaje
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="bg-card border-cyan-500 border-2 bg-background/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground text-white">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary"/>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-white">{item.title}</h4>
                      <p className="text-primary font-medium">{item.info}</p>
                      <p className="text-sm text-muted-foreground text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Services */}
            <Card className="bg-primary/5 border-cyan-500">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  Servicios Rápidos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-background/10 backdrop-blur-sm rounded-lg">
                    <service.icon className="h-5 w-5 text-primary" />
                    <div>
                      <h5 className="font-medium text-white">{service.title}</h5>
                      <p className="text-sm text-white">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            {/* Emergency Contact */}
          </div>
        </div>

        {/* Map Placeholder */}
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold text-foreground mb-2">Nuestra Ubicación</h4>
                <p>Av. Rancagua 1234</p>
                <p className="text-sm mt-2">Mapa interactivo disponible próximamente</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;