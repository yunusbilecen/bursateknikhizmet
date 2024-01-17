import React from 'react';
import BrandSlider from '../elements/brand/brand-slider';

const BrandSection = () => {
    return (
        <div className="brand__area brand__overlay include__bg pt-405 pb-120" style={{ background: "url(/assets/img/bg/clients-bg.jpg)" }}>
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="brand__title text-center">
                        <span>Her Marka ve Model İçin Servis Hizmeti!</span>
                    </div>
                </div>
                <div className="row  wow fadeInUp" data-wow-delay=".3s">
                    <div className="brand-warapper text-center">
                        <BrandSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandSection;