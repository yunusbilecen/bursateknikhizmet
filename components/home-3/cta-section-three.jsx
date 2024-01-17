import React from 'react';

const CtaSectionThree = ({cta_space}) => {
    return (
        <section className={`${cta_space ? cta_space : 'cta__area section-bg include__bg pt-120 pb-200'}`} style={{ background: "url(/assets/img/bg/cta-pattern.png)" }}>
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xxl-9 col-xl-8 col-lg-7 col-md-12">
                        <div className="cta__title-wrapper mb-60">
                            <div className="section__title-wrapper">
                                <div className="section__subtitle-3">
                                    <p className="gradient__subtitle">Call To Action<span></span></p>
                                </div>
                                <div className="section__title-3 s-2">
                                    <h2 className="mb-20">Awesome technology we used for work</h2>
                                </div>
                            </div>
                            <p className="cta__paragraph">From finance, retail, and travel, to social media, cybersecurity, adtech, and more,
                                market leaders are leveraging web data to maintain their advantage. Discover how
                                it can work for you. We have developed stream lined software delivery process,
                                encompassing project planning, agile methodologies.</p>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-8">
                        <div className="cta__contact-info mb-60">
                            <div className="cta__contact-inner">
                                <div className="cta__contact-icon">
                                    <figure>
                                        <i className="fa-solid fa-phone-flip"></i>
                                    </figure>
                                </div>
                                <div className="cta__contact-content">
                                    <span>Call Us Now</span>
                                    <h3><a href="tel:00211232000">00 211 232 000</a></h3>
                                </div>
                            </div>
                            <div className="cta__button">
                                <a className="contact__btn s-2" href="#">get in touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSectionThree;