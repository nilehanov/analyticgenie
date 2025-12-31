import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { UseCases } from "@/components/UseCases";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <UseCases />
      <Testimonials />
      <CTA />
    </>
  );
}

