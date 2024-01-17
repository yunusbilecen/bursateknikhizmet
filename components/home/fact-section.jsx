import React from 'react';
import Counter from '../common/counter';

const FactSection = ({ fact_bg_three = "/assets/img/bg/counter-bg.jpg" }) => {
    return (
        <section className="counter__area z-index-11 include__bg">
            <div className="container">
                <div className="counter__bg-area include__bg pt-65 pb-35" style={{ background: `url(${fact_bg_three})` }}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="counter__item text-center">
                                <div className="counter__item-number">
                                    <h2 className="counter"><Counter number="10" /></h2>
                                    <p>Bu alanda yıllık <br /> deneyim</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="counter__item text-center">
                                <div className="counter__item-number">
                                    <h2 className="counter"><Counter number="10000" /></h2>
                                    <p>Değiştirilen parça <br />sayısı</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="counter__item text-center">
                                <div className="counter__item-number">
                                    <h2 className="counter"><Counter number="1200" /></h2>
                                    <p>Gidilen müşteri <br />sayısı</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="counter__item text-center">
                                <div className="counter__item-number">
                                    <h2 className="counter"><Counter number="10" /></h2>
                                    <p>Gelişmiş takım <br />arkadaşlarımız</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FactSection;