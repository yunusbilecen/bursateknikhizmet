
import React from 'react';

const TeamSkill = () => {
    return (
        <section>
            <div className="bd-skill__area pt-100 pb-40">
                <div className="container small-container">
                    <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-xl-5 col-lg-6">
                            <div className="bd-skill__progress mb-60">
                                <div className="bd__skill-title mb-40">
                                    <h3>Personal Skills</h3>
                                </div>
                                <div className="progress-skill-item fix">
                                    <h4>Design & Servicing</h4>
                                    <span className="progress-count">64%</span>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".3s" role="progressbar" data-width="64%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '64%', visibility: 'visible' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-skill-item fix">
                                    <h4>Support & Productivity</h4>
                                    <span className="progress-count">82%</span>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".3s" role="progressbar" data-width="82%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '82%', visibility: 'visible' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-skill-item fix">
                                    <h4>Troubleshooting</h4>
                                    <span className="progress-count">70%</span>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".3s" role="progressbar" data-width="70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%', visibility: 'visible' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="bd-skill__thumb w-img mb-60">
                                <img src="/assets/img/team/skill-01.jpg" alt="skill-thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSkill;