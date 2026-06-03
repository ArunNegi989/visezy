import Hero from "@/components/sections/Hero/Hero";
import Features from "@/components/sections/Features/Features";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import Services from "@/components/sections/Services/Services";
import Contact from "@/components/sections/Contact/Contact";
import Testimonials from "@/components/sections/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <Services />
      <Contact />
    </>
  );
}