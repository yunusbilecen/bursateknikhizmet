import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';

const ServiceSectionThree = () => {
    return (
        <section className="service__area p-relative z-index-11">
            <div className="container">
                {ServicesList &&
                    <div className="row service__features-main">
                        {ServicesList.slice(4, 8).map((item, num) => (
                            <div className="col-xl-3 col-lg-6 col-md-6" key={num}>
                                <div className="service__features-item mb-60 text-center">
                                    <div className="service__features-icon">
                                        <span><img src={item.serviceIcon} alt="icon not found" /></span>
                                        <div className="service__circle">
                                            <img src={item.serviceIconBorder} alt="icon not found" />
                                        </div>
                                    </div>
                                    <div className="service__features-content">
                                        <h3><Link href={`/service-details/${item.id}`} ><div>{item.serviceTitle}</div></Link></h3>
                                        <p>{item.serviceDesc}</p>
                                        <div className="service__features-btn">
                                            <Link href={`/service-details/${item.id}`} ><div>{item.serviceBtn}</div></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </section>
    );
};

export default ServiceSectionThree;