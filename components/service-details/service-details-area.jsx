import Link from 'next/link';
import React from 'react';
import ServiceSidebar from './service-sidebar';
import ServiceWorks from './service-works';


const ServiceDetailsArea = ({ item }) => {
    return (
        <>
            <div className="breadcrumb__area include__bg" style={{ background: "url(/assets/img/bg/breadcrumb.jpg)" }}>
                <div className="container fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb__wrapper text-center">
                                <div className="breadcrumb__title">
                                    <h2>{item.serviceTitle}</h2>
                                </div>
                                <div className="breadcrumb__menu">
                                    <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                        <ul className="trail-items">
                                            <li className="trail-item trail-begin"><span><Link href="/" ><div>BTH</div></Link></span></li>
                                            <li className="trail-item trail-end"><span>Servis Detayları</span></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="service__details pt-120 pb-60">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-xl-9 col-lg-8 col-md-12">
                            <div className="service__details-main mb-60">
                                <div className="service__details-thumb w-img mb-50">
                                    <img src={item.serviceBigBackGround} alt="image not found" />
                                </div>
                                <h3 className="mb-15">{item.serviceTitle}</h3>
                                <p className="mb-15">
                                    {item.serviceInfo}
                                </p>
                                <h3 className="mb-25">Nasıl çalışıyoruz ?</h3>
                                <ServiceWorks />

                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-8">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsArea;