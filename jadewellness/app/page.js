import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";
import Services from "@/components/Services";
import Cursor from "@/components/Cursor";
import WhyChooseUs from "@/components/WhyChooseUs";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import FloatingSocials from "@/components/FloatingSocials";
import Doctor from "@/components/Doctor";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SplitSection />
      <Services />
      <Cursor />
      <WhyChooseUs />
      <Doctor />
      <FooterCTA />
      <Footer /> 
      <FloatingActions />
      <FloatingSocials />
      
    </>
  );
}
