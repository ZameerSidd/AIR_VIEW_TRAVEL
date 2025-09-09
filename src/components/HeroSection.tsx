import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-4xl mx-auto z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Travel with Us,<br />
          Experience the Best
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg"
          >
            Book Now
          </Button>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-8 py-3 text-lg backdrop-blur-sm"
          >
            Get Visa
          </Button>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-8 py-3 text-lg backdrop-blur-sm"
          >
            Explore Packages
          </Button>
        </div>
      </div>
    </section>
  );
}