import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Scrollbar, Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';
import caseList from '../../data/case-data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
SwiperCore.use([Pagination, Scrollbar, Navigation, A11y, Autoplay]);
const CaseSectionThree = () => {

    return (
        <section className="portfolio__areas portfolio__bg fix pt-115 pb-115">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-4 col-lg-4">
                        <div className="section__title-wrapper mb-50">
                            <div className="section__subtitle-3">
                                <p className="gradient__subtitle">Portfolio<span></span></p>
                            </div>
                            <div className="section__title-3">
                                <h2 className="mb-20">Our Portfolio</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="portfolio__tab-wrapper mb-60">
                            <div className="porfolio__tab">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab-2" role="tablist">
                                        <button className="nav-link active" id="portfolio-1-tab" data-bs-toggle="tab" data-bs-target="#portfolio-1" type="button" role="tab" aria-controls="portfolio-1" aria-selected="true">All Work</button>
                                        <button className="nav-link" id="portfolio-2-tab" data-bs-toggle="tab" data-bs-target="#portfolio-2" type="button" role="tab" aria-controls="portfolio-2" aria-selected="false">Cloud Service</button>
                                        <button className="nav-link" id="portfolio-3-tab" data-bs-toggle="tab" data-bs-target="#portfolio-3" type="button" role="tab" aria-controls="portfolio-3" aria-selected="false">Cyber Security</button>
                                        <button className="nav-link" id="portfolio-4-tab" data-bs-toggle="tab" data-bs-target="#portfolio-4" type="button" role="tab" aria-controls="portfolio-4" aria-selected="false">IT Security</button>
                                    </div>
                                </nav>
                            </div>
                            <div className="portfolio__navigation-wrapper">
                                <div className="portfolio__navigation style-2">
                                    <button className="portfolio__button-prev-2"><i className="fa-regular fa-arrow-left-long"></i></button>
                                    <button className="portfolio__button-next-2"><i className="fa-regular fa-arrow-right-long"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="tab-content" id="nav-tabContent-2">
                        <div className="tab-pane fade show active" id="portfolio-1" role="tabpanel" aria-labelledby="portfolio-1-tab">
                            <div className="row">
                                <div className="col-12">
                                    <div className="portfolio__slider-actives swiper-container">
                                        <div className="swiper-wrappers">
                                            <Swiper
                                                modules={[Autoplay, Pagination, Scrollbar, Navigation, A11y]}
                                                spaceBetween={50}
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
                                                    nextEl: '.portfolio__button-next-2',
                                                    prevEl: '.portfolio__button-prev-2',
                                                }}
                                                pagination={{
                                                    clickable: true,
                                                    el: '.portfolio__pagination',
                                                }}
                                                breakpoints={{
                                                    500: {
                                                        slidesPerView: 1,
                                                    },
                                                    768: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 30
                                                    },
                                                    992: {
                                                        slidesPerView: 2,
                                                    },
                                                    1200: {
                                                        slidesPerView: 3,
                                                    }
                                                }}
                                            >
                                                {caseList.slice(18, 22).map((item, index) => {
                                                    return (
                                                        <SwiperSlide key={index}>
                                                            <div className="swiper-slides">
                                                                <div className="portfolio__slider-item mb-85">
                                                                    <div className="portfolio__slider-thumb">
                                                                        <Link href={`/case-details/${item.id}`} ><div><img src={item.caseImg} alt="image not found" /></div></Link>
                                                                        <div className="portfolio__slider-action">
                                                                            <div className="portfolio__slider-content">
                                                                                <span>{item.caseTag}</span>
                                                                                <h3><Link href={`/case-details/${item.id}`} ><div>{item.caseTitle}</div></Link></h3>
                                                                            </div>
                                                                            <div className="portfolio__button">
                                                                                <Link href={`/case-details/${item.id}`} ><div><i className="fa-regular fa-arrow-right-long"></i></div></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })}
                                            </Swiper>
                                        </div>
                                        <div className="portfolio__pagination text-center"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="portfolio-2" role="tabpanel" aria-labelledby="portfolio-2-tab">
                            <div className="row">
                                <div className="col-12">
                                    <div className="portfolio__slider-actives swiper-container">
                                        <div className="swiper-wrappers">
                                            <Swiper
                                                modules={[Autoplay, Pagination, Scrollbar, Navigation, A11y]}
                                                spaceBetween={50}
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
                                                    nextEl: '.portfolio__button-next-2',
                                                    prevEl: '.portfolio__button-prev-2',
                                                }}
                                                pagination={{
                                                    clickable: true,
                                                    el: '.portfolio__paginationA',
                                                }}
                                                breakpoints={{
                                                    500: {
                                                        slidesPerView: 1,
                                                    },
                                                    768: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 30
                                                    },
                                                    992: {
                                                        slidesPerView: 2,
                                                    },
                                                    1200: {
                                                        slidesPerView: 3,
                                                    }
                                                }}
                                            >
                                                {caseList.slice(21, 25).map((item, index) => {
                                                    return (
                                                        <SwiperSlide key={index}>
                                                            <div className="swiper-slides">
                                                                <div className="portfolio__slider-item mb-85">
                                                                    <div className="portfolio__slider-thumb">
                                                                        <Link href={`/case-details/${item.id}`} ><div><img src={item.caseImg} alt="image not found" /></div></Link>
                                                                        <div className="portfolio__slider-action">
                                                                            <div className="portfolio__slider-content">
                                                                                <span>{item.caseTag}</span>
                                                                                <h3><Link href={`/case-details/${item.id}`} ><div>{item.caseTitle}</div></Link></h3>
                                                                            </div>
                                                                            <div className="portfolio__button">
                                                                                <Link href={`/case-details/${item.id}`} ><div><i className="fa-regular fa-arrow-right-long"></i></div></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })}
                                            </Swiper>
                                        </div>
                                        <div className="portfolio__paginationA text-center"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="portfolio-3" role="tabpanel" aria-labelledby="portfolio-3-tab">
                            <div className="row">
                                <div className="col-12">
                                    <div className="portfolio__slider-actives swiper-container">
                                        <div className="swiper-wrappers">
                                            <Swiper
                                                modules={[Autoplay, Pagination, Scrollbar, Navigation, A11y]}
                                                spaceBetween={50}
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
                                                    nextEl: '.portfolio__button-next-2',
                                                    prevEl: '.portfolio__button-prev-2',
                                                }}
                                                pagination={{
                                                    clickable: true,
                                                    el: '.portfolio__paginationB',
                                                }}
                                                breakpoints={{
                                                    500: {
                                                        slidesPerView: 1,
                                                    },
                                                    768: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 30
                                                    },
                                                    992: {
                                                        slidesPerView: 2,
                                                    },
                                                    1200: {
                                                        slidesPerView: 3,
                                                    }
                                                }}
                                            >
                                                {caseList.slice(25, 29).map((item, index) => {
                                                    return (
                                                        <SwiperSlide key={index}>
                                                            <div className="swiper-slides">
                                                                <div className="portfolio__slider-item mb-85">
                                                                    <div className="portfolio__slider-thumb">
                                                                        <Link href={`/case-details/${item.id}`} ><div><img src={item.caseImg} alt="image not found" /></div></Link>
                                                                        <div className="portfolio__slider-action">
                                                                            <div className="portfolio__slider-content">
                                                                                <span>{item.caseTag}</span>
                                                                                <h3><Link href={`/case-details/${item.id}`} ><div>{item.caseTitle}</div></Link></h3>
                                                                            </div>
                                                                            <div className="portfolio__button">
                                                                                <Link href={`/case-details/${item.id}`} ><div><i className="fa-regular fa-arrow-right-long"></i></div></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })}
                                            </Swiper>
                                        </div>
                                        <div className="portfolio__paginationB text-center"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="portfolio-4" role="tabpanel" aria-labelledby="portfolio-4-tab">
                            <div className="row">
                                <div className="col-12">
                                    <div className="portfolio__slider-actives swiper-container">
                                        <div className="swiper-wrappers">
                                            <Swiper
                                                modules={[Autoplay, Pagination, Scrollbar, Navigation, A11y]}
                                                spaceBetween={50}
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
                                                    nextEl: '.portfolio__button-next-2',
                                                    prevEl: '.portfolio__button-prev-2',
                                                }}
                                                pagination={{
                                                    clickable: true,
                                                    el: '.portfolio__paginationC',
                                                }}
                                                breakpoints={{
                                                    500: {
                                                        slidesPerView: 1,
                                                    },
                                                    768: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 30
                                                    },
                                                    992: {
                                                        slidesPerView: 2,
                                                    },
                                                    1200: {
                                                        slidesPerView: 3,
                                                    }
                                                }}
                                            >
                                                {caseList.slice(25, 30).map((item, index) => {
                                                    return (
                                                        <SwiperSlide key={index}>
                                                            <div className="swiper-slides">
                                                                <div className="portfolio__slider-item mb-85">
                                                                    <div className="portfolio__slider-thumb">
                                                                        <Link href={`/case-details/${item.id}`} ><div><img src={item.caseImg} alt="image not found" /></div></Link>
                                                                        <div className="portfolio__slider-action">
                                                                            <div className="portfolio__slider-content">
                                                                                <span>{item.caseTag}</span>
                                                                                <h3><Link href={`/case-details/${item.id}`} ><div>{item.caseTitle}</div></Link></h3>
                                                                            </div>
                                                                            <div className="portfolio__button">
                                                                                <Link href={`/case-details/${item.id}`} ><div><i className="fa-regular fa-arrow-right-long"></i></div></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })}
                                            </Swiper>
                                        </div>
                                        <div className="portfolio__paginationC text-center"></div>
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

export default CaseSectionThree;