
import Link from 'next/link';
import React from 'react';

const ContactInfoAction = () => {
    return (
        <section className="cta__area">
            <div className="container">
                <div className="contact__cta-wrapper section-bg">
                    <div className="row align-items-center">
                        <div className="col-xl-9">
                            <div className="contact__cta-content mb-30">
                                <div className="cta-contact__info">
                                    <div className="cta__number-icon">
                                        <img src="/assets/img/about/icon/about-phn.png" alt="" />
                                    </div>
                                    <div className="cta__number-text">
                                        <span>Get a Free Consultation</span>
                                        <h3><a href="tel:05325470421">0532 547 04 21</a></h3>
                                    </div>
                                </div>
                                <div className="cta__description">
                                    <p>Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="cta-btn text-xl-end text-start mb-30">
                                <Link href="/contact" ><div className="it__btn-2">Discover more<span><i className="fa-solid fa-angle-right"></i></span></div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfoAction;