import Link from 'next/link';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Scrollbar, Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

import ServicesList from '../../../data/services-data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
SwiperCore.use([Pagination, Scrollbar, Navigation, A11y, Autoplay]);

const ServiceSliderThree = () => {
    useEffect(() => {
        // Initialize Swiper here if needed
        const swiper = new Swiper('.swiper-container', {
            // your swiper configuration options
        });
    }, []);
    return (
        <div className="services__slider-active swiper-container">
            <div className="swiper-wrapper">
                <Swiper
                    modules={[Autoplay, Scrollbar, A11y]}
                    spaceBetween={100}
                    slidesPerView={1}
                    autoplaydisableoninteraction={"false"}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true
                    }}
                    breakpoints={{
                        500: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1600: {
                            slidesPerView: 4,
                        }
                    }}
                >
                    {ServicesList.slice(5, 8).map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="swiper-slides">
                                    <div className="services__slider-item">
                                        <div className="services__slider-thumb">
                                            <img src={item.serviceIcon} alt="image not found" />
                                        </div>
                                        <div className="services__slider-content">
                                            <h3><Link href={`/service-details/${item.id}`} ><div>{item.serviceTitle}</div></Link></h3>
                                            <p>{item.serviceDesc}</p>
                                        </div>
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

export default ServiceSliderThree;