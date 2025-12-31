import { useEffect, useState, useRef } from "react";
import partnershipImg from "@/assets/urban_farming.png";

const Partnership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const promises = [
    {
      title: "Unmatched Freshness",
      description: "Harvested and delivered at peak nutrition, ensuring maximum flavor and health benefits in every batch.",
      gradient: "from-emerald-400/20 to-green-500/20",
    },
    {
      title: "Consistent Quality",
      description: "Controlled, chemical-free growth environment guarantees the same premium quality with every order.",
      gradient: "from-green-500/20 to-teal-500/20",
    },
    {
      title: "Dedicated Support",
      description: "Reliable service and flexible supply solutions tailored to your business requirements.",
      gradient: "from-teal-500/20 to-emerald-600/20",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      className="py-32 bg-white relative overflow-hidden"
    >
      {/* Abstract background blobs - Smoother animation */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 transition-transform duration-[3s] ease-in-out" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50/60 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 transition-transform duration-[3s] ease-in-out" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Left Column - Image Visual */}
          <div
            className={`w-full lg:w-1/2 relative transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10 group bg-gray-100">
              {/* Image with smooth scale hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img
                src={partnershipImg}
                alt="Urban Farming Partnership"
                className="w-full h-[650px] object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              {/* Overlay Badge Removed */}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div
              className={`transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Our Partnership <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Promise</span>
              </h2>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-lg">
                Partner with <span className="font-semibold text-emerald-700">MikroGreenz Global</span> for a supply chain defined by excellence and consistency.
              </p>
            </div>

            {/* Feature List - No Icons, No Numbers */}
            <div className="space-y-6">
              {promises.map((promise, index) => (
                <div
                  key={index}
                  className={`relative pl-8 py-2 transition-all duration-700 ease-out group`}
                  style={{
                    transitionDelay: `${400 + (index * 150)}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(20px)'
                  }}
                >
                  {/* Decorative side line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b ${promise.gradient} group-hover:w-1.5 transition-all duration-500`} />

                  <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                    {promise.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              ))}
            </div>

            <div
              className={`pt-4 transition-all duration-1000 delay-[800ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-5 bg-slate-900 hover:bg-emerald-600 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-emerald-600/30 transition-all duration-500 transform hover:-translate-y-1"
              >
                Start Your Partnership
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partnership;
