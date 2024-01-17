import React from 'react';
import Footer from '../../layout/footers/footer';
import HeaderThree from '../../layout/headers/header-three';
import Breadcrumb from '../common/breadcrumb';
import TeamsSection from './teams-section';

const index = () => {
    return (
        <>
            <HeaderThree />
            <main>
                <Breadcrumb breadTitle={'Ekiple tanış'} breadSubtitle={'Bizim Ekip'} />
                <TeamsSection />
            </main>
            <Footer footer_area="footer__area footer-bg pt-95" />
        </>
    );
};

export default index;