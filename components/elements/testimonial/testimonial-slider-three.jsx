import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Scrollbar, Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import { testimonial } from '../../../data/testimonial-data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
SwiperCore.use([Pagination, Scrollbar, Navigation, A11y, Autoplay]);
const TestimonialSliderThree = () => {
    useEffect(() => {
        // Initialize Swiper here if needed
        const swiper = new Swiper('.swiper-container', {
            // your swiper configuration options
        });
    }, []);
    return (
        <section className="testimonial__area pb-145">
            <div className="testimonial__style-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="testimonial__main-wrapper">
                                <div className="testimonial__active-3 swiper-container">
                                    <div className="swiper-wrapper">
                                        <Swiper
                                            modules={[Autoplay, Navigation, Scrollbar, A11y, Autoplay]}
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            autoplaydisableoninteraction={"false"}
                                            loop={true}
                                            autoplay={{
                                                delay: 3000,
                                                disableOnInteraction: true
                                            }}
                                            breakpoints={{
                                                0: {
                                                    slidesPerView: 1,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                },
                                                992: {
                                                    slidesPerView: 3,
                                                },
                                                1200: {
                                                    slidesPerView: 3,
                                                }
                                            }}
                                            navigation={{
                                                clickable: true,
                                                nextEl: '.testimonial__button-next-2',
                                                prevEl: '.testimonial__button-prev-2',
                                            }}
                                        >
                                            {testimonial.slice(0, 3).map((item, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <div className="swiper-slides">
                                                            <div className="testimonial__item-2">
                                                                <div className="testimonial__rating">
                                                                    <i className={item.starA}></i>
                                                                    <i className={item.starB}></i>
                                                                    <i className={item.starC}></i>
                                                                    <i className={item.starD}></i>
                                                                    <i className={item.starE}></i>
                                                                </div>
                                                                <div className="testimonial__text-2">
                                                                    <p>{item.desc}</p>
                                                                </div>
                                                                <div className="testimonial__avater style-2 d-flex align-items-center">
                                                                    <div className="testimonial__avater-thumb mr-20">
                                                                        <img src={item.img} alt="image not foiund" />
                                                                    </div>
                                                                    <div className="testimonial__avater-info">
                                                                        <h4>{item.author}</h4>
                                                                        <span>{item.designation}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    </div>
                                </div>
                                <div className="testimonial__navigation style-2">
                                    <button className="testimonial__button-prev-2"><i className="fa-regular fa-arrow-left-long"></i></button>
                                    <button className="testimonial__button-next-2"><i className="fa-regular fa-arrow-right-long"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSliderThree;