import React, { useEffect, useState, useRef } from "react";
import { Leaf, ArrowRight, Star, Info } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { microgreensData } from "@/data/microgreensData";
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
          {products.map((product, index) => {
            const detail = microgreensData[product.name];

            const CardContent = (
              <div
                className={`group relative bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 border border-slate-100 h-full flex flex-col ${detail ? 'cursor-pointer' : ''}`}
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
                <div className="relative h-64 overflow-hidden p-4 pb-0 shrink-0">
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
                        {detail ? <Info className="w-6 h-6" /> : <ArrowRight className="w-6 h-6" />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 pt-6 relative flex-grow flex flex-col">
                  <div className={`w-12 h-1.5 rounded-full ${product.accent} mb-4 transform origin-left group-hover:scale-x-150 transition-transform duration-500`} />

                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-slate-500 leading-relaxed mb-6 text-sm min-h-[40px] flex-grow">
                    {product.benefit}
                  </p>

                  {/* Footer / Badge */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-auto">
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
            );

            if (!detail) {
              return <React.Fragment key={index}>{CardContent}</React.Fragment>;
            }

            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  {CardContent}
                </DialogTrigger>
                <DialogContent className="w-[95vw] sm:max-w-[750px] max-h-[85vh] overflow-y-auto overflow-x-hidden rounded-[1.5rem] md:rounded-[2rem] p-0 border-0 flex flex-col gap-0 shadow-2xl">
                  {/* Fixed Header */}
                  <div className={`shrink-0 min-h-[7rem] md:h-32 relative flex items-end p-5 pr-12 md:p-8 md:pr-12 ${product.lightAccent} overflow-hidden rounded-t-[1.5rem] md:rounded-t-[2rem]`}>
                    <div className={`absolute inset-0 opacity-20 bg-pattern`} />
                    <div className={`absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl opacity-30 ${product.accent} -translate-y-1/2 translate-x-1/2 pointer-events-none`} />
                    <DialogTitle className="text-2xl md:text-4xl font-heading font-extrabold flex items-center gap-3 md:gap-4 relative z-10 text-slate-900 leading-tight">
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${product.accent} shadow-inner bg-opacity-20 flex items-center justify-center shrink-0`}>
                        <Leaf className={`w-4 h-4 md:w-5 md:h-5 ${product.textColor}`} />
                      </div>
                      <span className="break-words">{product.name}</span>
                    </DialogTitle>
                  </div>
                  
                  {/* Scrollable Content */}
                  <div className="p-5 md:p-8 grid md:grid-cols-2 gap-6 md:gap-8 bg-white relative">
                    {/* Left Column */}
                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-slate-800">
                        <Leaf className={`w-5 h-5 ${product.textColor}`} /> 
                        Top Health Benefits
                      </h4>
                      <ul className="space-y-3 mb-8">
                        {detail.benefits.map((b, i) => {
                          const [title, ...desc] = b.split(':');
                          return (
                            <li key={i} className="text-sm flex items-start gap-3">
                              <span className={`mt-1 shrink-0 ${product.textColor}`}>•</span> 
                              <span>
                                <strong className="text-slate-700">{title}</strong>
                                {desc.length > 0 && <span className="text-slate-500">:{desc.join(':')}</span>}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                      
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-slate-800">
                        <Star className={`w-5 h-5 ${product.textColor}`} /> 
                        Key Advantages
                      </h4>
                      <ul className="space-y-3">
                        {detail.advantages.map((a, i) => (
                          <li key={i} className="text-sm flex items-start gap-3">
                            <span className={`mt-1 shrink-0 ${product.textColor}`}>•</span> 
                            <span className="text-slate-600">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Right Column */}
                    <div className={`rounded-xl md:rounded-2xl p-5 md:p-6 ${product.lightAccent} border-2 border-white shadow-inner`}>
                      <h4 className="font-bold text-md mb-3 text-slate-800 border-b border-black/5 pb-2">Nutritional Profile</h4>
                      <div className="mb-6 space-y-2">
                        <div className="text-sm">
                          <span className="font-bold text-slate-700">Vitamins:</span> <span className="text-slate-600">{detail.vitamins.join(", ")}</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-bold text-slate-700">Minerals:</span> <span className="text-slate-600">{detail.minerals.join(", ")}</span>
                        </div>
                      </div>
                      
                      {detail.keyCompounds && detail.keyCompounds.length > 0 && (
                        <>
                          <h4 className="font-bold text-md mb-3 text-slate-800 border-b border-black/5 pb-2">Key Compounds</h4>
                          <div className="space-y-3 mb-6">
                            {detail.keyCompounds.map((kc, i) => (
                              <div key={i} className="text-sm">
                                <span className="font-bold text-slate-700 block">{kc.name}</span> 
                                <span className="text-slate-600">{kc.description}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      
                      <h4 className="font-bold text-md mb-3 text-slate-800 border-b border-black/5 pb-2">Daily Consumption</h4>
                      <div className="text-sm flex flex-col gap-2">
                        <div>
                          <span className="font-bold text-slate-700">Amount:</span> <span className="text-slate-600">{detail.consumption.amount}</span>
                        </div>
                        <div>
                          <span className="font-bold text-slate-700 block mb-1">Best Ways to Use:</span> 
                          <div className="flex flex-wrap gap-2">
                            {detail.consumption.waysToUse.map((way, wId) => (
                              <span key={wId} className="bg-white px-2 py-1 rounded-md text-xs font-medium shadow-sm text-slate-600">
                                {way}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
