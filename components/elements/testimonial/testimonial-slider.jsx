import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Scrollbar, Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import { testimonial } from '../../../data/testimonial-data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
SwiperCore.use([Pagination, Scrollbar, Navigation, A11y, Autoplay]);
const TestimonialSlider = () => {
    
    return (
        <section className="testimonial__area include__bg pt-120 pb-120" style={{ background: "url(/assets/img/bg/testimonial-map.png)" }}>
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="section__title-wrapper text-center mb-50">
                        <div className="section__title-one">
                            <span>{"//  Testimonials  //"}</span>
                            <h2>User feedbacks</h2>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-12">
                        <div className="testimonial__active-2 swiper-container">
                            <div className="swiper-wrapper">
                                <Swiper
                                    modules={[Autoplay, Scrollbar, A11y]}
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

                                >
                                    {testimonial.slice(0, 3).map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-slides">
                                                    <div className="testimonial__item-one">
                                                        <div className="testimonial__item-one-content">
                                                            <p>{item.desc}</p>
                                                        </div>
                                                        <div className="testimonial-author d-flex align-items-center">
                                                            <div className="testimonial-author-img">
                                                                <img src={item.img} alt="image not found" />
                                                            </div>
                                                            <div className="testimonial-author-content">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;