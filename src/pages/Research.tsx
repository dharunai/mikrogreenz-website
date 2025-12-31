
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Research = () => {
    const navigate = useNavigate();
    const [visibleSections, setVisibleSections] = useState<number[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = Number(entry.target.getAttribute('data-id'));
                    setVisibleSections(prev => [...new Set([...prev, id])]);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.research-section').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const categories = [
        {
            id: 1,
            title: "Review Articles & Nutritional Evidence",
            image: "/images/research/review_header.png",
            studies: [
                {
                    title: "Microgreens: A comprehensive review of bioactive molecules and health benefits",
                    year: "2023",
                    summary: "This comprehensive review summarizes the nutritional composition of microgreens, including vitamins, minerals, carotenoids, phenolic compounds, and glucosinolates. It also discusses antioxidant, anti-inflammatory, and chemoprotective effects supported by in vitro, animal, and limited human studies.",
                    citation: "Xiao, Z., Coduto, J. L., Wideman, S. C., Lester, G. E., & Luo, Y. (2023). Microgreens: A comprehensive review of bioactive molecules and health benefits. Molecules, 28(2), 867.",
                    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9864543/",
                    metrics: [
                        { label: "Study Type", value: "Review" },
                        { label: "Key Nutrients", value: "Vitamins C, E, K, Carotenoids" }
                    ]
                },
                {
                    title: "Microgreens as functional food for nutrition and dietary diversification",
                    year: "2024",
                    summary: "This article positions microgreens as functional foods due to their high nutrient density. It highlights their role in dietary diversification, micronutrient security, and sustainable food systems.",
                    citation: "Kyriacou, M. C., El-Nakhel, C., Pannico, A., Graziani, G., Soteriou, G. A., Giordano, M., Ritieni, A., & De Pascale, S. (2024). Microgreens as functional food for nutrition and dietary diversification. Plants, 14(4), 526.",
                    link: "https://www.mdpi.com/2223-7747/14/4/526",
                    metrics: [
                        { label: "Study Type", value: "Review" },
                        { label: "Focus", value: "Functional Food & Security" }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Laboratory Nutritional Profiling",
            image: "/images/research/lab_header.png",
            studies: [
                {
                    title: "Nutritional quality profiles of six microgreens",
                    year: "2025",
                    summary: "This laboratory-based study analyzes broccoli, radish, beet, pea, sunflower, and bean microgreens for vitamin C, minerals, sugars, organic acids, phenolic content, and antioxidant activity.",
                    citation: "Pinto, E., Almeida, A. A., Aguiar, A. A. R. M., & Ferreira, I. M. P. L. V. O. (2025). Nutritional quality profiles of six microgreens. Scientific Reports, 15, 85860.",
                    link: "https://pubmed.ncbi.nlm.nih.gov/39979322/",
                    metrics: [
                        { label: "Study Type", value: "Lab Analysis" },
                        { label: "Subjects", value: "6 Microgreen Varieties" }
                    ]
                },
                {
                    title: "Metabolite and mineral profiling of microgreens",
                    year: "2020",
                    summary: "This study applies metabolomics and ionomics to identify thousands of metabolites and quantify minerals in microgreens, demonstrating higher nutrient density compared to mature vegetables.",
                    citation: "Xiao, Z., Lester, G. E., Luo, Y., & Wang, Q. (2020). Metabolite and mineral profiling of microgreens. Current Developments in Nutrition, 4(2), nzz098.",
                    link: "https://academic.oup.com/cdn/article/6041711",
                    metrics: [
                        { label: "Study Type", value: "Lab Study" },
                        { label: "Findings", value: "Higher Nutrient Density" }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Animal & Preclinical Evidence",
            image: "/images/research/animal_header.png",
            studies: [
                {
                    title: "Microgreen study shows health benefits",
                    year: "2017",
                    summary: "This animal study reports that red cabbage microgreens reduced LDL cholesterol and improved metabolic biomarkers in mice fed a high-fat diet.",
                    citation: "U.S. Department of Agriculture, Agricultural Research Service. (2017). Microgreen study shows health benefits.",
                    link: "https://agresearchmag.ars.usda.gov/2017/jun/microgreen/",
                    metrics: [
                        { label: "Subject", value: "Mice (Animal Model)" },
                        { label: "Outcome", value: "Reduced LDL Cholesterol" }
                    ]
                },
                {
                    title: "Hypoglycemic effects of broccoli microgreens in diabetic mice",
                    year: "2021",
                    summary: "This preclinical study demonstrates improved blood glucose control and insulin sensitivity in diabetic mouse models supplemented with broccoli microgreens.",
                    citation: "Ma, L., Tian, Y., Zhang, J., & Li, X. (2021). Hypoglycemic effects of broccoli microgreens in diabetic mice. Journal of Functional Foods, 78, 104358.",
                    link: "https://www.semanticscholar.org/paper/Broccoli-microgreens-have-hypoglycemic-effect-by-in-Ma-Tian/2ef88cbecaf3867ff5496aeb3e4ef45409d4a2da",
                    metrics: [
                        { label: "Subject", value: "Diabetic Mice" },
                        { label: "Outcome", value: "Improved Insulin Sensitivity" }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Human Clinical Trials",
            image: "/images/research/human_header.png",
            studies: [
                {
                    title: "Feasibility and tolerability of daily microgreen consumption in healthy adults",
                    year: "2024",
                    summary: "This randomized crossover human trial assessed daily consumption of beet and cabbage microgreens and found them to be well tolerated, with indications of improved gastrointestinal comfort and dietary feasibility.",
                    citation: "Reed, E., Kopsell, D. A., Sams, C. E., & Lefevre, M. (2024). Feasibility and tolerability of daily microgreen consumption in healthy adults. Nutrients, 17(3), 467.",
                    link: "https://pubmed.ncbi.nlm.nih.gov/39940327/",
                    metrics: [
                        { label: "Study Type", value: "Human Clinical Trial" },
                        { label: "Outcome", value: "Safe & Well Tolerated" }
                    ]
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-24 pb-16 px-4 md:px-8">
                <div className="container mx-auto max-w-6xl">

                    {/* Header */}
                    <div className="mb-16 text-center animate-fade-in-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider mb-4 border border-primary/20">
                            Scientific Evidence
                        </span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-700">
                            Microgreens Research Library
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                            A curated compilation of peer-reviewed research, case studies, and clinical evidence documenting the nutritional power of microgreens.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-20">
                        {categories.map((category) => (
                            <section
                                key={category.id}
                                data-id={category.id}
                                className={`research-section scroll-mt-24 transition-all duration-1000 ease-out transform ${visibleSections.includes(category.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            >
                                <div className="relative mb-10 rounded-2xl overflow-hidden h-48 md:h-64 shadow-xl group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <h2 className="absolute bottom-8 left-8 text-3xl md:text-4xl font-bold text-white z-20 max-w-2xl text-shadow-lg leading-tight">
                                        {category.title}
                                    </h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {category.studies.map((study, sIdx) => (
                                        <Card key={sIdx} className="flex flex-col h-full hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group hover:-translate-y-1">
                                            <CardHeader className="pb-2">
                                                <div className="flex justify-between items-start gap-4">
                                                    <CardTitle className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                                                        {study.title}
                                                    </CardTitle>
                                                    <span className="flex-shrink-0 px-3 py-1 bg-secondary/80 text-secondary-foreground text-xs font-bold rounded-full backdrop-blur-md">
                                                        {study.year}
                                                    </span>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="flex-grow flex flex-col pt-4">
                                                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                                    {study.summary}
                                                </p>

                                                {/* Key Metrics / Tags */}
                                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                                    {study.metrics.map((metric, mIdx) => (
                                                        <div key={mIdx} className="bg-primary/5 border border-primary/10 px-3 py-1.5 rounded-md text-xs text-foreground/80 flex items-center gap-2">
                                                            <span className="font-semibold text-primary">{metric.label}:</span> {metric.value}
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="pt-4 border-t border-border/50 mt-4">
                                                    <p className="text-xs text-muted-foreground italic mb-4 line-clamp-1 opacity-70">
                                                        {study.citation}
                                                    </p>
                                                    <Button variant="outline" size="sm" className="w-full gap-2 group/btn hover:bg-primary hover:text-white transition-all duration-300" asChild>
                                                        <a href={study.link} target="_blank" rel="noopener noreferrer">
                                                            Read Full Study
                                                            <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                                        </a>
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Back to Home CTA */}
                    <div className="mt-24 text-center">
                        <Button onClick={() => navigate('/')} variant="ghost" className="gap-2 hover:bg-primary/10 px-8 py-6 rounded-full text-lg font-medium transition-all hover:scale-105">
                            <ArrowLeft className="w-5 h-5" />
                            Back to Home
                        </Button>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Research;
