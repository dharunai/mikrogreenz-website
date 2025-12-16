import { useRef, useState, useEffect } from "react";
import { Heart, Shield, Zap, Droplet, Clock, Leaf, Check } from "lucide-react";
import heroImg from "@/assets/hero-microgreens.jpg";

const HealthBenefits = () => {
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

    const benefits = [
        {
            icon: Zap,
            title: "Nutrient Powerhouse",
            subtitle: "Up to 40x more nutrients",
            description: "Packed with concentrated vitamins, minerals, and antioxidants that supercharge your health.",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "border-emerald-100"
        },
        {
            icon: Heart,
            title: "Heart Healthy",
            subtitle: "Rich in antioxidants",
            description: "Support cardiovascular health with natural compounds that promote optimal heart function.",
            color: "text-red-500",
            bg: "bg-red-50",
            border: "border-red-100"
        },
        {
            icon: Shield,
            title: "Immune Boost",
            subtitle: "Natural immunity enhancers",
            description: "Strengthen your body's defense system with powerful phytonutrients and vitamins.",
            color: "text-blue-500",
            bg: "bg-blue-50",
            border: "border-blue-100"
        },
    ];

    const usageSteps = [
        {
            icon: Droplet,
            text: "Add microgreens as a finishing touch to elevate texture",
            delay: "0s"
        },
        {
            icon: Clock,
            text: "Store in refrigerator and use within 5-7 days",
            delay: "0.2s"
        },
        {
            icon: Leaf,
            text: "Rinse gently before use and pat dry",
            delay: "0.4s"
        },
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-white to-green-50/50 relative overflow-hidden">
            {/* Animated Floating Leaves Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <Leaf className="absolute top-20 left-[10%] w-8 h-8 text-primary/10 animate-float" style={{ animationDuration: '8s' }} />
                <Leaf className="absolute bottom-40 right-[5%] w-12 h-12 text-primary/10 animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }} />
                <Leaf className="absolute top-1/2 left-[50%] w-6 h-6 text-primary/5 animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }} />
                <Leaf className="absolute bottom-10 left-[20%] w-10 h-10 text-primary/10 animate-float" style={{ animationDuration: '9s', animationDelay: '3s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                        Why <span className="text-primary relative">
                            Microgreens?
                            <svg className="absolute w-full h-2 bottom-0 left-0 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover the powerful nutritional advantages packed into these tiny greens.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                    {/* Left Column: Benefits Cards - Exact Match to Screenshot */}
                    <div className="space-y-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div
                                    key={index}
                                    className={`group relative p-6 rounded-2xl bg-white border ${benefit.border} shadow-sm hover:shadow-xl transition-all duration-500`}
                                    style={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
                                        transitionDelay: `${index * 150}ms`
                                    }}
                                >
                                    <div className="flex gap-5 items-start">
                                        <div className={`p-4 rounded-xl ${benefit.bg} ${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                                {benefit.title}
                                            </h3>
                                            <p className={`text-sm font-medium ${benefit.color} mb-2 opacity-80 uppercase tracking-wide`}>
                                                {benefit.subtitle}
                                            </p>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column: "How to Use" Feature Card */}
                    <div
                        className="sticky top-10"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
                            transition: 'all 0.8s ease-out 0.3s'
                        }}
                    >
                        <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border border-green-100 relative overflow-hidden group">
                            {/* Decorative Gradient Blob */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl group-hover:bg-secondary/50 transition-colors duration-700" />

                            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                                <span className="p-2 bg-primary/10 rounded-full text-primary">
                                    <Leaf className="w-5 h-5 fill-current" />
                                </span>
                                How to Use Microgreens?
                            </h3>

                            {/* Step List */}
                            <div className="space-y-6 relative z-10 mb-8">
                                {usageSteps.map((step, i) => {
                                    const StepIcon = step.icon;
                                    return (
                                        <div key={i} className="flex items-center gap-4 group/step">
                                            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover/step:bg-primary group-hover/step:text-white group-hover/step:border-primary transition-all duration-300 shadow-sm">
                                                <StepIcon className="w-5 h-5" />
                                            </div>
                                            <p className="text-slate-600 font-medium group-hover/step:text-primary transition-colors">
                                                {step.text}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Real Image Area */}
                            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                                <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-black/0 transition-colors duration-500" />
                                <img
                                    src={heroImg}
                                    alt="Fresh Microgreens Dish"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />

                                {/* Floating Label */}
                                <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50 flex items-center gap-2">
                                    <Check className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-bold text-slate-800">Fresh Harvest</span>
                                </div>

                                {/* Extra Leaf Animation over image */}
                                <Leaf className="absolute -top-4 -right-4 w-16 h-16 text-white/20 animate-float" style={{ animationDuration: '6s' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HealthBenefits;
