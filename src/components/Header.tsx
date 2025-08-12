import { Button } from "@/components/ui/button";
import { Truck, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-fleet-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-fleet-primary to-fleet-primary-dark rounded-lg flex items-center justify-center shadow-[var(--shadow-button)]">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-fleet-text">FleetTracker</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-fleet-text-light hover:text-fleet-primary transition-[var(--transition-smooth)]">
              Features
            </a>
            <a href="#contact" className="text-fleet-text-light hover:text-fleet-primary transition-[var(--transition-smooth)]">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-fleet-text-light hover:text-fleet-primary transition-[var(--transition-smooth)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-fleet-primary/10">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-fleet-text-light hover:text-fleet-primary transition-[var(--transition-smooth)]">
                Features
              </a>
              <a href="#contact" className="text-fleet-text-light hover:text-fleet-primary transition-[var(--transition-smooth)]">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="default" size="sm">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;