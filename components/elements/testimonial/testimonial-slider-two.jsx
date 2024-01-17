import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Scrollbar, Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import { testimonial } from '../../../data/testimonial-data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
SwiperCore.use([Pagination, Scrollbar, Navigation, A11y, Autoplay]);
const TestimonialSliderTwo = () => {
    useEffect(() => {
        // Initialize Swiper here if needed
        const swiper = new Swiper('.swiper-container', {
            // your swiper configuration options
        });
    }, []);
    return (
        <section className="testimonial__area section-bg pt-120 pb-120" style={{ background: "url(/assets/img/bg/testimonial-bg.png)" }}>
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-8 col-md-8">
                        <div className="section__title-two s-3 mb-60">
                            <p>Referans</p>
                            <h2>2000+ Mutlu Kullanıcı</h2>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4">
                        <div className="testimonial__navigation">
                            <button className="testimonial__button-prev"><i className="fa-regular fa-arrow-left-long"></i></button>
                            <button className="testimonial__button-next"><i className="fa-regular fa-arrow-right-long"></i></button>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-12">
                        <div className="testimonial__active swiper-container">
                            <div className="swiper-wrapper">
                                <Swiper
                                    modules={[Autoplay, Navigation, Scrollbar, A11y]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    centeredSlides={true}
                                    autoplaydisableoninteraction={"false"}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: true
                                    }}
                                    navigation={{
                                        clickable: true,
                                        nextEl: '.testimonial__button-next',
                                        prevEl: '.testimonial__button-prev',
                                    }}
                                    breakpoints={{
                                        576: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                            centeredSlides: false,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                        }
                                    }}
                                >
                                    {testimonial.slice(3, 6).map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-slides">
                                                    <div className="testimonial__item">
                                                        <div className="testimonial__rating">
                                                            <i className={item.starA}></i>
                                                            <i className={item.starB}></i>
                                                            <i className={item.starC}></i>
                                                            <i className={item.starD}></i>
                                                            <i className={item.starE}></i>
                                                        </div>
                                                        <div className="testimonial__text">
                                                            <p>{item.desc}</p>
                                                        </div>
                                                        <div className="testimonial__avater d-flex align-items-center">
                                                            <div className="testimonial__avater-thumb mr-20">
                                                                <img src={item.img} alt="image not foiund" />
                                                            </div>
                                                            <div className="testimonial__avater-info">
                                                                <h4>{item.author}</h4>
                                                                <span>{item.designation}</span>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial__quote-icon">
                                                            <img src={item.qouteIcon} alt="image not found" />
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

export default TestimonialSliderTwo;