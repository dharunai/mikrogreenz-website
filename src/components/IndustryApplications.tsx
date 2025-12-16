import { useEffect, useState, useRef } from "react";
import { X, ArrowRight } from "lucide-react";

// Import generated images
import fineDiningImg from "@/assets/industry-culinary.png";
import cafeSandwichImg from "@/assets/cafe_sandwich_microgreens.png";
import hotelCateringImg from "@/assets/hotel_catering_buffet.png";
import healthSmoothieImg from "@/assets/industry-health.jpg";
import fitnessMealImg from "@/assets/fitness_nutrition_meal.png";
import healthMealPrepImg from "@/assets/health_meal_prep.png";
import skincareImg from "@/assets/industry-skincare.png";
import pharmaceuticalImg from "@/assets/pharmaceutical_nutraceutical.png";
import restaurantImg from "@/assets/restaurant-hospitality.png";
import retailImg from "@/assets/industry-retail.jpg";
import healthWellnessImg from "@/assets/health-wellness.png";
import cafeQuickImg from "@/assets/cafe-quick-service.png";
import mealKitsImg from "@/assets/industry-processing-meal-kits.jpg";
import powdersImg from "@/assets/industry-processing-powders.png";
import snacksImg from "@/assets/industry-processing-snacks.jpg";
import educationLabImg from "@/assets/industry-education-lab.jpg";
import educationFarmingImg from "@/assets/industry-education-farming.jpg";
import urbanFarmingImg from "@/assets/urban_farming.png";

const IndustryApplications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      title: "Food & Beverage",
      subtitle: "Culinary Excellence",
      images: [fineDiningImg, restaurantImg, hotelCateringImg],
      applications: [
        { name: "Fine Dining", description: "Sophisticated garnishing for pastas, risottos, and steaks." },
        { name: "Cafés & Bakeries", description: "Fresh crunch for sandwiches, toasts, and wraps." },
        { name: "Hotels & Catering", description: "Elevating presentation for buffets and events." },
      ]
    },
    {
      title: "Health & Wellness",
      subtitle: "Functional Superfoods",
      images: [healthWellnessImg, fitnessMealImg, healthSmoothieImg],
      applications: [
        { name: "Weight Management", description: "Low-calorie, nutrient-dense additions to diet plans." },
        { name: "Sports Nutrition", description: "Natural energy and recovery for athletes." },
        { name: "Healthy Meals", description: "Premium value for detox bowls and salads." },
      ]
    },
    {
      title: "Beauty & Personal Care",
      subtitle: "Natural Cosmetics",
      images: [skincareImg, healthWellnessImg, fitnessMealImg],
      applications: [
        { name: "Natural Serums", description: "Anti-aging extracts from broccoli and kale." },
        { name: "Anti-Pollution", description: "Neutralizing free radicals in skincare." },
        { name: "Clean Beauty", description: "Sustainable ingredients for conscious consumers." },
      ]
    },
    {
      title: "Pharma & Nutraceuticals",
      subtitle: "Medical Innovation",
      images: [pharmaceuticalImg, healthMealPrepImg, healthSmoothieImg],
      applications: [
        { name: "Supplements", description: "Dehydrated powders in capsules and tablets." },
        { name: "Herbal Medicine", description: "Nutrient boosters in traditional healing." },
        { name: "Functional Foods", description: "Fortified mixes for next-gen wellness." },
      ]
    },
    {
      title: "Retail & E-Commerce",
      subtitle: "Premium Produce",
      images: [retailImg, cafeSandwichImg, healthMealPrepImg],
      applications: [
        { name: "Gourmet Stores", description: "Upscale packaging for home cooking." },
        { name: "Supermarkets", description: "Ready-to-use fresh packs for daily use." },
        { name: "Subscriptions", description: "Weekly delivery boxes for guaranteed freshness." },
      ]
    },
    {
      title: "Urban Farming",
      subtitle: "Agri-Tech Revolution",
      images: [urbanFarmingImg, healthMealPrepImg, fitnessMealImg],
      applications: [
        { name: "Hydroponic Testing", description: "Rapid optimization of nutrient mixes." },
        { name: "Vertical Farms", description: "High yield crops for small urban spaces." },
        { name: "Education", description: "Teaching tools for modern agriculture." },
      ]
    },
    {
      title: "Food Processing",
      subtitle: "Packaged Innovation",
      images: [mealKitsImg, powdersImg, snacksImg],
      applications: [
        { name: "Meal Kits", description: "Fresh components for ready-to-cook boxes." },
        { name: "Dry Extracts", description: "Nutrient powders for instant drinks." },
        { name: "Healthy Snacks", description: "Functional ingredients for energy bars." },
      ]
    },
    {
      title: "Education & Research",
      subtitle: "Scientific Studies",
      images: [educationLabImg, educationFarmingImg, educationLabImg],
      applications: [
        { name: "Biology Studies", description: "Observing rapid plant growth cycles." },
        { name: "Sustainable Ag", description: "Experimenting with climate resilience." },
      ]
    },
    {
      title: "Home & Lifestyle",
      subtitle: "Consumer Wellness",
      images: [cafeQuickImg, healthMealPrepImg, healthSmoothieImg],
      applications: [
        { name: "DIY Grow Kits", description: "Empowering home cultivation." },
        { name: "Corporate Gifts", description: "Eco-friendly wellness gifting." },
        { name: "Daily Wellness", description: "Accessible nutrition for families." },
      ]
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedIndustry !== null ? 'hidden' : 'unset';
  }, [selectedIndustry]);

  return (
    <section id="industries" ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-wide uppercase text-xs">
              9 Major Industries
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
            Industry <span className="text-primary">Applications</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            From gourmet dining to pharmaceutical breakthroughs, discover how microgreens are transforming diverse sectors.
          </p>
        </div>

        {/* Clean Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group cursor-pointer rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedIndustry(index)}
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={industry.images[0]}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-primary-foreground/80 text-sm font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0 delay-100">
                    {industry.subtitle}
                  </p>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {industry.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                    <span>Explore Applications</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedIndustry !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedIndustry(null)}
        >
          <div
            className="bg-white rounded-[2rem] max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative animate-scale-up flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close */}
            <button
              onClick={() => setSelectedIndustry(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left: Image (Cover on mobile, Side on desktop) */}
            <div className="md:w-2/5 h-48 md:h-auto relative">
              <img
                src={industries[selectedIndustry].images[0]}
                alt={industries[selectedIndustry].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>

            {/* Right: Content */}
            <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto">
              <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
                {industries[selectedIndustry].subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                {industries[selectedIndustry].title}
              </h2>

              <div className="grid gap-6">
                {industries[selectedIndustry].applications.map((app, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                    <h4 className="text-lg font-bold text-foreground mb-2">{app.name}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{app.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IndustryApplications;
