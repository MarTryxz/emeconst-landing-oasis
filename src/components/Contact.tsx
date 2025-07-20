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
      info: "+56 9 3876 2596",
      description: "Llámanos de lunes a sabado"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contacto@empresaeme.cl",
      description: "Respuesta en maximo 24 horas"
    },
    {
      icon: MapPin,
      title: "Oficina Principal",
      info: "Calle Bosque de Sta. Clara 2494",
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
                <form action="https://formsubmit.co/martin.romoarros224@gmail.com" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Nombre Completo
                      </Label>
                      <Input 
                        id="name"
                        name="Nombre"
                        placeholder="Tu nombre completo"
                        className="bg-background border-border focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email
                      </Label>
                      <Input 
                        id="email"
                        name="Email"
                        type="email"
                        placeholder="tu@email.com"
                        className="bg-background border-border focus:border-primary"
                        required
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
                        name="Telefono"
                        placeholder="+56 9 xxxx-xxxx"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground font-medium">
                        Empresa
                      </Label>
                      <Input 
                        id="company"
                        name="Empresa"
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
                      name="project"
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:border-primary focus:outline-none text-foreground"
                      required
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
                      name="Mensaje"
                      placeholder="Cuéntanos los detalles de tu proyecto, presupuesto estimado, fechas importantes, etc."
                      rows={4}
                      className="bg-background border-border focus:border-primary resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary-glow text-primary-foreground"
                  >
                    Enviar Mensaje
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
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

        {/* Mapa Google Maps */}
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="rounded-lg overflow-hidden w-full" style={{ minHeight: 260 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.9192445675753!2d-70.77411769999999!3d-34.1739823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966342e7978ceebd%3A0x7d6e18113a2b93f6!2sC.%20Bosque%20de%20Sta.%20Clara%202494%2C%202843256%20Rancagua%2C%20O&#39;Higgins!5e0!3m2!1ses!2scl!4v1752965027715!5m2!1ses!2scl"
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Google Maps"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;