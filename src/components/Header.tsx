import { Plane } from "lucide-react";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-white">
          <Plane className="w-8 h-8" />
          <span className="text-xl font-semibold">AIR VIEW</span>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            Services
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            About
          </a>
        </div>
      </nav>
    </header>
  );
}