import { Mail, Phone, MapPin, Leaf } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <Leaf className="absolute top-20 left-10 w-32 h-32 text-white/5 animate-float" style={{ animationDuration: '8s' }} />
        <Leaf className="absolute bottom-20 right-20 w-40 h-40 text-white/5 animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-12 md:py-20">
          {/* Brand Column */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="MikroGreenz Global"
                className="h-14 w-14 md:h-16 md:w-16 object-contain bg-white/10 rounded-full p-2 backdrop-blur-sm"
              />
              <span className="text-xl md:text-2xl font-heading font-bold">MikroGreenz</span>
            </div>
            <p className="text-sm md:text-base text-primary-foreground/80 leading-relaxed italic">
              Premium quality microgreens grown with care and passion. Bringing you the freshest, most nutritious microgreens for a healthier lifestyle.
            </p>

            {/* Social Media or Certifications */}
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-lg">🌱</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-lg">♻️</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-lg">✓</span>
              </div>
            </div>
          </div>

          {/* Reach Us Column */}
          <div>
            <h4 className="text-base md:text-lg font-heading font-semibold mb-4 md:mb-6 pb-2 border-b border-white/20 inline-block">
              Reach Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm md:text-base text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Coimbatore, Tamil Nadu</p>
                  <p className="text-xs md:text-sm">South India</p>
                </div>
              </div>

              <a
                href="mailto:mikrogreenz.global@gmail.com"
                className="flex items-start gap-3 text-sm md:text-base text-primary-foreground/80 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all">mikrogreenz.global@gmail.com</span>
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 text-sm md:text-base text-primary-foreground/80 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-base md:text-lg font-heading font-semibold mb-4 md:mb-6 pb-2 border-b border-white/20 inline-block">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Microgreens Varieties', id: 'products' },
                { name: 'Health Benefits', id: 'benefits' },
                { name: 'Industry Applications', id: 'feedback' },
                { name: 'About Us', id: 'about' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm md:text-base text-primary-foreground/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors"></span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-base md:text-lg font-heading font-semibold mb-4 md:mb-6 pb-2 border-b border-white/20 inline-block">
              Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Contact Us', id: 'contact' },
                { name: 'Privacy Policy', href: '#privacy' },
                { name: 'Terms Of Service', href: '#terms' },
                { name: 'Partnership', id: 'feedback' },
                { name: 'Get a Quote', id: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  {item.id ? (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-sm md:text-base text-primary-foreground/70 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors"></span>
                      {item.name}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm md:text-base text-primary-foreground/70 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors"></span>
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-primary-foreground/60">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} MikroGreenz Global. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="hidden md:inline">•</span>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <span className="hidden md:inline">•</span>
              <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
