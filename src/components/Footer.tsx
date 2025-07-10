import { Button } from "@/components/ui/button";
import { 
  HardHat, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    servicios: [
      "Construcción Civil",
      "Mantenimiento Industrial", 
      "Infraestructura",
      "Servicios Mecánicos",
      "Transporte Especializado",
      "Consultoría"
    ],
    empresa: [
      "Sobre Nosotros",
      "Nuestro Equipo",
      "Certificaciones",
      "Historia",
      "Trabaja con Nosotros",
      "Sostenibilidad"
    ],
    recursos: [
      "Proyectos",
      "Blog Técnico",
      "Casos de Éxito",
      "Descargas",
      "FAQ",
      "Soporte"
    ]
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <HardHat className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">EMECONST MANT</span>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Especialistas en construcción y mantenimiento industrial con más de 15 años 
              de experiencia transformando espacios y optimizando procesos.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90">+58 414-123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90">info@emeconst.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/90">
                  Av. Principal, Caracas 1010<br />Venezuela
                </span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Recursos</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3 text-primary-foreground">Newsletter</h4>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Recibe noticias y actualizaciones del sector
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Tu email"
                  className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent focus:outline-none"
                />
                <Button 
                  size="sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Suscribir
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/80">Síguenos:</span>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center md:text-right">
              <p className="text-primary-foreground/80 mb-2">¿Listo para tu proyecto?</p>
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Solicitar Cotización
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 bg-foreground/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <div className="flex flex-col md:flex-row gap-4">
              <span>© 2024 EMECONST MANT. Todos los derechos reservados.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a>
                <a href="#" className="hover:text-accent transition-colors">Términos de Servicio</a>
              </div>
            </div>
            
            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/10"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Volver arriba
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;