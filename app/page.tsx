import DefaultLayout from "@/components/default-layout";

export const metadata = {
  title: "Yuzuu - Get High-Quality Leads Delivered Daily",
  description: "Stop wasting time on cold outreach. Get verified, high-intent prospects delivered to your inbox every morning. Start with 50 free leads and grow your revenue predictably.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import LargeTestimonial from "@/components/large-testimonial";
import ApproachComparison from "@/components/approach-comparison";
import FeaturesDelivery from "@/components/features-delivery";
import FeaturesPlanet from "@/components/features-planet";
import Features from "@/components/features-home";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import PricingTablesHome from "@/components/pricing-tables-home";
import WallOfLove from "@/components/wall-of-love";
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
      <PricingTablesHome />
     {/*<WallOfLove />
      <FaqSection />*/}
      <Cta />
    </DefaultLayout>
  );
}