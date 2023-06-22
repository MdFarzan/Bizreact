import AboutUs from "../components/AboutUs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import TestimonialSlider from "../components/TestimonialSlider";
import WhyUs from "../components/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutUs />
      <Services />
      <WhyUs />
      <TestimonialSlider />
      <CTA />
      <Footer />
    </>
  );
}
