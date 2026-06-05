import Hero from "@/components/sections/Hero/Hero";
import Features from "@/components/sections/Features/Features";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import Services from "@/components/sections/Services/Services";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import Testimonials from "@/components/sections/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <Testimonials />
    </>
  );
}