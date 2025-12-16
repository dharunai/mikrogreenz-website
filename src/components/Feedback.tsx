import { useEffect, useState, useRef } from "react";
import { Star, Leaf, Quote } from "lucide-react";

const Feedback = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Anbu Kumar",
      business: "Anbu Organics",
      city: "Coimbatore",
      feedback: "MikroGreenz Global has changed the way we stock our fresh section. Customers love the vibrant greens and freshness that lasts all week.",
      rating: 5,
    },
    {
      name: "Priya S.",
      business: "GreenCart Supermart",
      city: "Erode",
      feedback: "Their microgreens attract health-focused buyers daily. The packaging and consistency are excellent for our retail displays.",
      rating: 5,
    },
    {
      name: "Rajesh Iyer",
      business: "Farm2Bowl Café",
      city: "Tiruppur",
      feedback: "We use their kale and radish microgreens in every salad. They add both taste and visual appeal to our dishes.",
      rating: 5,
    },
    {
      name: "Lakshmi M.",
      business: "FreshLeaf Foods",
      city: "Madurai",
      feedback: "The delivery is always on time, and quality never drops. Our customers now ask specifically for MikroGreenz trays by name.",
      rating: 5,
    },
    {
      name: "Arun Nair",
      business: "Nilgiri Naturals",
      city: "Salem",
      feedback: "We've added MikroGreenz to our organic aisle and the feedback from shoppers has been amazing. It's our top-moving fresh item.",
      rating: 5,
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
      id="feedback"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Leaf className="absolute top-10 left-[10%] w-16 h-16 text-primary/10 animate-sway-breeze" style={{ animationDuration: '6s' }} />
        <Leaf className="absolute top-40 right-[15%] w-12 h-12 text-primary/10 animate-sway-breeze" style={{ animationDuration: '7s', animationDelay: '1s', transform: 'scaleX(-1)' }} />
        <Leaf className="absolute bottom-20 left-[20%] w-20 h-20 text-primary/5 animate-sway-breeze" style={{ animationDuration: '8s', animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px]" />
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 relative z-10 mb-12">
        <div
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full border border-primary/20 shadow-sm">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Trusted Partners</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight">
            Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Growth</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
            See how we're strengthening menus and retail shelves across South India with premium quality greens.
          </p>
        </div>
      </div>

      {/* Marquee Scroll Container */}
      <div
        className="relative w-full py-4"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDelay: '200ms',
        }}
      >
        {/* Gradient Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee */}
        <div className="testimonial-marquee-container">
          <div className="testimonial-marquee-content">
            {/* Triple set for smoother infinite loop on wide screens */}
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`${index}`} className="testimonial-card">
                <div className="group h-full p-6 rounded-xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                  {/* Header: Rating & Quote Icon */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-primary/20 group-hover:text-primary/40 transition-colors" />
                  </div>

                  {/* Feedback */}
                  <p className="text-sm leading-relaxed text-foreground/80 italic mb-4 line-clamp-4">
                    "{testimonial.feedback}"
                  </p>

                  {/* Footer: User Info */}
                  <div className="flex items-center gap-3 mt-auto pt-3 border-t border-border/50">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold text-xs ring-2 ring-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">
                        {testimonial.business}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 relative z-10 mt-12">
        <div
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '400ms',
          }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-105 group"
          >
            <span className="font-semibold">Partner With Us</span>
            <Leaf className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </a>
          <p className="mt-4 text-xs text-muted-foreground font-medium">
            Join 50+ satisfied businesses in Tamil Nadu
          </p>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .testimonial-marquee-container {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        
        .testimonial-marquee-content {
          display: flex;
          width: max-content;
          animation: testimonial-scroll 60s linear infinite;
        }
        
        .testimonial-card {
          flex: 0 0 auto;
          width: 280px;
          margin-right: 1.5rem;
        }

        @media (max-width: 640px) {
          .testimonial-card {
            width: 240px;
            margin-right: 1rem;
          }
           .testimonial-marquee-content {
            animation-duration: 45s;
          }
        }
        
        /* Smooth continuous scroll */
        @keyframes testimonial-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Move 1/3 since we tripled the list */
        }
        
        .testimonial-marquee-container:hover .testimonial-marquee-content {
          animation-play-state: paused;
        }

        /* New Premium Leaf Animation */
        @keyframes sway-breeze {
          0%, 100% { transform: rotate(-5deg) translateY(0); }
          50% { transform: rotate(5deg) translateY(-10px); }
        }
        
        .animate-sway-breeze {
          animation-name: sway-breeze;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
};

export default Feedback;
