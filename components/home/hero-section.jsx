import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

const HeroSection = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);

    return (
        <div className="hero__area">
            <div className="hero__item hero__height hero__bg d-flex align-items-center p-relative" style={{ background: "url(/assets/img/hero/slider/hero-bg.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10">
                            <div className="hero__content">
                                <span>We Provide Outsourced</span>
                                <h2>IT Solution</h2>
                                <p>IT producers worldwide face similar challenges around animal welfare,
                                    farm profitability, product and work efficiency.</p>
                                <div className="hero__btn-wrapper">
                                    <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                                    <Link href="/about" ><div className="it__btn-2">Get Started <span><i className="fa-solid fa-angle-right"></i></span></div></Link>
                                    <div className="hero__btn-link">
                                        <ul>
                                            <li><span className="hero__video-btn popup-video" onClick={() => { openVideoModal(); }}><i className="fa-solid fa-play"></i></span></li>
                                            <li><span className="hero__video-intro popup-video" onClick={() => { openVideoModal(); }}>intro video</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;