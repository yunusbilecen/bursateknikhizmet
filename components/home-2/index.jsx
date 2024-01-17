import React from 'react';
import FooterTwo from '../../layout/footers/footer-two';
import HeaderTwo from '../../layout/headers/header-two';
import TestimonialSliderTwo from '../elements/testimonial/testimonial-slider-two';
import AboutSectionTwo from './about-section-two';
import BlogSectionTwo from './blog-section-two';
import BrandSection from './brand-section';
import CaseSectionTwo from './case-section-two';
import FeatureSectionTwo from './feature-section-two';
import HeroSectionTwo from './hero-section-two';
import ServiceSectionThree from './service-section-three';
import SkillSectionTwo from './skill-section-two';
import ServiceSection from './service-section';
import Footer from '../../layout/footers/footer';

const index = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <HeroSectionTwo />
                <ServiceSectionThree />
                <BrandSection />
                <ServiceSection />
                <AboutSectionTwo />
                <FeatureSectionTwo />

                <CaseSectionTwo />
                <SkillSectionTwo />
                <TestimonialSliderTwo />
            </main>
            <Footer footer_area="footer__area footer-bg pt-95" />
        </>
    );
};

export default index;