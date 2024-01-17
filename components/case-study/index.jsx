import React from 'react';
import Footer from '../../layout/footers/footer';
import HeaderThree from '../../layout/headers/header-three';
import Breadcrumb from '../common/breadcrumb';
import CasesStudySection from './cases-study-section';

const index = () => {
    return (
        <>
            <HeaderThree />
            <main>
                <Breadcrumb breadTitle={'Çalışmalarımız'} breadSubtitle={'Sizden Kalanlar'} />
                <CasesStudySection />
            </main>
            <Footer footer_area="footer__area footer-bg pt-95" />
        </>
    );
};

export default index;