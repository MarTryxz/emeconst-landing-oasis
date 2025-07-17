import { Card, CardHeader } from "@/components/ui/card";
import logoSutil from "@/assets/logos/logoSutil.png";
import logoPdv from "@/assets/logos/patagonia_logo.webp";
import logoSanClemente from "@/assets/logos/sanclemente_logo.webp";
import logoBadWoman from "@/assets/logos/badwoman_logo.webp";
import logoVina from "@/assets/logos/vina_logo.webp";
import logoAgricola from "@/assets/logos/agricola_UAC_logo.webp";

// Puedes reemplazar estos datos con logos e info real de tus clientes
const clients = [
  {
    logo: logoSutil
  },
  {
    logo: logoPdv
  },
  {
    logo: logoSanClemente
  },
  {
    logo: logoBadWoman
  },
  {
    logo: logoVina
  },
  {
    logo: logoAgricola
  },
];

const ClientCards = () => {
  return (
    <section id="clients" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Clientes que han confiado en nosotros
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Estas empresas y organizaciones han confiado en nuestros servicios para llevar sus proyectos al siguiente nivel.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {clients.map((client, idx) => (
            <Card key={idx} className="bg-card border-border text-center p-6 flex flex-col items-center hover:shadow-lg transition-all duration-300 group bg-primary/5">
              <CardHeader>
                <img
                  src={client.logo} 
                  alt={'logo'} 
                  className="h-160 w-160 object-contain mx-auto mb-4 rounded-2xl" 
                  loading="lazy"
                />
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCards;
