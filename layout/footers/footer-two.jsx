import Link from 'next/link';
import React from 'react';
import blogList from '../../data/blog-data';

const FooterTwo = () => {
    return (
        <footer>
            <div className="footer__style-2">
                <section className="footer__area footer__overlay" style={{ background: "url(/assets/img/bg/footer-bg.jpg)" }}>
                    <div className="container">
                        <div className="footer__info-area style-2">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="footer__logo">
                                        <Link href="/" ><div><img src="assets/img/logo/logo-2.png" alt="logo not found" /></div></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="footer__link-3 text-center">
                                        <ul>
                                            <li><Link href="/about" ><div>About</div></Link></li>
                                            <li><Link href="/faq" ><div>Faq</div></Link></li>
                                            <li><Link href="/contact" ><div>Contact</div></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="footer__social">
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i className="fa-brands fa-behance"></i></a>
                                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-main__wrapper pb-35">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                        <div className="footer__widget footer-col-5 mb-60">
                                            <div className="footer__title">
                                                <h4>Pages</h4>
                                            </div>
                                            <div className="footer__link">
                                                <ul>
                                                    <li><Link href="/about" ><div>About Us</div></Link></li>
                                                    <li><Link href="/team" ><div>Our Terms</div></Link></li>
                                                    <li><Link href="/service" ><div>Services</div></Link></li>
                                                    <li><Link href="/faq" ><div>Faq</div></Link></li>
                                                    <li><Link href="/pricing" ><div>Price & Plan</div></Link></li>
                                                    <li><Link href="/news" ><div>News</div></Link></li>
                                                    <li><Link href="/case-study" ><div>Case Study</div></Link></li>
                                                    <li><Link href="/contact" ><div>Contact</div></Link></li>
                                                    <li className="custom__link" ><Link href="/error" ><div>404 Page</div></Link></li>
                                                    <li className="custom__link"><Link href="/pricing" ><div>Membership</div></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-6">
                                        <div className="footer__widget footer-col-6 mb-60">
                                            <div className="footer__title">
                                                <h4>Our Services</h4>
                                            </div>
                                            <div className="footer__link-2">
                                                <ul>
                                                    <li><Link href="/service" ><div>Software Solution</div></Link></li>
                                                    <li><Link href="/service" ><div>Digital Marketing</div></Link></li>
                                                    <li><Link href="/service" ><div>UI & UX Design</div></Link></li>
                                                    <li><Link href="/service" ><div>Web Development</div></Link></li>
                                                    <li className="custom__link"><Link href="/service" ><div>24/7 Online Support</div></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                        <div className="footer__widget footer-col-7 mb-60">
                                            <div className="footer__title">
                                                <h4>Our Availability</h4>
                                            </div>
                                            <div className="footer__contact">
                                                <div className="footer__contact-item">
                                                    <span>Mon - Fri</span>
                                                    <p className="mb-20">10:00 am to 06:00 pm</p>
                                                </div>
                                                <div className="footer__contact-item">
                                                    <span>Saturday (1st & 4th)</span>
                                                    <p className="mb-25">08:00 am to 04:00 pm</p>
                                                </div>
                                                <div className="footer__support">
                                                    <div className="footer__support-inner">
                                                        <div className="footer__support-icon">
                                                            <img src="assets/img/icon/footet/massege.png" alt="image not found" />
                                                        </div>
                                                        <div className="footer__support-title">
                                                            <span>Emergency Service</span>
                                                            <a href="tel:00011122233">000 111 222 33</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                                        {blogList &&
                                            <div className="footer__widget footer-col-8 mb-60">
                                                <div className="footer__title">
                                                    <h4>Insights Feeds</h4>
                                                </div>
                                                {blogList.slice(6, 8).map((item, num) => (
                                                    <div className="footer__meta mb-30" key={num}>
                                                        <div className="meta__item d-flex align-items-center">
                                                            <div className="meta__item-thumb mr-20">
                                                                <Link href={`/blog-details/${item.id}`} ><div><img src={item.blogImg} alt="image not found" /></div></Link>
                                                            </div>
                                                            <div className="meta__content">
                                                                <span><i className={item.blogDateIcon}></i>{item.blogDate}</span>
                                                                <h5><Link href={`/blog-details/${item.id}`} ><div>{item.blogTitle}</div></Link></h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright section-bg">
                        <div className="container">
                            <div className="copyright__text">
                                <p>Telif hakkı ve tasarım: <a href="http://d-dizayn.com/"> @D-Dizayn</a> - 2023</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default FooterTwo;