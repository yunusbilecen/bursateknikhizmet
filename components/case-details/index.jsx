import React from 'react';
import caseList from '../../data/case-data';
import Footer from '../../layout/footers/footer';
import HeaderThree from '../../layout/headers/header-three';
import CaseDetailsArea from './case-details-area';


const item = caseList[0]

const index = () => {
    return (
        <>
            <HeaderThree />
            <main>
                <CaseDetailsArea item={item} />
            </main>
            <Footer footer_area="footer__area footer-bg pt-95" />
        </>

    );
};

export default index;