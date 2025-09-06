import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/Sections/Features";
import DemoSection from "@/components/Sections/Demo";
import PricingSection from "@/components/Sections/Pricing";
import TestimonialsSection from "@/components/Sections/Testimonials";
import CTASection from "@/components/Sections/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <DemoSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
