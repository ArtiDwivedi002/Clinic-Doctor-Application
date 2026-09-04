import Navbar from "@/src/components/Navbar/Navbar";
import Hero from "@/src/components/Hero/Hero";
import Partners from "@/src/components/Partners/Partners";
import Services from "@/src/components/Service/Service";
import About from "@/src/components/About/About";
import CTA from "@/src/components/CTA/CTA";
import Testimonials from "@/src/components/Testimonial/Testimonial";
import Footer from "@/src/components/Footer/Footer";
import Facility from "@/src/components/Facility/Facility";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F9FBFC]">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <About />
      <Facility/>
      <CTA />
      <Testimonials />
      <Footer />
    </main>
  );
}