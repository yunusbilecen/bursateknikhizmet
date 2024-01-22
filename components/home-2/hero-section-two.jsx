
import Link from 'next/link';
import React from 'react';

const HeroSectionTwo = () => {
    return (
        <div className="hero__area">
            <div className="hero__item hero__height-2 include__bg hero__overlay p-relative" style={{ background: "url(/assets/img/hero/hero-bg.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-8">
                            <div className="hero__content-2 p-relative z-index-11 mt-115">
                                <span>Teknik Çözüm Şirketmize Hoş Geldiniz</span>
                                <h2>Bursa&apos;nın En  İyi Teknik Hizmetleri</h2>
                                <div className="hero__btn-wrapper">
                                    <Link href="/hizmetler" ><div className="it__btn-2 radius">Sağladığımız Serviler<span><i className="fa-solid fa-arrow-right-long"></i></span></div></Link>
                                    <Link href="/hakkimizda" ><div className="it__btn-3 radius">Daha Çok Öğren<span><i className="fa-solid fa-arrow-right-long"></i></span></div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero__thumb">
                    <img src="/assets/img/hero/hero-thunb.png" alt="image not found" />
                    <img className="hero__thumb-shape" src="/assets/img/hero/hero-shape-1.png" alt="image not found" />
                </div>
            </div>
        </div>
    );
};

export default HeroSectionTwo;