
import React from 'react';

const TeamAchivement = () => {
    return (
        <section className="archivement__area pt-100 pb-60">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-6 col-lg-6">
                        <div className="archivement-wrapper mb-60">
                            <div className="archivement__thumb w-img">
                                <img src="/assets/img/team/achievement/achievement.jpg" alt="image not found" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="archivement__box mb-30">
                            <div className="archivement__title">
                                <h3>Great Archivements</h3>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliq
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in rep
                                    derit in voluptate velit esse cillum dolor.</p>
                            </div>
                            <div className="archivement__thumb-wrapper">
                                <div className="row gx-4">
                                    <div className="col-xxl-4 col-sm-4">
                                        <div className="archivement__thumb w-img mb-30">
                                            <img src="/assets/img/team/achievement/01.jpg" alt="image not found" />
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-4">
                                        <div className="archivement__thumb w-img mb-30">
                                            <img src="/assets/img/team/achievement/02.jpg" alt="image not found" />
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-4">
                                        <div className="archivement__thumb w-img mb-30">
                                            <img src="/assets/img/team/achievement/03.jpg" alt="image not found" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamAchivement;