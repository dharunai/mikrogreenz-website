
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

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
      className="py-24 md:py-32 bg-gradient-to-br from-white to-[#F0FDF4] relative overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#BBF7D0] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#86EFAC] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow delay-1000"></div>
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-[#DCFCE7] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative flex flex-col items-center">

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full max-w-7xl">

            {/* Left Content - Glass Card */}
            <div className={`relative z-20 order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="backdrop-blur-md bg-white/40 border border-white/50 rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <span className="inline-block py-1 px-3 rounded-full bg-[#15803d]/10 text-[#15803d] font-semibold text-sm mb-4">
                  Fresh & Nutritious
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#14532d] leading-tight">
                  What Are <br />
                  <span className="text-[#16a34a]">Microgreens?</span>
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  Microgreens are young seedlings of edible vegetables and herbs, harvested just after the first leaves emerge. These tiny greens are known for their <span className="font-semibold text-[#15803d]">concentrated nutrients</span> and intense flavors.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#15803d] font-bold shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-[#14532d]">Nutrient Dense</h4>
                      <p className="text-sm text-gray-600">Up to 40x more nutrients than mature plants.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#15803d] font-bold shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-[#14532d]">Flavor Packed</h4>
                      <p className="text-sm text-gray-600">Intense aromatic flavors to elevate any dish.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Centerpiece - Floating Images */}
            <div className={`relative z-10 order-1 lg:order-2 flex justify-center items-center h-[500px] w-full transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

              {/* Abstract Circle decorations */}
              <div className="absolute w-[400px] h-[400px] border-2 border-[#16a34a]/10 rounded-full animate-spin-slow"></div>
              <div className="absolute w-[500px] h-[500px] border border-[#16a34a]/5 rounded-full animate-pulse-slow"></div>

              {/* Main Images */}
              <div className="relative w-full h-full">
                <img
                  src="/images/microgreens/sunflower.png"
                  alt="Sunflower Microgreen"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 md:w-[450px] object-contain drop-shadow-2xl animate-float z-20"
                  style={{ animationDelay: '0s' }}
                />
                <img
                  src="/images/microgreens/red_amaranth.png"
                  alt="Red Amaranth Microgreen"
                  className="absolute top-[10%] right-[0%] lg:right-[-10%] w-48 md:w-64 object-contain drop-shadow-xl animate-float z-10 blur-[1px]"
                  style={{ animationDelay: '2s' }}
                />
                {/* Decorative Leaf/Element */}
                <div className="absolute bottom-[10%] left-[0%] lg:left-[-5%] w-32 h-32 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/40 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-[#15803d]">100%</span>
                    <span className="text-xs font-semibold text-[#16a34a] uppercase tracking-wider">Organic</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Section - Why Microgreens */}
          <div className={`mt-24 w-full max-w-4xl mx-auto text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#16a34a]/20 to-transparent rounded-xl blur-xl"></div>
              <div className="relative bg-white/60 backdrop-blur-xl border border-white/60 rounded-xl p-8 md:p-12 shadow-2xl">
                <h3 className="text-3xl font-bold mb-6 text-[#14532d]">Why Choose Microgreens?</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Microgreens are more than just a garnish. They are a powerhouse of nutrition, packed with essential vitamins, minerals, and antioxidants that can elevate your health. They support immune function and enhance overall wellness, making them a vital addition to any diet.
                </p>
                <Button size="lg" className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold px-8 shadow-lg hover:shadow-[#16a34a]/50 transition-all rounded-full h-12">
                  Start Your Journey
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatAreMicrogreens;
