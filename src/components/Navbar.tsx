import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import EmecoLogo from "./EmecoLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#services" },
    { name: "Nosotros", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <EmecoLogo className="h-10 w-10 text-primary" />
            <span className="text-xl font-bold text-foreground">
              EMECONST MANT
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground">
              Cotización Gratis
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground">
                  Cotización Gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;