import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';

const FaqTopic = () => {
    return (
        <section className="faq__topic-area pb-95">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="section__title-one text-center mb-50">
                        <h2>FAQ Help Topic</h2>
                    </div>
                </div>
                {ServicesList &&
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        {ServicesList.slice(12, 20).map((item, num) => (
                            <div className="col-xl-3 col-lg-4 col-md-6" key={num}>
                                <div className="faq__topic-wrapper text-center mb-30">
                                    <div className="faq__topic-items ">
                                        <div className="faq__topic-icon">
                                            <img src={item.serviceIcon} alt="image not found" />
                                        </div>
                                        <div className="faq__topic-content">
                                            <h4><Link href={`/service-details/${item.id}`} ><div>{item.serviceTitle}</div></Link></h4>
                                            <p>{item.serviceDesc}</p>
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

export default FaqTopic;