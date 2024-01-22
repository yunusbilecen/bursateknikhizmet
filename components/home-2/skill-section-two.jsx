
import React from 'react';

const SkillSectionTwo = () => {
    return (
        <section className="skill__area include__bg grey-bg-2 pt-120 pb-60" style={{ background: "url(/assets/img/bg/skill-brush.jpg)" }}>
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-6 col-lg-12">
                        <div className="skill__item-wrapper mb-30">
                            <div className="row wow fadeInUp" data-wow-delay=".3s">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="skill__singel-item mb-30">
                                        <div className="skill__singel-content">
                                            <h2>01</h2>
                                            <h4>Uzman Ekip Üyesi</h4>
                                            <p>Kaliteli takım uyumu, en iyi çalışma süresi, en hızlı çıktı</p>
                                        </div>
                                        <div className="skill__item-arrow">
                                            <i className="fa-regular fa-arrow-up-long"></i>
                                        </div>
                                    </div>
                                    <div className="skill__singel-item mb-30">
                                        <div className="skill__singel-content">
                                            <h2>02</h2>
                                            <h4>1000+ Tamir Parçası Skalası</h4>
                                            <p>The quality data, best network uptime, fastest output</p>
                                        </div>
                                        <div className="skill__item-arrow">
                                            <i className="fa-regular fa-arrow-up-long"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="skill__item-right mt-30">
                                        <div className="skill__singel-item mb-30">
                                            <div className="skill__singel-content">
                                                <h2>03</h2>
                                                <h4>1200+ Mutlu Kullanıcı</h4>
                                                <p>The quality data, best network uptime, fastest output</p>
                                            </div>
                                            <div className="skill__item-arrow">
                                                <i className="fa-regular fa-arrow-up-long"></i>
                                            </div>
                                        </div>
                                        <div className="skill__singel-item mb-30">
                                            <div className="skill__singel-content">
                                                <h2>04</h2>
                                                <h4>10+ Takım Arkadaşı</h4>
                                                <p>The quality data, best network uptime, fastest output</p>
                                            </div>
                                            <div className="skill__item-arrow">
                                                <i className="fa-regular fa-arrow-up-long"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8">
                        <div className="skill__progress-wrapper mb-30">
                            <div className="section__title-two s-2 mb-40">
                                <span>Beceri seti</span>
                                <h2>En iyi müşteri deneyimi</h2>
                            </div>
                            <div className="skill__progress mb-55">
                                <div className="progress-skill-item fix">
                                    <h4>Tamir & Çözüm</h4>
                                    <span className="progress-count">64%</span>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".3s" role="progressbar" data-width="64%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '64%', visibility: 'visible' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-skill-item fix">
                                    <h4>Destek ve Üretkenlik</h4>
                                    <span className="progress-count">82%</span>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".3s" role="progressbar" data-width="82%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '82%', visibility: 'visible' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-skill-item fix">
                                    <h4>Sorun giderme</h4>
                                    <span className="progress-count">70%</span>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".3s" role="progressbar" data-width="70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%', visibility: 'visible' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill__info-content">
                                <div className="skill__info-icon">
                                    <img src="/assets/img/skill/icon/skill-1.png" alt="image not found" />
                                    <img src="/assets/img/skill/icon/skill-2.png" alt="image not found" />
                                    <img src="/assets/img/skill/icon/skill-3.png" alt="image not found" />
                                </div>
                                <div className="skill__info-title">
                                    <h4>Binlerce İnsan bizi tercih ediyor.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillSectionTwo;