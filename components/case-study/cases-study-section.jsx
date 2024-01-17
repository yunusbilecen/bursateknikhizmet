import Link from 'next/link';
import React from 'react';
import caseList from '../../data/case-data';

const CasesStudySection = () => {
    return (
        <>
            <div className="case__filter-area pt-105 pb-90">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-12">
                            <div className="text-center p-relative mb-45">
                                <nav>
                                    <div className="nav case__filter-button" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Tüm Çalışmalar</button>
                                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Beyaz Eşya</button>
                                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Klima</button>
                                        <button className="nav-link" id="nav-contact-tabA" data-bs-toggle="tab" data-bs-target="#nav-contactA" type="button" role="tab" aria-controls="nav-contactA" aria-selected="false">Kombi ve Kalorifer</button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {caseList &&
                        <div className="tab-content case-grid-items" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="row grid case-grid-items wow fadeInUp" data-wow-delay=".3s">
                                    {caseList.slice(0, 4).map((item, num) => (
                                        <div className="col-xl-4 col-lg-6 col-md-6 grid-item c-2 c-4" key={num}>
                                            <div className="case__filter-wrapper filter__hover-style mb-30">
                                                <div className="case__filter-tumb w-img">
                                                    <img src={item.caseImg} alt="image not found" />
                                                </div>
                                                <div className="case__filter-content">
                                                    <Link href={`/case-details/${item.id}`} ><span className="case__filter-overlay"></span></Link>
                                                    <h3><Link href={`/case-details/${item.id}`} ><span>{item.caseTitle}</span></Link></h3>
                                                    <p>{item.caseDesc.slice(0, 50)}</p>
                                                    <Link href={`/case-details/${item.id}`} ><span className="case__filter-btn"><i className="fa-regular fa-arrow-right-long"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="row grid case-grid-items wow fadeInUp" data-wow-delay=".3s">
                                    {caseList.slice(0, 4).map((item, num) => (
                                        <div className="col-xl-4 col-lg-6 col-md-6 grid-item c-2 c-4" key={num}>
                                            <div className="case__filter-wrapper filter__hover-style mb-30">
                                                <div className="case__filter-tumb w-img">
                                                    <img src={item.caseImg} alt="image not found" />
                                                </div>
                                                <div className="case__filter-content">
                                                    <Link href={`/case-details/${item.id}`} ><span className="case__filter-overlay"></span></Link>
                                                    <h3><Link href={`/case-details/${item.id}`} ><span>{item.caseTitle}</span></Link></h3>
                                                    <p>{item.caseDesc.slice(0, 50)}</p>
                                                    <Link href={`/case-details/${item.id}`} ><span className="case__filter-btn"><i className="fa-regular fa-arrow-right-long"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <div className="row grid case-grid-items wow fadeInUp" data-wow-delay=".3s">
                                    {caseList.slice(0, 4).map((item, num) => (
                                        <div className="col-xl-4 col-lg-6 col-md-6 grid-item c-2 c-4" key={num}>
                                            <div className="case__filter-wrapper filter__hover-style mb-30">
                                                <div className="case__filter-tumb w-img">
                                                    <img src={item.caseImg} alt="image not found" />
                                                </div>
                                                <div className="case__filter-content">
                                                    <Link href={`/case-details/${item.id}`} ><span className="case__filter-overlay"></span></Link>
                                                    <h3><Link href={`/case-details/${item.id}`} ><span>{item.caseTitle}</span></Link></h3>
                                                    <p>{item.caseDesc.slice(0, 50)}</p>
                                                    <Link href={`/case-details/${item.id}`} ><span className="case__filter-btn"><i className="fa-regular fa-arrow-right-long"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-contactA" role="tabpanel" aria-labelledby="nav-contact-tabA">
                                <div className="row grid case-grid-items wow fadeInUp" data-wow-delay=".3s">
                                    {caseList.slice(0, 4).map((item, num) => (
                                        <div className="col-xl-4 col-lg-6 col-md-6 grid-item c-2 c-4" key={num}>
                                            <div className="case__filter-wrapper filter__hover-style mb-30">
                                                <div className="case__filter-tumb w-img">
                                                    <img src={item.caseImg} alt="image not found" />
                                                </div>
                                                <div className="case__filter-content">
                                                    <Link href={`/case-details/${item.id}`} ><span className="case__filter-overlay"></span></Link>
                                                    <h3><Link href={`/case-details/${item.id}`} ><span>{item.caseTitle}</span></Link></h3>
                                                    <p>{item.caseDesc.slice(0, 50)}</p>
                                                    <Link href={`/case-details/${item.id}`} ><span className="case__filter-btn"><i className="fa-regular fa-arrow-right-long"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default CasesStudySection;