import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import useGlobalContext from '../../hooks/use-context';

const Sidebar = () => {
    const { showSidebar, setShowSidebar } = useGlobalContext();
    const [home, setHome] = useState(false);
    const [shop, setShop] = useState(false);
    const [productPages, setProductPages] = useState(false);
    const [otherPages, setOtherPages] = useState(false);
    const [blog, setBlog] = useState(false);

    const handleMenuDropDown = (page) => {
        if (page === 'home') {
            setHome(!home)
            setShop(false)
            setProductPages(false)
            setOtherPages(false);
            setBlog(false)
        }

        if (page === 'shop') {
            setHome(false)
            setShop(!shop)
            setProductPages(false)
            setOtherPages(false)
            setBlog(false)
        }

        if (page === 'product-pages') {
            setHome(false)
            setShop(false)
            setProductPages(!productPages)
            setOtherPages(false)
            setBlog(false)
        }

        if (page === 'other-pages') {
            setHome(false)
            setShop(false)
            setProductPages(false)
            setOtherPages(!otherPages)
            setBlog(false)
        }

        if (page === 'blog') {
            setHome(false)
            setShop(false)
            setProductPages(false)
            setOtherPages(false)
            setBlog(!blog)
        }
    }
    return (
        <>
            <div className="fix">
                <div className={`offcanvas__info ${showSidebar ? 'info-open' : ''}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo logo">
                                    <Link href="/" ><span><img src="/assets/img/logo/logo-2.png" alt="logo not found" /></span></Link>
                                </div>
                                <div className="offcanvas__close">
                                    <button onClick={() => setShowSidebar(false)}>
                                        <i className="fal fa-times"></i>
                                    </button>
                                </div>
                            </div>

                            {/* <!-- side-mobile-menu start --> */}
                            <nav className="side-mobile-menu d-block d-lg-none mm-menu">
                                <ul>
                                    <li className={`menu-item-has-children has-droupdown ${home ? 'active' : ''}`}>
                                        <a onClick={() => handleMenuDropDown('home')}>Home</a >
                                        <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${home ? 'active' : ''}`}>
                                            <li><Link href="/">Anasayfa</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/hakkimizda">Hakkimizda</Link></li>
                                    <li><Link href="/hizmetler">Hizmetler</Link></li>
                                    <li><Link href="/ekibimiz">Ekibimiz</Link></li>
                                    <li><Link href="/galeri">Galeri</Link></li>


                                    <li><Link href="/iletisim">İletişim</Link></li>
                                </ul>
                            </nav>
                            {/* <!-- side-mobile-menu end --> */}

                            <div className="offcanvas__contact mt-30 mb-20">
                                <h4>İletişim Bilgileri</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-map-marker-alt"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"><div target="_blank">Demirtaş Cumhuriyet, 204. Sk. D:No.6, 16245 Osmangazi/Bursa</div></Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="tel:05325470421">0532 547 04 21</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-envelope"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="mailto:info@bursateknikhizmet.com">info@bursateknikhizmet.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="offcanvas__social">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => setShowSidebar(false)} className={`offcanvas-overlay ${showSidebar ? 'overlay-open' : ''}`}></div>
        </>
    );
};

export default Sidebar;