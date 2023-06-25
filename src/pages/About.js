import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/TestimonialSlider";
import WhyUs from "../components/WhyUs";
import PageHeader from "./../components/PageHeader";

export default function About() {
  return (
    <>
      <PageHeader title="About us" />
      <AboutUs showButton="0" />
      <WhyUs />
      <TestimonialSlider />
      <Footer />
    </>
  );
}
