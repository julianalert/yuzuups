import DefaultLayout from "./(default)/layout";

export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import LargeTestimonial from "@/components/large-testimonial";
import ApproachComparison from "@/components/approach-comparison";
import FeaturesDelivery from "@/components/features-delivery";
import FeaturesPlanet from "@/components/features-planet";
import Features from "@/components/features-home";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Cta from "@/components/cta";
import FaqSection from "@/components/faq-section";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <LargeTestimonial />
      <ApproachComparison />
      <FeaturesDelivery />
      <TestimonialsCarousel />
      <Cta />
      {/*<FaqSection />*/}
    </DefaultLayout>
  );
}
