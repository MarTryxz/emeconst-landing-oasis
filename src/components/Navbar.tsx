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
    { name: "Clientes", href: "#clients" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-cyan-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="eme_logo.webp" alt="logo" className="h-12 w-12" />
            <div className="font-bold flex flex-col justify-center items-center leading-tight">
              <span
                className="block text-center"
                style={{
                  display: "inline-block",
                  width: "100%",
                  transform: "scaleX(1.1)",
                }}
              >
                CONSTRUCCION
              </span>
              <span
                className="block text-center"
                style={{
                  display: "inline-block",
                  width: "100%"
                }}
              >
                MANTENIMIENTO
              </span>
            </div>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
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
              variant="default"
              size="icon"
              onClick={toggleMenu}
              className="text-black"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black border-t border-cyan-500">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <a href="https://wa.me/56938762596?text=" target="_blank">
                <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground">
                  Cotización Gratis
                </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <a href="https://wa.me/56938762596?text=" 
   style={{
    position: "fixed", 
    bottom: "20px", 
    right: "20px", 
    backgroundColor: "#25D366", 
    color: "white", 
    padding: "12px 20px", 
    borderRadius: "50px", 
    textDecoration: "none", 
    fontSize: "16px", 
    fontFamily: "sans-serif", 
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)", 
    zIndex: "1000"
   }}
   target="_blank">
   <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" width={40} height={40}/>
</a>
    </nav>
  );
};

export default Navbar;