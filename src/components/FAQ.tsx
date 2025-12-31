import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

const FAQ = () => {
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
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-muted/30">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
                <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground/80 pb-2">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                        Everything you need to know about our fresh, sustainable microgreens.
                    </p>
                </div>

                <div className="mx-auto max-w-3xl space-y-4">
                    <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} index={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </AccordionPrimitive.Root>
                </div>
            </div>
        </section>
    );
};

// Custom Accordion Item with glassmorphism and no icons
const AccordionItem = ({ value, question, answer, index }: { value: string, question: string, answer: string, index: number }) => {
    // Stagger animation delay based on index
    const style = { animationDelay: `${index * 100}ms` } as React.CSSProperties;

    return (
        <AccordionPrimitive.Item
            value={value}
            className="group border border-border/50 rounded-xl bg-card/40 backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-card/60 transition-all duration-300 animate-in fade-in slide-in-from-bottom-3 fill-mode-backwards"
            style={style}
        >
            <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 px-6 font-semibold text-lg transition-all [&[data-state=open]]:text-primary text-left">
                    {question}
                    {/* No Icon Here as requested */}
                </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content className="overflow-hidden text-base text-muted-foreground transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="pb-6 px-6 pt-0 leading-relaxed">
                    {answer}
                </div>
            </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
    );
}

export default FAQ;
