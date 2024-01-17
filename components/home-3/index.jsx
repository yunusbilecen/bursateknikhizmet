import React from 'react';
import Footer from '../../layout/footers/footer';
import HeaderThree from '../../layout/headers/header-three';
import BrandSliderThree from '../elements/brand/brand-slider-three';
import TestimonialSliderThree from '../elements/testimonial/testimonial-slider-three';
import FactSection from '../home/fact-section';
import AboutSectionThree from './about-section-three';
import BlogSectionThree from './blog-section-three';
import CaseSectionThree from './case-section-three';
import CtaSectionThree from './cta-section-three';
import HeroSectionThree from './hero-section-three';
import HistorySectionThree from './history-section-three';
import ServiceSectionThree from './service-section-three';

const index = () => {
    return (
        <>
            <HeaderThree />
            <main>
                <HeroSectionThree />
                <AboutSectionThree />
                <FactSection fact_bg_three="/assets/img/bg/counter-bg-2.jpg" />
                <ServiceSectionThree />
                <HistorySectionThree />
                <CaseSectionThree />
                <BrandSliderThree />
                <CtaSectionThree />
                <TestimonialSliderThree />
                <BlogSectionThree />
            </main>
            <Footer footer_area="footer__area grey-bg include__bg pt-95" footer_bg="/assets/img/bg/footer-pattern.png" footer_style="footer__style-2" copyright_style="footer__copyright style-2" />
        </>
    );
};

export default index;