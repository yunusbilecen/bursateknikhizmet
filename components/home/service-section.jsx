import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';


const ServiceSection = ({ service_space }) => {
    return (
        <div className={`${service_space ? service_space : 'service__area-one section-bg pt-250 pb-90'}`}>
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-8 col-md-8">
                        <div className="section__title-one s-2 mb-50">
                            <span>{"// Servisler"}</span>
                            <h2>Burada Ne Yapıyoruz ?</h2>
                        </div>
                    </div>
                </div>
                {ServicesList &&
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        {ServicesList.slice(0, 4).map((item, num) => (
                            <div className="col-xl-3 col-md-6" key={num}>
                                <div className="service__item-one mb-30">
                                    <div className="service__item-wrapper">
                                        <div className="service__item-thumb">
                                            <img src={item.serviceIcon} alt="icon not found" />
                                        </div>
                                        <div className="service__item-content">
                                            <h3><Link href={`/service-details/${item.id}`} ><div>{item.serviceTitle}</div></Link></h3>
                                            <p>{item.serviceDesc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
};

export default ServiceSection;