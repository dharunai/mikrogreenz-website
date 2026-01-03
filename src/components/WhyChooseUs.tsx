import { useEffect, useRef, useState } from "react";
import { Leaf, Recycle, UtensilsCrossed, Bot } from "lucide-react";
import centerImg from "@/assets/hero-microgreens.jpg"; // Using a lush image for the center

const WhyChooseUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const leftValues = [
        {
            icon: Leaf,
            title: "Microgreens Technology Pioneers",
            description: "Proprietors in advanced microgreens cultivation technology, leading innovation in the industry.",
            accent: "bg-green-100",
            iconColor: "text-green-600",
        },
        {
            icon: Bot,
            title: "AI-Powered Health Solutions",
            description: "Early adopters of AI technology featuring MIKO, our intelligent health bot for personalized nutrition guidance.",
            accent: "bg-blue-100",
            iconColor: "text-blue-600",
        },
    ];

    const rightValues = [
        {
            icon: Recycle,
            title: "Sustainable Growth",
            description: "Zero pesticides, minimal water, and eco-friendly vertical farming for a greener future.",
            accent: "bg-emerald-100",
            iconColor: "text-emerald-600",
        },
        {
            icon: UtensilsCrossed,
            title: "Culinary Excellence",
            description: "Elevate dishes with vibrant colors, textures, and intense fresh flavors.",
            accent: "bg-lime-100",
            iconColor: "text-lime-600",
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
            id="values"
            ref={sectionRef}
            className="py-24 relative overflow-hidden bg-white"
        >
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 translate-x-1/2 pointer-events-none" />

            {/* Geometric Shape */}
            <img
                src="data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%2310B981' fill-opacity='0.05' d='M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.2,32.7C60.2,43.9,49.5,53.4,37.6,60.8C25.7,68.2,12.7,73.5,-0.6,74.5C-13.9,75.5,-27.2,72.2,-38.7,65.2C-50.2,58.2,-59.9,47.5,-67.6,35.4C-75.3,23.3,-81,9.8,-79.8,-3.1C-78.6,-16,-70.5,-28.3,-60.7,-38.4C-50.9,-48.5,-39.4,-56.3,-27.3,-64.8C-15.2,-73.3,-2.5,-82.5,10.6,-82.5C23.7,-82.5,30.5,-83.6,44.7,-76.4Z' transform='translate(100 100)' /%3E%3C/svg%3E"
                className="absolute top-10 left-10 w-64 h-64 opacity-60 animate-pulse pointer-events-none"
                alt="background-shape"
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-block mb-6">
                        <span className="py-2 px-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-wide uppercase text-sm">
                            Our Promise
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
                        Why Choose <span className="text-primary">Mikrogreenz Global?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Experience the difference of truly sustainable, nutrient-dense microgreens.
                    </p>
                </div>

                <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

                    {/* Left Column */}
                    <div className="flex flex-col gap-10 lg:gap-16 lg:w-1/3 order-2 lg:order-1">
                        {leftValues.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className={`flex flex-col-reverse lg:flex-row items-center lg:items-center text-center lg:text-right gap-4 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                                    </div>
                                    <div className={`w-14 h-14 rounded-2xl ${value.accent} flex items-center justify-center flex-shrink-0 shadow-md`}>
                                        <Icon className={`w-7 h-7 ${value.iconColor}`} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Center Image "Hub" */}
                    <div className={`relative lg:w-1/3 order-1 lg:order-2 flex justify-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Pulsing Circles */}
                            <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-20 duration-1000" />
                            <div className="absolute -inset-4 bg-primary/5 rounded-full animate-pulse" />

                            {/* Main Image */}
                            <div className="w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden relative z-10">
                                <img
                                    src={centerImg}
                                    alt="Fresh Microgreens"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Leaf Badge */}
                            <div className="absolute -bottom-4 right-10 bg-white p-3 rounded-full shadow-lg z-20 animate-bounce">
                                <Leaf className="w-6 h-6 text-primary fill-current" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-10 lg:gap-16 lg:w-1/3 order-3">
                        {rightValues.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className={`flex flex-col lg:flex-row items-center lg:items-center text-center lg:text-left gap-4 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                                    style={{ transitionDelay: `${(index + 2) * 200}ms` }}
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${value.accent} flex items-center justify-center flex-shrink-0 shadow-md order-1`}>
                                        <Icon className={`w-7 h-7 ${value.iconColor}`} />
                                    </div>
                                    <div className="flex-1 order-2">
                                        <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
