import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

const HistorySectionThree = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);

    return (
        <section className="history__area pt-115 pb-60">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="section__title-wrapper text-center mb-60">
                        <div className="section__subtitle-3">
                            <p className="gradient__subtitle">History<span></span></p>
                        </div>
                        <div className="section__title-3">
                            <h2 className="mb-20">Company History</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="history__tab-wrapper d-flex justify-content-center mb-55">
                        <div className="history__tab">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab-3" role="tablist">
                                    <button className="nav-link active" id="history-tab-1-tab" data-bs-toggle="tab" data-bs-target="#history-tab-1" type="button" role="tab" aria-controls="history-tab-1" aria-selected="true">2000</button>
                                    <button className="nav-link" id="history-tab-2-tab" data-bs-toggle="tab" data-bs-target="#history-tab-2" type="button" role="tab" aria-controls="history-tab-2" aria-selected="false">2005</button>
                                    <button className="nav-link" id="history-tab-3-tab" data-bs-toggle="tab" data-bs-target="#history-tab-3" type="button" role="tab" aria-controls="history-tab-3" aria-selected="false">2012</button>
                                    <button className="nav-link" id="history-tab-4-tab" data-bs-toggle="tab" data-bs-target="#history-tab-4" type="button" role="tab" aria-controls="history-tab-4" aria-selected="false">2018</button>
                                    <button className="nav-link" id="history-tab-5-tab" data-bs-toggle="tab" data-bs-target="#history-tab-5" type="button" role="tab" aria-controls="history-tab-5" aria-selected="false">2022</button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="history-tab-1" role="tabpanel" aria-labelledby="history-tab-1-tab">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="history__thunb-wrapper mb-60 mr-30">
                                        <div className="history__thunb w-img">
                                            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                                            <img src="/assets/img/history/history-01.jpg" alt="image not found" />
                                            <div className="play__btn">
                                                <span className="popup-video" onClick={() => { openVideoModal(); }}><i className="fa-solid fa-play"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="history__content-wrapper mb-60">
                                        <div className="history__content">
                                            <h2>We are dedicated to serve <br /> all time for users.</h2>
                                            <p>From finance, retail, and travel, to social media, cybersecurity, adtech,
                                                and more, market leaders are leveraging web data to maintain their
                                                advantage. Discover how it can work for you. We have developed stream
                                                lined software delivery process, encompassing project planning, agile
                                                methodologies. Who the hell are you are..</p>
                                            <div className="history__btn">
                                                <Link href="/about" ><div className="it__btn-3">learn more<span><i className="fa-solid fa-angle-right"></i></span></div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="history-tab-2" role="tabpanel" aria-labelledby="history-tab-2-tab">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="history__thunb-wrapper mb-60 mr-30">
                                        <div className="history__thunb w-img">
                                            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                                            <img src="/assets/img/history/history-02.jpg" alt="image not found" />
                                            <div className="play__btn">
                                                <span className="popup-video" onClick={() => { openVideoModal(); }}><i className="fa-solid fa-play"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="history__content-wrapper mb-60">
                                        <div className="history__content">
                                            <h2>We are dedicated to serve <br /> all time for users.</h2>
                                            <p>From finance, retail, and travel, to social media, cybersecurity, adtech,
                                                and more, market leaders are leveraging web data to maintain their
                                                advantage. Discover how it can work for you. We have developed stream
                                                lined software delivery process, encompassing project planning, agile
                                                methodologies. Who the hell are you are..</p>
                                            <div className="history__btn">
                                                <Link href="/about" ><div className="it__btn-3">learn more<span><i className="fa-solid fa-angle-right"></i></span></div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="history-tab-3" role="tabpanel" aria-labelledby="history-tab-3-tab">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="history__thunb-wrapper mb-60 mr-30">
                                        <div className="history__thunb w-img">
                                            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                                            <img src="/assets/img/history/history-03.jpg" alt="image not found" />
                                            <div className="play__btn">
                                                <span className="popup-video" onClick={() => { openVideoModal(); }}><i className="fa-solid fa-play"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="history__content-wrapper mb-60">
                                        <div className="history__content">
                                            <h2>We are dedicated to serve <br /> all time for users.</h2>
                                            <p>From finance, retail, and travel, to social media, cybersecurity, adtech,
                                                and more, market leaders are leveraging web data to maintain their
                                                advantage. Discover how it can work for you. We have developed stream
                                                lined software delivery process, encompassing project planning, agile
                                                methodologies. Who the hell are you are..</p>
                                            <div className="history__btn">
                                                <Link href="/about" ><div className="it__btn-3">learn more<span><i className="fa-solid fa-angle-right"></i></span></div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="history-tab-4" role="tabpanel" aria-labelledby="history-tab-4-tab">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="history__thunb-wrapper mb-60 mr-30">
                                        <div className="history__thunb w-img">
                                            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                                            <img src="/assets/img/history/history-04.jpg" alt="image not found" />
                                            <div className="play__btn">
                                                <span className="popup-video" onClick={() => { openVideoModal(); }}><i className="fa-solid fa-play"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="history__content-wrapper mb-60">
                                        <div className="history__content">
                                            <h2>We are dedicated to serve <br /> all time for users.</h2>
                                            <p>From finance, retail, and travel, to social media, cybersecurity, adtech,
                                                and more, market leaders are leveraging web data to maintain their
                                                advantage. Discover how it can work for you. We have developed stream
                                                lined software delivery process, encompassing project planning, agile
                                                methodologies. Who the hell are you are..</p>
                                            <div className="history__btn">
                                                <Link href="/about" ><div className="it__btn-3">learn more<span><i className="fa-solid fa-angle-right"></i></span></div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="history-tab-5" role="tabpanel" aria-labelledby="history-tab-5-tab">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="history__thunb-wrapper mb-60 mr-30">
                                        <div className="history__thunb w-img">
                                            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                                            <img src="/assets/img/history/history-05.jpg" alt="image not found" />
                                            <div className="play__btn">
                                                <span className="popup-video" onClick={() => { openVideoModal(); }}><i className="fa-solid fa-play"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="history__content-wrapper mb-60">
                                        <div className="history__content">
                                            <h2>We are dedicated to serve <br /> all time for users.</h2>
                                            <p>From finance, retail, and travel, to social media, cybersecurity, adtech,
                                                and more, market leaders are leveraging web data to maintain their
                                                advantage. Discover how it can work for you. We have developed stream
                                                lined software delivery process, encompassing project planning, agile
                                                methodologies. Who the hell are you are..</p>
                                            <div className="history__btn">
                                                <Link href="/about" ><div className="it__btn-3">learn more<span><i className="fa-solid fa-angle-right"></i></span></div></Link>
                                            </div>
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

export default HistorySectionThree;