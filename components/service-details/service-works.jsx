import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';


const ServiceWorks = () => {
    return (
        <div className="company__item-box mb-30">
            {ServicesList &&
                <div className="row">
                    {ServicesList.slice(5, 8).map((item, num) => (
                        <div className="col-xl-4 col-lg-6 col-md-6" key={num}>
                            <div className="company__service-wrapper mb-30">
                                <div className="company__service-item text-center">
                                    <div className="company__service-icon">
                                        <img src={item.serviceIcon} alt="image not found" />
                                    </div>
                                    <div className="company__service-title">
                                        <h3><Link href={`/service-details/${item.id}`}><div>{item.serviceTitle}</div></Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default ServiceWorks;