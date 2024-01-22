import React from 'react';
import Footer from '../../layout/footers/footer';
import HeaderThree from '../../layout/headers/header-three';
import Breadcrumb from '../common/breadcrumb';
import ServiceSection from '../home/service-section';
import AboutSectionTwo from '../home-2/about-section-two';

const index = () => {
    return (
        <>
            <HeaderThree />
            <main>
                <Breadcrumb breadTitle={'Hizmetlerimiz'} breadSubtitle={'Sağladığımız Servisler'} />
                <AboutSectionTwo />
                <ServiceSection service_space="service__area-two section-bg pt-120 pb-90" />
            </main>
            <Footer footer_area="footer__area footer-bg pt-95" />
        </>
    );
};

export default index;