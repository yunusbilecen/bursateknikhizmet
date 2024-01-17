import Link from 'next/link';
import React from 'react';
import CaseFaq from './case-faq';
import CaseImage from './case-image';
import CaseNav from './case-nav';
import CaseQoute from './case-qoute';

const CaseDetailsArea = ({ item }) => {
    return (
        <>
            <div className="breadcrumb__area include__bg" style={{ background: "url(/assets/img/bg/breadcrumb.jpg)" }}>
                <div className="container fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb__wrapper text-center">
                                <div className="breadcrumb__title">
                                    <h2>{item.caseTitle}</h2>
                                </div>
                                <div className="breadcrumb__menu">
                                    <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                        <ul className="trail-items">
                                            <li className="trail-item trail-begin"><span><Link href="/" ><span>BTH</span></Link></span></li>
                                            <li className="trail-item trail-end"><span>Case Details</span></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="case__details-area pt-10 pb-85">
                <div className="container">
                    <div className="case__details-wrapper wow fadeInUp" data-wow-delay=".3s">

                        <div className="case__meta-wrapper">
                            <div className="case__meta">
                                <div className="case__list">
                                    <div className="meta__item">
                                        <span>Kim:</span>
                                        <p>Yunus Emre Doğruyol</p>
                                    </div>
                                    <div className="meta__item">
                                        <span>Tarih:</span>
                                        <p>June 21, 2022</p>
                                    </div>
                                    <div className="meta__item">
                                        <span>Hizmet:</span>
                                        <p>{item.caseTitle}</p>
                                    </div>
                                    <div className="meta__item">
                                        <span>Category:</span>
                                        <p>Digital Marketing</p>
                                    </div>
                                </div>
                                <div className="case__meta-btn">
                                    <a className="it__btn-2" href="#"><span>İnceleme</span><i className="bdevs-btn-icon fas fa-angle-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <p className="mb-20">
                            {item.caseDesc}
                        </p>
                        <CaseImage />
                    </div>
                </div>
            </section>
        </>
    );
};

export default CaseDetailsArea;