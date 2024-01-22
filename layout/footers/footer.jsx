
import Link from 'next/link';
import React from 'react';

const Footer = ({ footer_area, footer_bg, footer_style, copyright_style }) => {
    return (
        <footer>
            <section className={`${footer_area ? footer_area : 'footer__area footer-bg pt-200'}`} style={{ backgroundImage: `url(${footer_bg ? footer_bg : ''})` }}>
                <div className={`${footer_style ? footer_style : ''}`}>
                    <div className="container">
                        <div className="footer-main__wrapper pb-40">
                            <div className="row">
                                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget footer-col-1 mb-60">
                                        <div className="footer__title">
                                            <h4>Hakkımızda</h4>
                                        </div>
                                        <div className="footer__content">
                                            <p>Bursa Teknik Servis olarak, beyaz eşyadan klimalara, kombi ve petek tamirine kadar geniş bir yelpazede uzman hizmet sunuyoruz. 10 yıldan fazla süredir sektörde, 7/24 hizmet anlayışıyla müşterilerimize kalite ve güvenilirlik sağlıyoruz. Sizi memnun etmek için buradayız!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget footer-col-2 mb-60">
                                        <div className="footer__title">
                                            <h4>Sayfalar</h4>
                                        </div>
                                        <div className="footer__link">
                                            <ul>
                                                <li><Link href="/hakkimizda" ><div>Hakkımızda</div></Link></li>
                                                <li><Link href="/takim" ><div>Bizim Takım</div></Link></li>
                                                <li><Link href="/hizmetler" ><div>Hizmetler</div></Link></li>
                                                <li><Link href="/galeri" ><div>Galeri</div></Link></li>
                                                <li><Link href="/iletisim" ><div>İletişim</div></Link></li>
                                                <li className="custom__link"><Link href="/error" ><div>404 Page</div></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget footer-col-3 mb-60">
                                        <div className="footer__title">
                                            <h4>Bizim Hizmetlerimiz</h4>
                                        </div>
                                        <div className="footer__link-2">
                                            <ul>
                                                <li><Link href="/service-details/5" ><div>Beyaz Eşya Tamiri</div></Link></li>
                                                <li><Link href="/service-details/6" ><div>Klima Tamiri</div></Link></li>
                                                <li><Link href="/service-details/7" ><div>Kombi ve Petek Tamiri</div></Link></li>
                                                <li><Link href="/service-details/8" ><div>7/24 İletişim</div></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 offset-xxl-1 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget footer-col-4 mb-60">
                                        <div className="footer__title">
                                            <h4>Müsait Zamanlar</h4>
                                        </div>
                                        <div className="footer__contact">
                                            <div className="footer__contact-item">
                                                <span>Pzt. - Pzr</span>
                                                <p className="mb-20">10:00 - 10:00 </p>
                                            </div>

                                            <div className="footer__support">
                                                <div className="footer__support-inner">
                                                    <div className="footer__support-icon">
                                                        <img src="/assets/img/icon/footet/massege.png" alt="image not found" />
                                                    </div>
                                                    <div className="footer__support-title">
                                                        <span>Acil Servis</span>
                                                        <a href="tel:05325470421">0532 547 04 21</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="footer__info-area">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="footer__logo">
                                                <Link href="/" ><div><img src="/assets/img/logo/logo-2.png" alt="logo not found" /></div></Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="footer__link-3 text-sm-end">
                                                <ul>
                                                    <li><Link href="/about" ><div>Hakkimizda</div></Link></li>
                                                    <li><Link href="/contact" ><div>İletişim</div></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${copyright_style ? copyright_style : 'footer__copyright'}`}>
                        <div className="container">
                            <div className="copyright__text">
                                <p>Telif hakkı ve tasarım: <a href="http://d-dizayn.com/"> @D-Dizayn</a> - 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;