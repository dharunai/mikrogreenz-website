import { useEffect, useState, useRef } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { Leaf, ChevronDown } from "lucide-react";

const FAQ = () => {
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

    const faqs = [
        {
            question: "What are microgreens and why are they good for health?",
            answer: "Microgreens are young vegetable greens that are approximately 1-3 inches tall. They fall somewhere between a sprout and a baby green. They are packed with flavor and nutrition, often containing higher nutrient levels than more mature vegetable greens. They are great sources of vitamins, minerals, and antioxidants.",
        },
        {
            question: "Are microgreens suitable for Indian food and cooking?",
            answer: "Absolutely! Microgreens can be a great addition to Indian cuisine. They can be used as a garnish for curries, dals, and salads, added to raitas, or even used in sandwiches and wraps. Their concentrated flavors can complement the spices in Indian dishes beautifully.",
        },
        {
            question: "Do you deliver fresh microgreens locally?",
            answer: "Yes, we offer local delivery to ensure you get the freshest microgreens possible. Please check our delivery area on our website or contact us directly to see if we deliver to your specific location.",
        },
        {
            question: "Are your microgreens organic and chemical-free?",
            answer: "We prioritize safe and sustainable growing practices. Our microgreens are grown without the use of harmful chemicals or pesticides, ensuring a pure and healthy product for you and your family.",
        },
        {
            question: "How long do microgreens stay fresh?",
            answer: "When stored properly in the refrigerator, most microgreens will stay fresh for about 10-14 days. It's best to keep them in an airtight container with a paper towel to absorb excess moisture.",
        },
        {
            question: "Can microgreens help with immunity and digestion?",
            answer: "Yes, many microgreens are rich in Vitamin C, Vitamin E, and beta-carotene, which are known to support the immune system. They also contain dietary fiber and enzymes that can aid in digestion.",
        },
        {
            question: "How do I store microgreens?",
            answer: "Keep them refrigerated in their original container or an airtight container. Placing a dry paper towel inside the container helps absorb moisture and extends their shelf life significantly.",
        },
        {
            question: "Can I grow my own microgreens?",
            answer: "Yes, growing microgreens at home is quite popular and relatively easy! We offer starter kits and seeds if you're interested in trying your hand at urban farming.",
        },
        {
            question: "What varieties of microgreens do you offer?",
            answer: "We offer a wide variety of microgreens including sunflower, pea shoots, radish, mustard, broccoli, kale, and mixed salad blends. Our selection varies by season and availability.",
        },
        {
            question: "Are microgreens safe for children?",
            answer: "Generally, yes. Microgreens are a healthy addition to a child's diet. However, as with any raw fresh produce, it's good practice to wash them before eating. If your child has specific allergies or dietary restrictions, consulting a pediatrician is always recommended.",
        },
    ];

    return (
        <section
            id="faq"
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-secondary/5 to-background"
            itemScope
            itemType="https://schema.org/FAQPage"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-[5%] w-72 h-72 bg-primary/3 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-[5%] w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />

                {/* Floating Leaves */}
                <Leaf className="absolute top-24 right-[10%] w-10 h-10 text-primary/10 animate-float" style={{ animationDelay: '0s', animationDuration: '7s' }} />
                <Leaf className="absolute bottom-32 left-[8%] w-8 h-8 text-primary/8 animate-float" style={{ animationDelay: '2s', animationDuration: '9s' }} />
                <Leaf className="absolute top-1/2 right-[15%] w-6 h-6 text-primary/5 animate-float" style={{ animationDelay: '1s', animationDuration: '8s' }} />
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div
                    className="text-center mb-16 space-y-4"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                        <Leaf className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Common Inquiries</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-foreground pb-2">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Find everything you need to know about our fresh, sustainable microgreens and how they can elevate your lifestyle.
                    </p>
                </div>

                <div className="mx-auto max-w-3xl">
                    <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                index={index}
                                isVisible={isVisible}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </AccordionPrimitive.Root>
                </div>
            </div>
        </section>
    );
};

// Custom Accordion Item with glassmorphism and subtle indicators
const AccordionItem = ({ value, question, answer, index, isVisible }: { value: string, question: string, answer: string, index: number, isVisible: boolean }) => {
    return (
        <AccordionPrimitive.Item
            value={value}
            className="group border border-border/50 rounded-2xl bg-card/60 backdrop-blur-md shadow-sm hover:shadow-xl hover:bg-card/80 transition-all duration-500 overflow-hidden"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${index * 100}ms`
            }}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
        >
            <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-5 px-6 md:py-6 md:px-8 font-bold text-base md:text-lg transition-all [&[data-state=open]]:text-primary text-left">
                    <span itemProp="name" className="relative pr-4">
                        {question}
                        {/* Animated Underline */}
                        <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-primary/30 group-hover:w-full transition-all duration-300" />
                    </span>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary" />
                </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content
                className="overflow-hidden text-sm md:text-base text-muted-foreground transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
            >
                <div className="pb-6 px-6 md:pb-8 md:px-8 pt-0 leading-relaxed border-t border-primary/5 pt-4" itemProp="text">
                    {answer}
                </div>
            </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
    );
}

export default FAQ;
