import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ContactForm from './contact-form';

const ContactsSection = ({ companyData }) => {

    return (
        <section className="contact__area pt-80 pb-80">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-6">
                        <div className="contact__info-wrapper mb-30">
                            <div className="section__title-one mb-20">
                                <span>{"// Bize Ulaşın"}</span>
                                <h2>Temasa Geç</h2>
                            </div>
                            <div className="contact__info-item">
                                <div className="contact__info-icon">
                                    <i className="fa-solid fa-comment"></i>
                                </div>
                                <div className="contact__info-content">
                                    <span>Dilediğiniz Zaman Arayın</span>
                                    <h5><a href="tel:05325470421">{companyData.phone}</a></h5>
                                </div>
                            </div>
                            <div className="contact__info-item">
                                <div className="contact__info-icon">
                                    <i className="fa-solid fa-envelope-open"></i>
                                </div>
                                <div className="contact__info-content">
                                    <span>Email Gönder</span>
                                    <h5><a href="mailto:info@bursateknikhizmet.com">info@bursateknikhizmet.com</a></h5>
                                </div>
                            </div>
                            <div className="contact__info-item">
                                <div className="contact__info-icon">
                                    <i className="fa-solid fa-location-arrow"></i>
                                </div>
                                <div className="contact__info-content">
                                    <span>Bizi Ziyaret Et</span>
                                    <h5><Link href="" ><div >Demirtaş Cumhuriyet, 204. Sk. D:No.6, 16245 Osmangazi/Bursa</div></Link></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactsSection;