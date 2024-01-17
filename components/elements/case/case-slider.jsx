import Link from 'next/link';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Scrollbar, Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

import caseList from '../../../data/case-data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
SwiperCore.use([Pagination, Scrollbar, Navigation, A11y, Autoplay]);
const CaseSlider = () => {
    useEffect(() => {
        // Initialize Swiper here if needed
        const swiper = new Swiper('.swiper-container', {
            // your swiper configuration options
        });
    }, []);
    return (
        <div className="portfolio__area fix pt-120 pb-120">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-sm-8">
                        <div className="section-title-wrapper mb-50">
                            <div className="section__title-one">
                                <span>{"//  Portfolio"}</span>
                                <h2>Case studies</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 text-end">
                        <div className="case__study-nav mt-10">
                            <button className="case-study-button-prev"><i className="fa-regular fa-angle-left"></i></button>
                            <button className="case-study-button-next"><i className="fa-regular fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="case-study-active swiper-container">
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Autoplay, Navigation, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplaydisableoninteraction={"false"}
                        loop={true}
                        observer={true}
                        observeParents={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true
                        }}
                        navigation={{
                            clickable: true,
                            nextEl: '.case-study-button-next',
                            prevEl: '.case-study-button-prev',
                        }}
                        breakpoints={{
                            500: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                            1400: {
                                slidesPerView: 4,
                            },
                            1600: {
                                slidesPerView: 6,
                            }
                        }}

                    >
                        {caseList.slice(0, 6).map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="swiper-slides case-study-item">
                                        <div className="case__study-thumb">
                                            <img src={item.caseImg} alt="image not found" />
                                            <div className="case__study-content">
                                                <h3><Link href={`/case-details/${item.id}`} ><div>{item.caseTitle}</div></Link></h3>
                                                <p>{item.caseDesc}</p>
                                                <Link href={`/case-details/${item.id}`} ><div className="case__study-btn">{item.caseBtn}</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default CaseSlider;