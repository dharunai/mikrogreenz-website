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
    <section id="products" className="py-24 relative overflow-hidden bg-white">
      {/* Abstract Background Curves */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* SVG Curve Top Right */}
      <svg className="absolute top-0 right-0 w-1/3 h-auto text-primary/10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0 L100 0 L100 100 Q50 100 0 0 Z" fill="currentColor" />
      </svg>

      {/* Geometric Shape Bottom Left */}
      <img
        src="data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%2310B981' fill-opacity='0.05' d='M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.2,32.7C60.2,43.9,49.5,53.4,37.6,60.8C25.7,68.2,12.7,73.5,-0.6,74.5C-13.9,75.5,-27.2,72.2,-38.7,65.2C-50.2,58.2,-59.9,47.5,-67.6,35.4C-75.3,23.3,-81,9.8,-79.8,-3.1C-78.6,-16,-70.5,-28.3,-60.7,-38.4C-50.9,-48.5,-39.4,-56.3,-27.3,-64.8C-15.2,-73.3,-2.5,-82.5,10.6,-82.5C23.7,-82.5,30.5,-83.6,44.7,-76.4Z' transform='translate(100 100)' /%3E%3C/svg%3E"
        className="absolute bottom-10 left-10 w-96 h-96 opacity-50 animate-pulse pointer-events-none"
        alt="background-shape"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-6">
            <span className="py-2 px-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-wide uppercase text-sm">
              Our Harvest
            </span>
          </div>
          <h2 className="text-3xl md:text-6xl font-heading font-extrabold text-foreground mb-6 leading-tight">
            Premium <span className="text-primary relative inline-block">
              Selection
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explire our range of meticulously grown microgreens, each packed with distinct flavors and potent health benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-slate-100"
            >
              {/* Card Geometric Banner */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${product.accent} opacity-10 rounded-bl-[4rem] group-hover:scale-150 transition-transform duration-500 ease-out`} />

              {/* Image Section */}
              <div className="relative h-56 overflow-hidden p-4 pb-0">
                <div className="w-full h-full rounded-t-[1.5rem] overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10`} />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Floating Action Button */}
                  <div className="absolute bottom-4 right-4 z-20 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                    <div className={`w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center ${product.textColor}`}>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 pt-6 relative">
                {/* Decorative Line */}
                <div className={`w-12 h-1 rounded-full ${product.accent} mb-4`} />

                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <p className="text-slate-500 leading-relaxed mb-6 text-sm min-h-[40px]">
                  {product.benefit}
                </p>

                {/* Footer / Badge */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider ${product.textColor}`}>
                    <Star className="w-3 h-3 fill-current" />
                    Premium Grade
                  </div>
                  <div className="text-slate-300">
                    <Leaf className="w-4 h-4" />
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
