import React from 'react';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

const SkillsSection = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);

    return (
        <section className="skill__area skill__bg pt-120 pb-60" style={{ background: "url(/assets/img/bg/skill-map.png)" }} data-wow-delay=".3s">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-5 col-lg-6">
                        <div className="skill-progress mb-60">
                            <div className="section__title-one s-3 mb-40">
                                <span>{"//  Some Facts"}</span>
                                <h2>The best customer experience</h2>
                            </div>
                            <div className="progress-skill-item fix">
                                <h4>Design & Servicing</h4>
                                <span className="progress-count">64%</span>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".3s" role="progressbar" data-width="64%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '64%',visibility: 'visible'}}>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-skill-item fix">
                                <h4>Support & Productivity</h4>
                                <span className="progress-count">82%</span>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".3s" role="progressbar" data-width="82%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '82%',visibility: 'visible'}}>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-skill-item fix">
                                <h4>Troubleshooting</h4>
                                <span className="progress-count">70%</span>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".3s" role="progressbar" data-width="70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '70%',visibility: 'visible'}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="skill__image-wrapper mb-60">
                            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                            <div className="skill__image pl-25 p-relative w-img">
                                <img src="/assets/img/skill/skills-img.png" alt="image not found"/>
                                <span className="skill__video-btn popup-video" onClick={() => { openVideoModal(); }}><i className="fa-solid fa-play"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;