import { useEffect, useState, useRef } from "react";
import { Leaf, ArrowRight, Star } from "lucide-react";
import beetrootImg from "@/assets/products/beetroot-microgreens.jpg";
import radishImg from "@/assets/products/radish-microgreens.jpg";
import broccoliImg from "@/assets/products/broccoli-microgreens.jpg";
import kaleImg from "@/assets/products/kale-microgreens.jpg";
import methiImg from "@/assets/products/methi-microgreens.jpg";
import mustardImg from "@/assets/products/mustard-microgreens.jpg";
import sunflowerImg from "@/assets/products/sunflower-microgreens.jpg";
import wheatgrassImg from "@/assets/products/wheatgrass.jpg";
import cilantroImg from "@/assets/products/cilantro-microgreens.jpg";
import kohlrabiImg from "@/assets/products/kohlrabi-microgreens.jpg";

const Products = () => {
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

  const products = [
    {
      name: "Beetroot Microgreens",
      benefit: "Boost heart health and support blood flow",
      image: beetrootImg,
      accent: "bg-red-500",
      lightAccent: "bg-red-50",
      textColor: "text-red-500"
    },
    {
      name: "Radish Microgreens",
      benefit: "Detoxifying and immunity-supporting",
      image: radishImg,
      accent: "bg-pink-500",
      lightAccent: "bg-pink-50",
      textColor: "text-pink-500"
    },
    {
      name: "Broccoli Microgreens",
      benefit: "Rich in antioxidants and sulforaphane",
      image: broccoliImg,
      accent: "bg-green-600",
      lightAccent: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      name: "Kale Microgreens",
      benefit: "High in vitamins A, C, and K for immunity",
      image: kaleImg,
      accent: "bg-emerald-600",
      lightAccent: "bg-emerald-50",
      textColor: "text-emerald-600"
    },
    {
      name: "Methi Microgreens",
      benefit: "Helps regulate blood sugar and digestion",
      image: methiImg,
      accent: "bg-yellow-600",
      lightAccent: "bg-yellow-50",
      textColor: "text-yellow-600"
    },
    {
      name: "Mustard Microgreens",
      benefit: "Metabolism booster with a tangy flavor",
      image: mustardImg,
      accent: "bg-amber-500",
      lightAccent: "bg-amber-50",
      textColor: "text-amber-500"
    },
    {
      name: "Kohlrabi & Pak Choi",
      benefit: "Excellent for bone health and cellular function",
      image: kohlrabiImg,
      accent: "bg-purple-500",
      lightAccent: "bg-purple-50",
      textColor: "text-purple-500"
    },
    {
      name: "Sunflower Microgreens",
      benefit: "Protein and energy-rich with healthy fats",
      image: sunflowerImg,
      accent: "bg-yellow-500",
      lightAccent: "bg-yellow-50",
      textColor: "text-yellow-500"
    },
    {
      name: "Wheatgrass",
      benefit: "Natural detoxifier and energy booster",
      image: wheatgrassImg,
      accent: "bg-green-500",
      lightAccent: "bg-green-50",
      textColor: "text-green-500"
    },
    {
      name: "Cilantro Microgreens",
      benefit: "Adds fresh aroma and supports detoxification",
      image: cilantroImg,
      accent: "bg-emerald-500",
      lightAccent: "bg-emerald-50",
      textColor: "text-emerald-500"
    },
  ];

  return (
    <section id="products" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Abstract Background Curves */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Floating Leaves */}
      <Leaf className="absolute top-20 left-[10%] w-12 h-12 text-primary/5 animate-float" style={{ animationDuration: '6s' }} />
      <Leaf className="absolute bottom-40 right-[15%] w-10 h-10 text-primary/5 animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className="text-center max-w-3xl mx-auto mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 shadow-sm">
            <span className="text-primary font-bold tracking-wide uppercase text-xs">Our Harvest</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-foreground mb-6 leading-tight">
            Premium <span className="text-primary relative inline-block">
              Selection
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our range of meticulously grown microgreens, each packed with distinct flavors and potent health benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 border border-slate-100"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Card Geometric Banner */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${product.accent} opacity-5 rounded-bl-[4rem] group-hover:scale-150 transition-transform duration-700 ease-out`} />

              {/* Image Section */}
              <div className="relative h-64 overflow-hidden p-4 pb-0">
                <div className="w-full h-full rounded-t-[1.5rem] overflow-hidden relative shadow-inner">
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />

                  {/* Floating Action Button */}
                  <div className="absolute bottom-4 right-4 z-20 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className={`w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center ${product.textColor} hover:scale-110 transition-transform`}>
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 pt-6 relative">
                <div className={`w-12 h-1.5 rounded-full ${product.accent} mb-4 transform origin-left group-hover:scale-x-150 transition-transform duration-500`} />

                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <p className="text-slate-500 leading-relaxed mb-6 text-sm min-h-[40px]">
                  {product.benefit}
                </p>

                {/* Footer / Badge */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                  <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${product.textColor}`}>
                    <Star className="w-3 h-3 fill-current" />
                    Premium Grade
                  </div>
                  <div className="text-slate-300 transform group-hover:rotate-12 transition-transform">
                    <Leaf className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
