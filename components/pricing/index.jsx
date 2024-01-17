
import React from 'react';
import Footer from '../../layout/footers/footer';
import HeaderThree from '../../layout/headers/header-three';
import Breadcrumb from '../common/breadcrumb';
import BrandSliderThree from '../elements/brand/brand-slider-three';
import CtaSectionThree from '../home-3/cta-section-three';
import PricingSection from './pricing-section';

const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <Breadcrumb breadTitle={'Pricing'} breadSubtitle={'Pricing'} />
                <PricingSection />
                <CtaSectionThree cta_space="cta__area section-bg include__bg pt-120 pb-60" />
                <BrandSliderThree />
            </main>
            <Footer footer_area="footer__area footer-bg pt-95" />
        </>
        
    );
};

export default index;