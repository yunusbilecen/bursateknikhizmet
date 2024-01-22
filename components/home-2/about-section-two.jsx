
import React from 'react';

const AboutSectionTwo = () => {
    return (
        <section className="about_area-wraper-one pt-120 pb-60">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <div className="about__contact-wrapper mb-60">
                            <div className="section__title-two s-2 mb-35">
                                <span>Hakkımızda</span>
                                <h2 className="mb-20">Her zaman hizmet etmeye adadık.</h2>
                                <p>Beyaz eşya tamirciliği ve klima tamirciliği sektöründe, müşteri memnuniyetini sağlamak ve hizmet kalitesini artırmak, işletmenizin başarısını belirleyen kritik unsurlardan biridir. Biz, bu alanda sağladığımız profesyonel hizmetlerle müşterilerimizin güvenini kazanmayı ve sadık bir müşteri kitlesi oluşturmayı hedefliyoruz..</p>
                            </div>
                            <div className="about__contact__item mb-60">
                                <div className="about__contact-info d-flex align-items-center">
                                    <div className="about__contact-icon mr-15">
                                        <img src="/assets/img/about/icon/about-phn.png" alt="image nort found" />
                                    </div>
                                    <div className="about__contact-content">
                                        <span>İletişme Geç</span>
                                        <h5><a href="tel:05325470421">0532 547 04 21</a></h5>
                                    </div>
                                </div>
                                <div className="about__contact-info d-flex align-items-center">
                                    <div className="about__contact-icon mr-15">
                                        <img src="/assets/img/about/icon/about-mail.png" alt="image nort found" />
                                    </div>
                                    <div className="about__contact-content">
                                        <span>Email Adres</span>
                                        <h6><a href="mailto:info@bursateknikhizmet.com">info@bursateknikhizmet.com</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                        <div className="about__features-wrapper mb-60 p-relative">
                            <div className="about__features-shape">
                                <img src="/assets/img/about/about-shape-01.png" alt="shape not found" />
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="about__features-thumb pt-50 mb-30 w-img">
                                        <img src="/assets/img/about/about-02.jpg" alt="image not found" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="about__features-thumb w-img">
                                        <img src="/assets/img/about/about-03.jpg" alt="image not found" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSectionTwo;