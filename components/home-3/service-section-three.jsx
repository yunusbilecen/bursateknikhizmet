import React from 'react';
import ServiceSliderThree from '../elements/service/service-slider-three';

const ServiceSectionThree = () => {
    return (
        <section className="services__area services__sapcing section-bg fix pt-235 pb-120">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="section__title-wrapper text-center mb-60">
                        <div className="section__subtitle-3">
                            <p className="gradient__subtitle">Hizmetler<span></span></p>
                        </div>
                        <div className="section__title-3 s-2">
                            <h2>Bursa Teknik Hizmetler</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="services__slider-wrapper">
                        <ServiceSliderThree />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSectionThree;