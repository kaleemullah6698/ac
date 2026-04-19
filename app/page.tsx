import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ServiceAreas from "@/components/ServiceAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <ServiceAreas />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </>
  );
}