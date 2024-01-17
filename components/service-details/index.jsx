import React from 'react';
import ServicesList from '../../data/services-data';
import Footer from '../../layout/footers/footer';
import ServiceDetailsArea from './service-details-area';
import HeaderTwo from '../../layout/headers/header-two';

const item = ServicesList[0]

const index = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <ServiceDetailsArea item={item} />
            </main>
            <Footer footer_area="footer__area footer-bg pt-95" />
        </>
    );
};

export default index;