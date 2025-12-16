import { useEffect, useState, useRef } from "react";
import { Leaf } from "lucide-react";

const Partnership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const promises = [
    {
      number: "01",
      title: "Unmatched Freshness",
      description: "Harvested and delivered at peak nutrition, ensuring maximum flavor and health benefits in every batch.",
      gradient: "from-emerald-400 to-green-500",
      delay: 0,
    },
    {
      number: "02",
      title: "Consistent Quality",
      description: "Controlled, chemical-free growth environment guarantees the same premium quality with every order.",
      gradient: "from-green-500 to-teal-500",
      delay: 150,
    },
    {
      number: "03",
      title: "Dedicated Support",
      description: "Reliable service and flexible supply solutions tailored to your business requirements.",
      gradient: "from-teal-500 to-emerald-600",
      delay: 300,
    },
  ];

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
      className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Leaves */}
        <Leaf className="absolute top-20 left-10 w-16 h-16 text-primary/10 animate-float" style={{ animationDuration: '7s' }} />
        <Leaf className="absolute top-40 right-20 w-12 h-12 text-primary/8 animate-float" style={{ animationDuration: '9s', animationDelay: '1s' }} />
        <Leaf className="absolute bottom-32 left-1/4 w-14 h-14 text-primary/12 animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }} />
        <Leaf className="absolute bottom-20 right-1/3 w-10 h-10 text-primary/10 animate-float" style={{ animationDuration: '10s', animationDelay: '3s' }} />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
          </div>

          <h2 className="text-3xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            Our Partnership <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">Promise</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            When you partner with <span className="text-primary font-semibold">MikroGreenz Global</span>, you're choosing excellence, reliability, and sustainability.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
            <Leaf className="w-4 h-4 text-primary" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Promise Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {promises.map((promise, index) => (
            <div
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${promise.delay}ms`,
              }}
            >
              <div className="group relative h-full">
                {/* Card */}
                <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                  {/* Animated Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${promise.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Top Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${promise.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                  {/* Number Badge */}
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${promise.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <span className="text-3xl font-bold text-white">{promise.number}</span>
                    </div>

                    {/* Floating Leaf Decoration */}
                    <Leaf className="absolute -top-2 -right-2 w-6 h-6 text-primary/30 opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-300" style={{ animationDuration: '3s' }} />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {promise.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-base mb-6">
                      {promise.description}
                    </p>

                    {/* Bottom Decorative Element */}
                    <div className="flex items-center gap-2">
                      <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${promise.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                      <Leaf className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tl ${promise.gradient} opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-500`} />
                </div>

                {/* Outer Glow Effect */}
                <div className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${promise.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          className="mt-20 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '450ms',
          }}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 border border-primary/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-foreground font-semibold text-lg">Ready to Partner?</p>
                <p className="text-muted-foreground text-sm">Let's grow together with fresh possibilities</p>
              </div>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
