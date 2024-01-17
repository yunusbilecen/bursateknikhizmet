import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Scrollbar, Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

import brandList from '../../../data/brand-data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
SwiperCore.use([Pagination, Scrollbar, Navigation, A11y, Autoplay]);
const BrandSlider = () => {

    return (
        <div className="brand__actiive swiper-container">
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
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                        1400: {
                            slidesPerView: 5,
                        },
                        1600: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {brandList.slice(0, 30).map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="swiper-slides">
                                    <div className="singel__brand">
                                        <a href="#"><img src={item.brandImg} alt="image not found" /></a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default BrandSlider;