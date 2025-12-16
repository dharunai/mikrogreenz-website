
import { useRef, useState, useEffect } from "react";
import { Leaf, Linkedin, Mail, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
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

    const team = [
        {
            name: "Akshaya Varunkarthik",
            role: "CEO / Founder",
            description: "House Maker & Biotechnologist. Passionate about sustainable farming and bringing nutrient-rich superfoods to every home.",
            image: "/images/team/akshaya-ceo.jpg",
            socials: {
                linkedin: "#",
                twitter: "#",
                email: "#"
            },
            leafDelay: "0s"
        },
        {
            name: "Ashwathi",
            role: "COO / Business Development",
            description: "House Maker & Biotechnologist. Dedicated to expanding our green footprint and ensuring excellence in every harvest.",
            image: "/images/team/ashwathi-coo.jpg",
            socials: {
                linkedin: "#",
                twitter: "#",
                email: "#"
            },
            leafDelay: "1s"
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-gradient-to-b from-secondary/5 via-background to-secondary/5 relative overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                <Leaf className="absolute top-40 left-[10%] w-12 h-12 text-primary/10 animate-float" style={{ animationDelay: '0s' }} />
                <Leaf className="absolute bottom-40 right-[10%] w-10 h-10 text-primary/10 animate-float" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div
                    className="text-center mb-16 max-w-2xl mx-auto"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.6s ease-out'
                    }}
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                        <Leaf className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">The Minds Behind</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                        Meet Our <span className="text-primary">Team</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Driven by passion, science, and a commitment to a healthier future.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="relative group"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                                transition: 'all 0.8s ease-out',
                                transitionDelay: `${index * 200}ms`
                            }}
                        >
                            <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm group-hover:-translate-y-2">
                                <CardContent className="p-0">
                                    <div className="relative overflow-hidden aspect-[4/3]">
                                        {/* Image */}
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                        {/* Social Icons Overlay - appearing on hover */}
                                        <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                            {Object.entries(member.socials).map(([key, link], i) => (
                                                <a
                                                    key={key}
                                                    href={link}
                                                    className="bg-white/10 hover:bg-primary backdrop-blur-md p-2 rounded-full text-white transition-all duration-300 transform hover:scale-110"
                                                    style={{ transitionDelay: `${i * 100}ms` }}
                                                >
                                                    {key === 'linkedin' && <Linkedin className="w-4 h-4" />}
                                                    {key === 'twitter' && <Twitter className="w-4 h-4" />}
                                                    {key === 'email' && <Mail className="w-4 h-4" />}
                                                </a>
                                            ))}
                                        </div>

                                        {/* Check if we can animate leaves over the image */}
                                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/40 transition-colors duration-500" />
                                    </div>

                                    <div className="p-8 relative">
                                        {/* Floating Leaf Decoration */}
                                        <div className="absolute -top-6 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500 z-10">
                                            <Leaf className="w-6 h-6 text-white" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                                            {member.name}
                                        </h3>
                                        <p className="text-primary font-medium mb-4">{member.role}</p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {member.description}
                                        </p>

                                        {/* Animated bottom border */}
                                        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary-light w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
