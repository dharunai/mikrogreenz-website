import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import WhatAreMicrogreens from "@/components/WhatAreMicrogreens";

import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustryApplications from "@/components/IndustryApplications";
import Feedback from "@/components/Feedback";
import Partnership from "@/components/Partnership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <WhatAreMicrogreens />

      <Products />
      <WhyChooseUs />
      <IndustryApplications />
      <Feedback />
      <Partnership />
      <FAQ />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
