import React from 'react';

const SpeedSection = () => {
    return (
        <section className="speed-area include__bg grey-bg pt-120 pb-90" style={{ background: "url(/assets/img/bg/speed-pattern.png)" }}>
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="section__title-one text-center mb-50">
                        <span>{"//  Services  //"}</span>
                        <h2>What we do here</h2>
                    </div>
                </div>
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-12">
                        <div className="speed__input-wrapper" >
                            <form>
                                <div className="speed__input-item">
                                    <div className="speed__input mb-30">
                                        <input type="email" placeholder="Email address"/>
                                            <i className="fa-solid fa-envelope-open"></i>
                                    </div>
                                    <div className="speed__input mb-30">
                                        <input type="email" placeholder="Website name"/>
                                            <i className="fa-brands fa-firefox-browser"></i>
                                    </div>
                                    <div className="cta-btn mb-30">
                                        <button type='button' className="it__btn-2"><span>test speed</span><i className="bdevs-btn-icon fas fa-angle-right" ></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpeedSection;