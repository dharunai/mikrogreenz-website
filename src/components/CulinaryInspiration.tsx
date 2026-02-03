import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CulinaryInspiration = () => {
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

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-[#FAFCFA] to-white relative overflow-hidden">
            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm mb-4">
                        Culinary Inspiration
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                        Elevate Every <span className="text-primary">Meal</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        From simple salads to gourmet garnishes, our microgreens add a burst of flavor, nutrition, and visual appeal to any dish.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Text Content - No Icons, just rich formatting */}
                    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="prose prose-lg prose-emerald text-foreground/80">
                            <h3 className="text-2xl font-bold text-foreground">Why Chefs Love Them</h3>
                            <p>
                                Top culinary professionals use our microgreens not just for garnish, but as flavor components.
                                Radish microgreens add a peppery kick to tacos, while cilantro microgreens brighten up curries instantly.
                            </p>

                            <h3 className="text-2xl font-bold text-foreground pt-4">Easy Home Usage</h3>
                            <p>
                                You don't need to be a pro. Just snip a handful of sunflower shoots into your morning smoothie for a protein boost,
                                or toss beetroot microgreens into your sandwich for an earthy crunch.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-primary">
                            <h4 className="font-bold text-lg mb-2">Quick Recipe: Microgreen Pesto</h4>
                            <p className="text-sm text-muted-foreground">
                                Blend 2 cups of sunflower microgreens, garlic, nuts, olive oil, and parmesan. Use it on pasta or toast!
                            </p>
                        </div>
                    </div>

                    {/* Image Placeholder - Focused on food */}
                    <div className={`relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        {/* Placeholder for a real culinary image - using a colored div for now or an existing asset if available */}
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                            <span className="text-lg">[Delicious Food Image]</span>
                            {/* We will replace this with a real image URL if we find one, or use a gen_image later if needed. For now using a solid color to prevent broken image icon if no asset exists */}
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                            <p className="text-sm font-semibold uppercase tracking-wider mb-2 opacity-90">Featured Dish</p>
                            <h3 className="text-3xl font-bold mb-2">Avocado Toast Supreme</h3>
                            <p className="opacity-80">Topped with radish & mustard microgreens for the perfect spicy crunch.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CulinaryInspiration;
