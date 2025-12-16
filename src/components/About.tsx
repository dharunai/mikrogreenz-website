import { useEffect, useState, useRef } from "react";
import { Target, Eye, Award, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const pillars = [
    {
      icon: Eye,
      title: "Vision",
      description: "To become the leading provider of sustainable, nutrient-rich microgreens that empower communities to embrace healthier lifestyles.",
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      bgPattern: "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
    },
    {
      icon: Target,
      title: "Mission",
      description: "To revolutionize urban farming by delivering fresh, chemical-free microgreens while promoting environmental sustainability and food security.",
      gradient: "from-green-400 via-emerald-500 to-green-600",
      bgPattern: "radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
    },
    {
      icon: Award,
      title: "Goal",
      description: "To make nutrient-dense greens accessible to everyone through innovative farming practices and reliable partnerships.",
      gradient: "from-teal-400 via-emerald-500 to-green-600",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)",
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
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Floating Leaf Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Leaves */}
        <Leaf className="absolute top-20 left-10 w-12 h-12 text-primary/10 animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }} />
        <Leaf className="absolute top-40 right-20 w-8 h-8 text-primary/8 animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }} />
        <Leaf className="absolute bottom-32 left-1/4 w-10 h-10 text-primary/12 animate-float" style={{ animationDelay: '1s', animationDuration: '7s' }} />
        <Leaf className="absolute bottom-20 right-1/3 w-6 h-6 text-primary/10 animate-float" style={{ animationDelay: '3s', animationDuration: '9s' }} />

        {/* Subtle gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div
          className="max-w-4xl mx-auto text-center mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Who We Are</span>
          </div>

          <h2 className="text-3xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">MikroGreenz Global</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We are a <span className="text-primary font-semibold">new-age agri-brand</span> redefining healthy living through sustainable, locally grown microgreens.
            Our goal is to make <span className="text-primary font-semibold">nutrient-rich greens accessible</span> for everyone while promoting eco-conscious urban farming.
          </p>

          {/* Decorative Line with Leaf */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
            <Leaf className="w-4 h-4 text-primary" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <Card className="group relative border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-card/80 backdrop-blur-sm overflow-hidden h-full">
                  {/* Animated Gradient Background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: pillar.bgPattern }}
                  />

                  {/* Top Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                  <CardContent className="p-10 text-center relative z-10">
                    {/* Icon Container with Floating Leaves */}
                    <div className="relative inline-block mb-8">
                      {/* Floating Leaf Decorations */}
                      <Leaf className="absolute -top-2 -left-2 w-4 h-4 text-primary/30 group-hover:animate-float" style={{ animationDuration: '3s' }} />
                      <Leaf className="absolute -bottom-2 -right-2 w-3 h-3 text-primary/40 group-hover:animate-float" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />

                      {/* Outer Glow Ring */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${pillar.gradient} opacity-20 blur-xl group-hover:blur-2xl transition-all duration-500`} />

                      {/* Icon Circle */}
                      <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${pillar.gradient} p-[2px] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                          <Icon className="w-9 h-9 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Small Leaf Accent */}
                      <Leaf className="absolute -top-1 -right-1 w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-5 group-hover:text-primary transition-colors duration-300">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {pillar.description}
                    </p>

                    {/* Bottom Decorative Element with Leaves */}
                    <div className="mt-8 flex justify-center items-center gap-2">
                      <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${pillar.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                      <Leaf className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${pillar.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-150`} />
                    </div>
                  </CardContent>

                  {/* Corner Accent */}
                  <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${pillar.gradient} opacity-0 group-hover:opacity-10 rounded-tl-full transition-opacity duration-500`} />
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
