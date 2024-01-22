import Link from 'next/link';
import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import TeamAchivement from './team-achivement';
import TeamSkill from './team-skill';


const TeamDetailsArea = ({ item }) => {
    return (
        <>
            <Breadcrumb breadTitle={'Exclusive Team'} breadSubtitle={'Team Details'} />

            <section className="founder__area pt-120 pb-40">
                <div className="container">
                    <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-6">
                            <div className="team__founder-thumb w-img mb-60">
                                <img src={item.teamImg} alt="image not found" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="team__founder-main mb-60">
                                <div className="section__title-wrapper mb-35">
                                    <span className="founder-sub__title mb-5">{item.teamSubtitle}</span>
                                    <h2 className="founder-section__title  mb-25">{item.teamTitle}</h2>
                                    <p className="paragraph-2">The spectacular Harbour Central is a brand new development in London’s The Docklands, comprising a total of 642 private apartments divided across five residential buildings, along with a leisure complex.</p>
                                </div>
                                <div className="team__founder-info">
                                    <div className="team__founder-item">
                                        <div className="team__founder-item-icon">
                                            <i className="fa-solid fa-phone-flip"></i>
                                        </div>
                                        <div className="team__founder-text">
                                            <span className="title">Phone Number</span>
                                            <h4 className="contact"><a href="tel:+(908)786789786">+(908) 786  789 78 6</a></h4>
                                        </div>
                                    </div>
                                    <div className="team__founder-item">
                                        <div className="team__founder-item-icon">
                                            <i className="fa-solid fa-envelope-open"></i>
                                        </div>
                                        <div className="team__founder-text">
                                            <span className="title">Email Address</span>
                                            <h4 className="contact"><a href="mailto:info@webexample.com">info@webexample.com</a></h4>
                                        </div>
                                    </div>
                                    <div className="team__founder-item">
                                        <div className="team__founder-item-icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="team__founder-text">
                                            <span className="title">Office Location</span>
                                            <h4 className="contact">14/A, Kilix Home Tower, NYC</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="team__founder-btn">
                                    <Link href="/contact" ><div className="it__btn-2">Get  In Touch<span><i className="fa-solid fa-angle-right"></i></span></div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container small-container">
                <div className="hr-1"></div>
            </div>

            <TeamSkill />

            <div className="container">
                <div className="hr-1"></div>
            </div>

            <TeamAchivement />
        </>
    );
};

export default TeamDetailsArea;