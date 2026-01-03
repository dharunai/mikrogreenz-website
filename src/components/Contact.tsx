import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Data Persistence (Supabase DB)
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([{ ...formData }]);

      if (dbError) throw dbError;

      // 2. Notification (Edge Function - Non-blocking for UI success)
      supabase.functions.invoke("contact", { body: formData })
        .catch(err => console.error("Email notification failed:", err));

      // 3. UI Success Feedback
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out! We will be in touch soon.",
      });

      setFormData({ name: "", email: "", phone: "", city: "", country: "", message: "" });
    } catch (err) {
      console.error("Submission Error:", err);
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden bg-white">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* SVG Curve Decoration */}
      <img
        src="data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%2310B981' fill-opacity='0.05' d='M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.2,32.7C60.2,43.9,49.5,53.4,37.6,60.8C25.7,68.2,12.7,73.5,-0.6,74.5C-13.9,75.5,-27.2,72.2,-38.7,65.2C-50.2,58.2,-59.9,47.5,-67.6,35.4C-75.3,23.3,-81,9.8,-79.8,-3.1C-78.6,-16,-70.5,-28.3,-60.7,-38.4C-50.9,-48.5,-39.4,-56.3,-27.3,-64.8C-15.2,-73.3,-2.5,-82.5,10.6,-82.5C23.7,-82.5,30.5,-83.6,44.7,-76.4Z' transform='translate(100 100)' /%3E%3C/svg%3E"
        className="absolute top-20 right-10 w-64 h-64 opacity-60 animate-pulse pointer-events-none"
        alt="background-shape"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="py-2 px-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-wide uppercase text-sm">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-6">
            Let's Grow <span className="text-primary">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our microgreens or want to start a partnership? We're here to help.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch min-h-[500px]">

            {/* Contact Form Section (Left) */}
            <div className={`h-full transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Card className="bg-white border text-card-foreground shadow-xl rounded-[2rem] overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                <CardContent className="p-8 md:p-8 flex-1 flex flex-col justify-center">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-foreground/80 ml-1">Your Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-primary/20 h-11 rounded-xl"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-foreground/80 ml-1">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-primary/20 h-11 rounded-xl"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-foreground/80 ml-1">Phone Number</label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 82203 33477"
                          className="bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-primary/20 h-11 rounded-xl"
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-foreground/80 ml-1">City</label>
                        <Input
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Chennai"
                          className="bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-primary/20 h-11 rounded-xl"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-foreground/80 ml-1">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        rows={3}
                        className="bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-primary/20 rounded-xl resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-hover text-white h-11 text-lg font-bold rounded-xl shadow-lg shadow-primary/25 transition-all hover:scale-[1.01]"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Full Height Map (Right) */}
            <div className={`h-full transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="h-full min-h-[400px] lg:min-h-full rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 relative group">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '100%' }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124409.77124314746!2d80.14902167448253!3d13.047537380126756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                  className="grayscale group-hover:grayscale-0 transition-all duration-700 w-full h-full object-cover"
                ></iframe>
                {/* Overlay on hover to indicate interactivity */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
