import Link from 'next/link';
import React from 'react';
import TeamList from '../../data/team-data';

const TeamsSection = () => {
    return (
        <section className="team__area pt-120 pb-90">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="section__title-wrapper text-center mb-50">
                        <div className="section__title-one">
                            <span>{"// Our Team"}</span>
                            <h2>Deneyimlilerimizle Tanışın  Takım üyesi</h2>
                        </div>
                    </div>
                </div>
                {TeamList &&
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        {TeamList.slice(0, 2).map((item, num) => (
                            <div className="col-xl-3 col-lg-4 col-md-6" key={num}>
                                <div className="singel__team-item mb-30">
                                    <div className="singel__team-thumb">
                                        <a><img src={item.teamImg} alt="image not found" /></a>
                                        <div className="singel__team-content">
                                            <h3><Link href={`/team-details/${item.id}`} ><div>{item.teamTitle}</div></Link></h3>
                                            <span>{item.teamSubtitle}</span>
                                            <div className="singel__team-social">
                                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </section >
    );
};

export default TeamsSection;