import React from 'react';
import Footer from '../../layout/footers/footer';
import Breadcrumb from '../common/breadcrumb';
import ContactMap from './contact-map';
import ContactsSection from './contacts-section';
import HeaderTwo from '../../layout/headers/header-two';

const index = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb breadTitle={'Bize Ulaşın'} breadSubtitle={'İletişim'} />
                <ContactsSection />
                <ContactMap />
            </main>
            <Footer footer_area="footer__area footer-bg pt-95" />
        </>
    );
};

export default index;