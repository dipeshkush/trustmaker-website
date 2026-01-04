import CTA from '@/components/home/CTA';
import Hero from '@/components/home/Hero';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Projects from '@/components/home/Projects';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import FAQ from '@/components/home/FAQ';
import PropertyTypes from '@/components/home/PropertyTypes';


export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <PropertyTypes />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />

    </>
  );
}