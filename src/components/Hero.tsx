import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Sprout } from "lucide-react";
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
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>
      ))}

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <Leaf className="absolute top-[20%] right-[10%] w-16 h-16 text-white/10 animate-float" style={{ animationDuration: '8s' }} />
        <Leaf className="absolute bottom-[20%] left-[5%] w-12 h-12 text-white/5 animate-float" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <Sprout className="absolute top-[40%] left-[15%] w-8 h-8 text-primary/20 animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-4xl space-y-10 animate-in fade-in slide-in-from-left-12 duration-1000">

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-white/20 shadow-xl">
              <Sprout className="w-5 h-5 text-primary-light" />
              <span className="text-sm font-bold text-white uppercase tracking-widest">Organic Vertical Farming & Sustainable Growth</span>
            </div>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[1.1] drop-shadow-2xl">
              Revolutionizing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-emerald-400 to-green-500">Fresh Nutrition</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed font-medium drop-shadow-lg">
              Pioneering <span className="text-white font-bold border-b-2 border-primary-light">fresh, chemical-free vegetable cultivation</span> with proprietary technology, delivering nutrient-rich superfoods through sustainable innovation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-start">
            <Button
              size="lg"
              onClick={() => scrollToSection("products")}
              className="bg-primary hover:bg-white hover:text-primary text-primary-foreground text-xl px-10 py-8 shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-300 rounded-2xl group"
            >
              Explore Our Greens
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-primary text-xl px-10 py-8 shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer opacity-80 hover:opacity-100 transition-opacity" onClick={() => scrollToSection("about")}>
        <div className="w-7 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 right-10 z-10 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentImageIndex ? "bg-primary w-10 shadow-lg shadow-primary/50" : "bg-white/30 hover:bg-white/60"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
