import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout } from "lucide-react";
import heroImg1 from "@/assets/hero-microgreens.jpg";
import heroImg2 from "@/assets/health_smoothie_bowl.png";
import heroImg3 from "@/assets/cafe_sandwich_microgreens.png";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [heroImg1, heroImg2, heroImg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={img}
            alt={`Hero background ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/50" />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">

          <div className="space-y-4">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-heading font-bold text-background leading-tight drop-shadow-lg">
              Revolutionizing Fresh Nutrition
            </h1>

            <p className="text-xl md:text-3xl text-white font-bold bg-white/10 backdrop-blur-md inline-block px-4 py-2 rounded-lg">
              Through Sustainable Urban Farming
            </p>

            <p className="text-lg md:text-xl text-background/90 max-w-xl leading-relaxed drop-shadow-md">
              We are a new-age agri-brand redefining healthy living through sustainable, locally grown microgreens.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
            <Button
              size="lg"
              onClick={() => scrollToSection("products")}
              className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6 shadow-lg hover:scale-105 transition-transform"
            >
              Explore Our Greens
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="bg-white/10 backdrop-blur-md border-white/50 text-white hover:bg-white hover:text-primary text-lg px-8 py-6 shadow-lg hover:scale-105 transition-transform"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-background rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-background rounded-full" />
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? "bg-primary w-6" : "bg-white/50 hover:bg-white"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
