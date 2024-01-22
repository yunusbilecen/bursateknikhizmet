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
const CaseSectionTwo = () => {

   return (
      <section className="case__study-area pt-120">
         <div className="container">
            <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-xl-4 col-lg-4">
                  <div className="section__title-two s-2 mb-45">
                     <span>Portföy</span>
                     <h2>Çalışmalar</h2>
                  </div>
               </div>
               <div className="col-xl-8 col-lg-8">
                  <div className="portfolio__tab-wrapper mb-60">
                     <div className="porfolio__tab">
                        <nav>
                           <div className="nav nav-tabs" id="nav-tab" role="tablist">
                              <button className="nav-link active" id="case-1-tab" data-bs-toggle="tab" data-bs-target="#case-1" type="button" role="tab" aria-controls="case-1" aria-selected="true">Tüm Çalışmalar</button>
                              <button className="nav-link" id="case-2-tab" data-bs-toggle="tab" data-bs-target="#case-2" type="button" role="tab" aria-controls="case-2" aria-selected="false">Beyaz Eşya</button>
                              <button className="nav-link" id="case-3-tab" data-bs-toggle="tab" data-bs-target="#case-3" type="button" role="tab" aria-controls="case-3" aria-selected="false">Klima</button>
                              <button className="nav-link" id="case-4-tab" data-bs-toggle="tab" data-bs-target="#case-4" type="button" role="tab" aria-controls="case-4" aria-selected="false">Kombi & Petek</button>
                           </div>
                        </nav>
                     </div>
                     <div className="portfolio__navigation-wrapper">
                        <div className="portfolio__navigation">
                           <button className="portfolio__button-prev"><i className="fa-regular fa-arrow-left-long"></i></button>
                           <button className="portfolio__button-next"><i className="fa-regular fa-arrow-right-long"></i></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-12">
                  <div className="tab-content" id="nav-tabContent">
                     <div className="tab-pane fade show active" id="case-1" role="tabpanel" aria-labelledby="case-1-tab">
                        <div className="row">
                           <div className="col-12">
                              <div className="case-study__active-2 swiper-container">
                                 <div className="swiper-wrapper">
                                    <Swiper
                                       modules={[Pagination, Scrollbar, Navigation, A11y, Autoplay]}
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
                                          nextEl: '.portfolio__button-next',
                                          prevEl: '.portfolio__button-prev',
                                       }}
                                       pagination={{
                                          clickable: true,
                                          el: '.portfolio__pagination',
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
                                          }
                                       }}
                                    >
                                       {caseList.slice(0, 4).map((item, index) => {
                                          return (
                                             <SwiperSlide key={index}>
                                                <div className="swiper-slides">
                                                   <div className="case__study-item">
                                                      <div className="case__study-thumb">
                                                         <img src={item.caseImg} alt="image not found" />
                                                         <div className="case__study-content">
                                                            <h3><Link href={`/case-details/${item.id}`}><div>{item.caseTitle}</div></Link></h3>
                                                            <p>{item.caseDesc.slice(0, 55)}</p>
                                                            <Link href={`/case-details/${item.id}`}><div className="case__study-btn">{item.caseBtn}</div></Link>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </SwiperSlide>
                                          )
                                       })}
                                    </Swiper>
                                 </div>
                                 <div className="portfolio__pagination text-center mt-85"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="case-2" role="tabpanel" aria-labelledby="case-2-tab">
                        <div className="row">
                           <div className="col-12">
                              <div className="case-study__active-2 swiper-container">
                                 <div className="swiper-wrapper">
                                    <Swiper
                                       modules={[Pagination, Scrollbar, Navigation, A11y, Autoplay]}
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
                                          nextEl: '.portfolio__button-next',
                                          prevEl: '.portfolio__button-prev',
                                       }}
                                       pagination={{
                                          clickable: true,
                                          el: '.portfolio__pagination',
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
                                          }
                                       }}
                                    >
                                       {caseList.slice(0, 1).map((item, index) => {
                                          return (
                                             <SwiperSlide key={index}>
                                                <div className="swiper-slides">
                                                   <div className="case__study-item">
                                                      <div className="case__study-thumb">
                                                         <img src={item.caseImg} alt="image not found" />
                                                         <div className="case__study-content">
                                                            <h3><Link href={`/case-details/${item.id}`}><div>{item.caseTitle}</div></Link></h3>
                                                            <p>{item.caseDesc.slice(0, 55)}</p>
                                                            <Link href={`/case-details/${item.id}`}><div className="case__study-btn">{item.caseBtn}</div></Link>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </SwiperSlide>
                                          )
                                       })}
                                    </Swiper>
                                 </div>
                                 <div className="portfolio__pagination text-center mt-85"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="case-3" role="tabpanel" aria-labelledby="case-3-tab">
                        <div className="row">
                           <div className="col-12">
                              <div className="case-study__active-2 swiper-container">
                                 <div className="swiper-wrapper">
                                    <Swiper
                                       modules={[Pagination, Scrollbar, Navigation, A11y, Autoplay]}
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
                                          nextEl: '.portfolio__button-next',
                                          prevEl: '.portfolio__button-prev',
                                       }}
                                       pagination={{
                                          clickable: true,
                                          el: '.portfolio__pagination',
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
                                          }
                                       }}
                                    >
                                       {caseList.slice(0, 3).map((item, index) => {
                                          return (
                                             <SwiperSlide key={index}>
                                                <div className="swiper-slides">
                                                   <div className="case__study-item">
                                                      <div className="case__study-thumb">
                                                         <img src={item.caseImg} alt="image not found" />
                                                         <div className="case__study-content">
                                                            <h3><Link href={`/case-details/${item.id}`}><div>{item.caseTitle}</div></Link></h3>
                                                            <p>{item.caseDesc.slice(0, 55)}</p>
                                                            <Link href={`/case-details/${item.id}`}><div className="case__study-btn">{item.caseBtn}</div></Link>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </SwiperSlide>
                                          )
                                       })}
                                    </Swiper>
                                 </div>
                                 <div className="portfolio__pagination text-center mt-85"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="case-4" role="tabpanel" aria-labelledby="case-4-tab">
                        <div className="row">
                           <div className="col-12">
                              <div className="case-study__active-2 swiper-container">
                                 <div className="swiper-wrapper">
                                    <Swiper
                                       modules={[Pagination, Scrollbar, Navigation, A11y, Autoplay]}
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
                                          nextEl: '.portfolio__button-next',
                                          prevEl: '.portfolio__button-prev',
                                       }}
                                       pagination={{
                                          clickable: true,
                                          el: '.portfolio__pagination',
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
                                          }
                                       }}
                                    >
                                       {caseList.slice(0, 3).map((item, index) => {
                                          return (
                                             <SwiperSlide key={index}>
                                                <div className="swiper-slides">
                                                   <div className="case__study-item">
                                                      <div className="case__study-thumb">
                                                         <img src={item.caseImg} alt="image not found" />
                                                         <div className="case__study-content">
                                                            <h3><Link href={`/case-details/${item.id}`}><div>{item.caseTitle}</div></Link></h3>
                                                            <p>{item.caseDesc.slice(0, 55)}</p>
                                                            <Link href={`/case-details/${item.id}`}><div className="case__study-btn">{item.caseBtn}</div></Link>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </SwiperSlide>
                                          )
                                       })}
                                    </Swiper>
                                 </div>
                                 <div className="portfolio__pagination text-center mt-85"></div>
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

export default CaseSectionTwo;