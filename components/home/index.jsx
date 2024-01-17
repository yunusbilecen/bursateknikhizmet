import React from 'react';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import CaseSlider from '../elements/case/case-slider';
import TestimonialSlider from '../elements/testimonial/testimonial-slider';
import AboutSection from './about-section';
import BlogSection from './blog-section';
import FactSection from './fact-section';
import HeroSection from './hero-section';
import Newsletter from './newsletter';
import ServiceSection from './service-section';
import SkillsSection from './skills-section';
import SpeedSection from './speed-section';


const index = () => {
  return (
    <>
    <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FactSection />
        <ServiceSection />
        <SkillsSection />
        <SpeedSection />
        <CaseSlider />
        <TestimonialSlider />
        <BlogSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default index;