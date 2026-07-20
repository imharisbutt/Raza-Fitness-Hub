import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Pricing from "@/components/sections/Pricing";
import Trainers from "@/components/sections/Trainers";
import FacilityGallery from "@/components/sections/FacilityGallery";
import Testimonials from "@/components/sections/Testimonials";
import Transformations from "@/components/sections/Transformations";
import Faq from "@/components/sections/Faq";
import Branches from "@/components/sections/Branches";
import InstagramGallery from "@/components/sections/InstagramGallery";
import FinalCta from "@/components/sections/FinalCta";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Pricing />
      <Trainers />
      <FacilityGallery />
      <Testimonials />
      <Transformations />
      <Faq />
      <Branches />
      <InstagramGallery />
      <FinalCta />
      <Contact />
    </>
  );
}
