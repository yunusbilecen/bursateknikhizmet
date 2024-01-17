import Link from 'next/link';
import React from 'react';
import Footer from '../../layout/footers/footer';
import HeaderThree from '../../layout/headers/header-three';

const index = () => {
    return (
        <>
            <HeaderThree />
            <main>
                <div className="error__page-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                            <div className="col-xl-6 col-lg-8">
                                <div className="error__wrapper text-center">
                                    <div className="error__content">
                                        <h2>404</h2>
                                        <h3 className="mb-20">No Result Found !</h3>
                                        <p>You are looking for something that not found in search result. <br />Please try to search again.</p>
                                        <div className="error__btn">
                                            <Link href="/" ><div className="it__btn-2">Back to home<span><i className="fa-solid fa-angle-right"></i></span></div></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer footer_area="footer__area footer-bg pt-95" />
        </>
    );
};

export default index;