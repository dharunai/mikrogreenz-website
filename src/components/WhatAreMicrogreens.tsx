import { useEffect, useState, useRef } from "react";
import { Leaf } from "lucide-react";
import leaf1 from "@/assets/generated/leaf1.png";
import leaf2 from "@/assets/generated/leaf2.png";
import leaf3 from "@/assets/generated/leaf3.png";

const WhatAreMicrogreens = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden"
    >
      {/* Floating Background Elements */}


      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div
            className="text-center mb-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
              <Leaf className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Discover Microgreens</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              What Are <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">Microgreens?</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Microgreens are <span className="text-primary font-semibold">young vegetable seedlings</span> harvested 7-14 days after germination.
              Despite their small size, they pack an <span className="text-primary font-semibold">incredible nutritional punch</span>—up to 40 times more nutrients than their mature counterparts.
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
              <Leaf className="w-3.5 h-3.5 text-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>


        </div>
      </div>

      {/* Full-Width Marquee Scroll Section */}
      <div
        className="mt-12 overflow-hidden"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDelay: '900ms',
        }}
      >
        <div className="relative py-6 bg-gradient-to-r from-primary/5 via-primary-light/10 to-primary/5 border-y border-primary/20">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Marquee Container */}
          <div className="marquee-container">
            <div className="marquee-content will-change-transform">
              {/* First set of items */}
              {[
                "40× More Nutrients",
                "7-14 Days Growth",
                "95% Less Water",
                "Zero Chemicals",
                "Year-Round Availability",
                "Vertical Stacking",
                "Chemical-Free",
                "Sustainable Farming",
                "Nutrient Dense",
                "Fast Harvest"
              ].map((item, index) => (
                <div key={`first-${index}`} className="marquee-item">
                  <span className="text-base md:text-lg font-semibold text-primary">{item}</span>
                  <img src={[leaf1, leaf2, leaf3][index % 3]} alt="leaf" className="w-6 h-6 object-contain opacity-80" />
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {[
                "40× More Nutrients",
                "7-14 Days Growth",
                "95% Less Water",
                "Zero Chemicals",
                "Year-Round Availability",
                "Vertical Stacking",
                "Chemical-Free",
                "Sustainable Farming",
                "Nutrient Dense",
                "Fast Harvest"
              ].map((item, index) => (
                <div key={`second-${index}`} className="marquee-item">
                  <span className="text-base md:text-lg font-semibold text-primary">{item}</span>
                  <img src={[leaf1, leaf2, leaf3][index % 3]} alt="leaf" className="w-6 h-6 object-contain opacity-80" />
                </div>
              ))}

              {/* Triple set for wide screens to ensure no gaps */}
              {[
                "40× More Nutrients",
                "7-14 Days Growth",
                "95% Less Water",
                "Zero Chemicals",
                "Year-Round Availability",
                "Vertical Stacking",
                "Chemical-Free",
                "Sustainable Farming",
                "Nutrient Dense",
                "Fast Harvest"
              ].map((item, index) => (
                <div key={`third-${index}`} className="marquee-item">
                  <span className="text-base md:text-lg font-semibold text-primary">{item}</span>
                  <img src={[leaf1, leaf2, leaf3][index % 3]} alt="leaf" className="w-6 h-6 object-contain opacity-80" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Styles */}
      <style>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
        }
        
        .marquee-content {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
        
        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0 1.5rem;
          white-space: nowrap;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default WhatAreMicrogreens;

