import React from 'react';
import Footer from '../../layout/footers/footer';
import HeaderThree from '../../layout/headers/header-three';
import Breadcrumb from '../common/breadcrumb';
import AboutSectionThree from '../home-3/about-section-three';
import BlogSection from '../home/blog-section';
import ServiceSection from '../home/service-section';

const index = () => {
    return (
        <>
            <HeaderThree />
            <main>
                <Breadcrumb breadTitle={'Hizmetlerimiz'} breadSubtitle={'Sağladığımız Servisler'} />
                <AboutSectionThree />
                <ServiceSection service_space="service__area-two section-bg pt-120 pb-90" />
            </main>
            <Footer footer_area="footer__area footer-bg pt-95" />
        </>
    );
};

export default index;