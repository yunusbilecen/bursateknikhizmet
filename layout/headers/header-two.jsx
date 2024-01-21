import Link from 'next/link';
import React from 'react';
import Sidebar from '../../components/common/sidebar';
import useGlobalContext from '../../hooks/use-context';
import useSticky from '../../hooks/use-sticky';
import NavMenu from './navmenu';

const HeaderTwo = () => {
    //for sidebar menu
    const { setShowSidebar } = useGlobalContext();
    //for sticky header
    const { headerSticky } = useSticky();
    return (
        <>
            <header>
                <div className="header__transparent-2">
                    <div className="header__area-2">
                        <div className="container">
                            <div className="header__main-inner">
                                <div className="header__widget-main-2 white-bg">
                                    <div className="row align-items-center">
                                        <div className="col-xl-3 col-lg-3 col-6">
                                            <div className="header__logo">
                                                <Link href="/" ><div><img src="assets/img/logo/logo.png" alt="logo" /></div></Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-9 col-6">
                                            <div className="header__widget-wrapper">
                                                <div className="header__widget-info">
                                                    <div className="header__widget-icon">
                                                        <img src="assets/img/icon/header/header-icon-01.png" alt="icon not found" />
                                                    </div>
                                                    <div className="header__widget-content">
                                                        <span>İletişime Geç</span>
                                                        <h4><a href="tel:05325470421">0532 547</a></h4>
                                                    </div>
                                                </div>
                                                <div className="header__widget-info">
                                                    <div className="header__widget-icon">
                                                        <img src="assets/img/icon/header/header-icon-02.png" alt="icon not found" />
                                                    </div>
                                                    <div className="header__widget-content">
                                                        <span>Email Adres</span>
                                                        <h4><a href="mailto:info@bursateknikhizmet.com">info@bursateknikhizmet.com</a></h4>
                                                    </div>
                                                </div>
                                                <div className="header__toggle d-lg-none">
                                                    <span className="sidebar__toggle">
                                                        <div className="bar-icon" onClick={() => setShowSidebar(true)}>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header__main-wrapper-2">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                                            <div className="main-menu main-menu-2 d-none d-none d-lg-block">
                                                <nav id="mobile-menu">
                                                    <NavMenu />
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-6 d-none d-lg-block">
                                            <div className="header__right text-end">
                                                <div className="header__button">
                                                    <Link href="/contact" ><div className="header__btn-2">Randevu Al<span><i className="fa-solid fa-angle-right"></i></span></div></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-sticky" className={`sticky__header-area d-none ${headerSticky ? 'sticky' : ''}`}>
                    <div className="container">
                        <div className="header__widget-main">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-3 col-6">
                                    <div className="header__logo">
                                        <Link href="/" ><div><img src="assets/img/logo/logo-2.png" alt="logo" /></div></Link>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-6">
                                    <div className="hidden__header">
                                        <div className="hidden__header-inner">
                                            <div className="main-menu main-menu-2 d-none d-lg-block">
                                                <nav id="mobile-menu-2">
                                                    <NavMenu />
                                                </nav>
                                            </div>
                                            <div className="header__button d-none d-xl-block">
                                                <Link href="/contact" ><div className="header__btn-2">Randevu Al<span><i className="fa-solid fa-angle-right"></i></span></div></Link>
                                            </div>
                                            <div className="header__toggle d-lg-none">
                                                <span className="sidebar__toggle">
                                                    <div className="bar-icon" onClick={() => setShowSidebar(true)}>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* sidebar start */}
            <Sidebar />
            {/* sidebar end */}
        </>
    );
};

export default HeaderTwo;