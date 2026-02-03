import { useRef, useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const NutritionalGuide = () => {
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

    const nutrients = [
        { name: "Broccoli Microgreens", vitaminC: "High", vitaminK: "Very High", antioxidant: "Sulforaphane", benefit: "Anti-inflammatory & Cancer-fighting properties" },
        { name: "Radish Microgreens", vitaminC: "High", vitaminK: "Moderate", antioxidant: "Anthocyanins", benefit: "Digestive aid & immune support" },
        { name: "Sunflower Microgreens", vitaminC: "Moderate", vitaminK: "Low", antioxidant: "Vitamin E", benefit: "Skin health & rich in plant protein" },
        { name: "Pea Shoots", vitaminC: "High", vitaminK: "High", antioxidant: "Beta-carotene", benefit: "Eye health & blood sugar regulation" },
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">
                        Nutritional Data
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                        The Science of <span className="text-primary">Superfoods</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Microgreens aren't just small; they are nutrient-dense powerhouses. Compare the benefits below.
                    </p>
                </div>

                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[200px] text-lg font-bold text-primary">Microgreen Variety</TableHead>
                                        <TableHead className="text-lg font-semibold">Vitamin C</TableHead>
                                        <TableHead className="text-lg font-semibold">Vitamin K</TableHead>
                                        <TableHead className="text-lg font-semibold">Key Antioxidant</TableHead>
                                        <TableHead className="text-right text-lg font-semibold">Primary Benefit</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {nutrients.map((item) => (
                                        <TableRow key={item.name} className="hover:bg-white/50 transition-colors">
                                            <TableCell className="font-medium text-base">{item.name}</TableCell>
                                            <TableCell className="text-base text-muted-foreground">{item.vitaminC}</TableCell>
                                            <TableCell className="text-base text-muted-foreground">{item.vitaminK}</TableCell>
                                            <TableCell className="text-base text-muted-foreground">{item.antioxidant}</TableCell>
                                            <TableCell className="text-right text-base text-primary/80 font-medium">{item.benefit}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-muted-foreground text-sm">
                            <p>* Data compared to mature counterparts. Sources: USDA FoodData Central & Agricultural Research Studies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NutritionalGuide;
