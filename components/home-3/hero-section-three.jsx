import React from 'react';

const HeroSectionThree = () => {
    return (
        <>
            <div className="hero__area p-relative pt-120">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-xl-8 col-lg-12">
                            <div className="hero__content-3 mb-60">
                                <span>Digital solution </span>
                                <h2>for intregrations</h2>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-8">
                            <div className="hero__contact-info text-end">
                                <form>
                                    <div className="hero__contact-wrapper">
                                        <div className="contact__input mb-15">
                                            <input type="text" placeholder="Full name"/>
                                                <i className="fa-solid fa-user"></i>
                                        </div>
                                        <div className="contact__input mb-15">
                                            <input type="text" placeholder="Email"/>
                                                <i className="fa-solid fa-envelope-open"></i>
                                        </div>
                                        <div className="contact__input mb-15">
                                            <textarea name="text" placeholder="Message"></textarea>
                                            <i className="fa-solid fa-pen"></i>
                                        </div>
                                        <button className="contact__btn">Get a quote</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero__banner banner__height include__bg wow fadeInUp" data-wow-delay=".3s" style={{ background: "url(/assets/img/hero/banner.jpg)" }}></div>
        </>
    );
};

export default HeroSectionThree;