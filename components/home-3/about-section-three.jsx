import Link from 'next/link';
import React from 'react';

const aboutService = [
    {
        id: 1,
        workImg: '/assets/img/service/features/icon-01.png',
        workTitle: 'Beyaz Eşya Servisi',
    },
    {
        id: 2,
        workImg: '/assets/img/service/features/icon-02.png',
        workTitle: 'Klima Servisi',
    },
    {
        id: 3,
        workImg: '/assets/img/service/features/icon-04.png',
        workTitle: 'Kombi ve Kalorifer Servisi',
    },
    {
        id: 4,
        workImg: '/assets/img/service/features/icon-03.png',
        workTitle: '24/7 İletişim',
    }
]

const AboutSectionThree = () => {
    return (
        <section className="about__area pt-120 pb-60">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-6">
                        <div className="company__service-main mb-30">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    {aboutService.slice(0, 2).map((item, num) => (
                                        <div className="company__service-wrapper mb-30" key={num}>
                                            <div className="company__service-item text-center">
                                                <div className="company__service-icon">
                                                    <img src={item.workImg} alt="image not found" />
                                                </div>
                                                <div className="company__service-title">
                                                    <h3><Link href="/service-details" ><div>{item.workTitle}</div></Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="skill__item-right mt-30">
                                        {aboutService.slice(2, 4).map((item, num) => (
                                            <div className="company__service-wrapper mb-30" key={num}>
                                                <div className="company__service-item text-center">
                                                    <div className="company__service-icon">
                                                        <img src={item.workImg} alt="image not found" />
                                                    </div>
                                                    <div className="company__service-title">
                                                        <h3><Link href="/service-details" ><div>{item.workTitle}</div></Link></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about__wrapper-3 mb-60">
                            <div className="section__title-wrapper">
                                <div className="section__subtitle-3">
                                    <p className="gradient__subtitle">Biz Neler Yapıyoruz?<span></span></p>
                                </div>
                                <div className="section__title-3">
                                    <h4 className="mb-20">Biz kendimizi buna adadık her zaman her daim hizmet..</h4>
                                </div>
                                <p>Bursa Teknik, 10 yıldır Bursa'da beyaz eşya tamiri, her markaya klima temizliği, kombi ve petek temizliği konularında uzmanlaşmış 7/24 hizmet veren bir firma..</p>
                            </div>
                            <div className="about__contact__item style-2">
                                <div className="about__contact-info d-flex align-items-center">
                                    <div className="about__contact-icon mr-15">
                                        <img src="/assets/img/about/icon/about-phn.png" alt="image nort found" />
                                    </div>
                                    <div className="about__contact-content">
                                        <span>Bizimle İletişime Geç</span>
                                        <h4><a href="tel:05325470421">0532 547 04 21</a></h4>
                                    </div>
                                </div>
                                <div className="about__contact-info d-flex align-items-center">
                                    <div className="about__contact-icon mr-15">
                                        <img src="/assets/img/about/icon/about-mail.png" alt="image nort found" />
                                    </div>
                                    <div className="about__contact-content">
                                        <span>Email Addres</span>
                                        <h6><a href="mailto:info@bursateknikhizmet.com">info@bursateknikhizmet.com</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="about__author-info">
                                <div className="about__author-content">
                                    <h4>Yunus Emre Doğruyol</h4>
                                    <span>Fikir Sahibi</span>
                                </div>
                                <div className="about__author-thumb">
                                    <img src="/assets/img/about/author/author.png" alt="image not found" />
                                </div>
                                <div className="about__author-signature">
                                    <img src="/assets/img/about/author/signature.png" alt="image not found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSectionThree;