import { Plane, FileText, Building, Umbrella } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Plane,
      title: "Air Ticket",
      subtitle: "Booking"
    },
    {
      icon: FileText,
      title: "Visa",
      subtitle: "Assistance"
    },
    {
      icon: Building,
      title: "Hotel",
      subtitle: "Booking"
    },
    {
      icon: Umbrella,
      title: "Holiday",
      subtitle: "Packages"
    }
  ];

  return (
    <section className="relative py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center text-white group cursor-pointer transition-transform hover:scale-105"
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center">
                  <IconComponent className="w-12 h-12 text-white group-hover:text-blue-200 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-lg text-gray-200">{service.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}