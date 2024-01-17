import Link from 'next/link';
import React from 'react';
import PricingList from '../../data/pricing-data';

const PricingSection = () => {
    return (
        <section className="pricing-area grey-bg pt-120 pb-90">
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-6 col-lg-6">
                        <div className="section__wrapper title text-center mb-35">
                            <div className="section__title-one">
                                <span>{"// Our Pricing //"}</span>
                                <h2>Exclusive Pricing</h2>
                            </div>
                        </div>
                        <div className="pricing-tab mb-60">
                            <ul className="nav nav-tabs justify-content-center" id="priceTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="monthly-tab" data-bs-toggle="tab"
                                        data-bs-target="#monthly" type="button" role="tab" aria-controls="monthly"
                                        aria-selected="true">monthly</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="yearly-tab" data-bs-toggle="tab" data-bs-target="#yearly"
                                        type="button" role="tab" aria-controls="yearly" aria-selected="false">yearly</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {PricingList &&
                        <div className="tab-content" id="priceTabContent">
                            <div className="tab-pane fade active show" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                                <div className="row">
                                    {PricingList.slice(0, 3).map((item, num) => (
                                        <div className="col-lg-4 col-md-6" key={num}>
                                            <div className="bd-pricing mb-30">
                                                <div className="bd-pricing-title-wrapper text-center mb-40">
                                                    <h6 className="bd-pricing-subtitle mb-15">{item.plan}</h6>
                                                    <h6 className="bd-pricing-price">${item.price}<span>{item.priceTime}</span></h6>
                                                </div>
                                                <ul className="mb-50">
                                                    <li><i className="fal fa-check"></i> {item.priceServiceA}</li>
                                                    <li><i className="fal fa-check"></i> {item.priceServiceB}</li>
                                                    <li><i className="fal fa-check"></i> {item.priceServiceC}</li>
                                                    <li><i className="fal fa-check"></i> {item.priceServiceD}</li>
                                                    <li><i className="fal fa-check"></i> {item.priceServiceE}</li>
                                                    <li><i className="fal fa-check"></i> {item.priceServiceF}</li>
                                                </ul>
                                                <a href="#"></a>
                                                <Link href="/pricing" ><div className="pricing__btn w-100">{item.priceBtn}</div></Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="yearly" role="tabpanel" aria-labelledby="yearly-tab">
                                <div className="row">
                                    {PricingList.slice(3, 6).map((item, num) => (
                                        <div className="col-lg-4 col-md-6" key={num}>
                                            <div className="bd-pricing mb-30">
                                                <div className="bd-pricing-title-wrapper text-center mb-40">
                                                    <h6 className="bd-pricing-subtitle mb-15">{item.plan}</h6>
                                                    <h6 className="bd-pricing-price">${item.price}<span>{item.priceTime}</span></h6>
                                                </div>
                                                <ul className="mb-50">
                                                    <li><i className="fal fa-check"></i> {item.priceServiceA}</li>
                                                    <li><i className="fal fa-check"></i> {item.priceServiceB}</li>
                                                    <li><i className="fal fa-check"></i> {item.priceServiceC}</li>
                                                    <li><i className="fal fa-check"></i> {item.priceServiceD}</li>
                                                    <li><i className="fal fa-check"></i> {item.priceServiceE}</li>
                                                    <li><i className="fal fa-check"></i> {item.priceServiceF}</li>
                                                </ul>
                                                <Link href="/pricing" ><div className="pricing__btn w-100">{item.priceBtn}</div></Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default PricingSection;