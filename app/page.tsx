import Hero from "@/components/sections/Hero/Hero";
import CashbackPopup from "@/components/sections/CashbackPopup/CashbackPopup";
import Features from "@/components/sections/Features/Features";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import Services from "@/components/sections/Services/Services";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import CustomerTestimonials from "@/components/sections/CustomerTestimonials/CustomerTestimonials";
import InsuranceVideos from "@/components/sections/InsuranceVideos/InsuranceVideos";

import FadeUp from "@/components/animations/FadeUp";

async function getBanners() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/banners`,
      {
        cache: "no-store",
      }
    );

    const result = await response.json();

    return result.data
      ?.filter((banner: any) => banner.isActive)
      ?.sort(
        (a: any, b: any) =>
          a.displayOrder - b.displayOrder
      );
  } catch {
    return [];
  }
}

export default async function Home() {
  const banners = await getBanners();

  return (
    <>
      <CashbackPopup />

      <Hero banners={banners} />

      <FadeUp>
        <Features />
      </FadeUp>

      <FadeUp delay={0.1}>
        <WhyChooseUs />
      </FadeUp>

      <FadeUp delay={0.15}>
        <Services />
      </FadeUp>

      <FadeUp delay={0.2}>
        <HowItWorks />
      </FadeUp>

      <FadeUp delay={0.25}>
        <InsuranceVideos />
      </FadeUp>

      <FadeUp delay={0.3}>
        <CustomerTestimonials />
      </FadeUp>

      <FadeUp delay={0.35}>
        <Testimonials />
      </FadeUp>
    </>
  );
}