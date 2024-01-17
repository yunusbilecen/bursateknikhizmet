import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Scrollbar, Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

import brandList from '../../../data/brand-data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
SwiperCore.use([Pagination, Scrollbar, Navigation, A11y, Autoplay]);

const BrandSliderThree = () => {
    useEffect(() => {
        // Initialize Swiper here if needed
        const swiper = new Swiper('.swiper-container', {
            // your swiper configuration options
        });
    }, []);

    return (
        <div className="partner__area pt-110 pb-110">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-12">
                        <h5 className="brand__title">Ventech VIP Partners <br />
                            Trusted By</h5>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-8 col-12">
                        <div className="brand__active-2 text-center text-sm-end swiper-container">
                            <div className="swiper-wrapper">
                                <Swiper
                                    modules={[Autoplay, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000
                                    }}
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 3,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 4,
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                        },
                                        1400: {
                                            slidesPerView: 5,
                                        }
                                    }}
                                >
                                    {brandList.slice(5, 10).map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-slides">
                                                    <div className="brand__item">
                                                        <a href="#">
                                                            <img src={item.brandImg} alt="image not found" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandSliderThree;