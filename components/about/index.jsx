import React from 'react';
import Footer from '../../layout/footers/footer';
import Breadcrumb from '../common/breadcrumb';
import ServiceSectionThree from '../home-3/service-section-three';
import AboutSection from '../home/about-section';
import FactSection from '../home/fact-section';
import HeaderTwo from '../../layout/headers/header-two';

const index = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb breadTitle={'Hakkımızda'} breadSubtitle={'Biz Kimiz ?'} />
                <AboutSection />
                <FactSection fact_bg_three="/assets/img/bg/counter-bg-2.jpg" />
                <ServiceSectionThree />
            </main>
            <Footer footer_area="footer__area footer-bg pt-95" />
        </>
    );
};

export default index;