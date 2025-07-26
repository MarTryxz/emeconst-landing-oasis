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
  const footerLinks = {
    servicios: [
      "Construcción",
      "Mantenimiento",
      "Electricidad y electrónica",
      "Climatización",
    ],
    empresa: [
      "Sobre Nosotros",
      "Nuestro Equipo",
      "Certificaciones",
      "Trabaja con Nosotros",
    ],
    recursos: [
      "Proyectos",
      "FAQ",
      "Casos de Éxito",
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
              <img loading="lazy" src="/eme_logo.webp" alt="" className="h-12 w-12"/>
              <span className="text-xl font-bold text-white">CONSTRUCCION MANTENIMIENTO</span>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed text-white">
              Especialistas en construcción y mantenimiento industrial con más de 5 años 
              de experiencia transformando espacios y optimizando procesos.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-primary-foreground/90 text-white">+56 9 3876 2596</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-primary-foreground/90 text-white">info@empresaeme.cl</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-primary-foreground/90 text-white">
                Calle Bosques Santa Clara 2494 Rancagua<br />Chile
                </span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#projects" 
                    className="text-primary-foreground/80 hover:text-primary transition-colors duration-300 text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#about" 
                    className="text-primary-foreground/80 hover:text-primary transition-colors duration-300 text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Recursos</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-primary transition-colors duration-300 text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-white">Síguenos:</span>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/emeconst_mant/" 
                  target="_blank"
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/emeconst_mant/"
                  target="_blank"
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/emeconst-mant/" 
                  target="_blank"
                  className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center md:text-right">
              <p className="text-white mb-2">¿Listo para tu proyecto?</p>
              <a href="https://wa.me/56938762596?text=" target="_blank">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Solicitar Cotización
              </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 bg-foreground/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <div className="flex flex-col md:flex-row gap-4 text-white">
              <span>© 2024 EME CONSTRUCCION Y MANTENIMIENTO. Todos los derechos reservados.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors text-white">Política de Privacidad</a>
                <a href="#" className="hover:text-primary transition-colors text-white">Términos de Servicio</a>
              </div>
            </div>
            
            {/* Back to Top */}
            <a href="#hero">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-primary hover:bg-primary-foreground/10"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Volver arriba
            </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;