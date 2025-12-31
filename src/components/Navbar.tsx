import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (item: any) => {
    if (item.type === 'page') {
      navigate(item.path);
      setIsMobileMenuOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Products", id: "products" },
    { label: "Benefits", id: "benefits" },
    { label: "Research", id: "research", type: "page", path: "/research" },
    { label: "Industries", id: "industries" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-sm py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection({ id: "home", label: "Home" })}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={logo}
              alt="MikroGreenz Global"
              className="h-10 w-10 md:h-14 md:w-14 rounded-full object-cover shadow-md"
              style={{ background: 'transparent' }}
            />
            <span className="text-sm md:text-xl font-heading font-bold text-primary text-left leading-tight">
              MikroGreenz Global
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <Button
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary-hover text-white text-xs px-4 h-9 rounded-full shadow-sm"
            >
              Get Quote
            </Button>
            <button
              className="text-foreground p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card py-4 px-2 rounded-lg shadow-lg mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link)}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full mt-2 bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              Get a Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
