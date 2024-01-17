import React from 'react';
import Footer from '../../layout/footers/footer';
import HeaderThree from '../../layout/headers/header-three';
import FaqQues from './faq-ques';
import FaqTopic from './faq-topic';
import PageTitle from './page-title';

const index = () => {
    return (
        <>
            <HeaderThree />
            <main>
                <PageTitle />
                <FaqQues />
                <FaqTopic />
            </main>
            <Footer footer_area="footer__area footer-bg pt-95" />
        </>
    );
};

export default index;