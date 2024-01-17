import Link from 'next/link';
import React, { useState } from 'react';
import Sidebar from '../../components/common/sidebar';
import useGlobalContext from '../../hooks/use-context';
import useSticky from '../../hooks/use-sticky';
import HeaderTop from './header-top';
import NavMenu from './navmenu';

const Header = () => {
    //for search field
    const [searchOpen, setSearchOpen] = useState(false);
    //for sidebar menu
    const { setShowSidebar } = useGlobalContext();
    //for sticky header
    const { headerSticky } = useSticky();
    return (
        <>
            <header>
                <HeaderTop />
                <div id="header-sticky" className={`header__widget-area ${headerSticky ? 'sticky' : ''}`}>
                    <div className="container">
                        <div className="header__widget-main">
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
                                                <span>Bizimle İletişeme Geç</span>
                                                <h4><a href="tel:00211232000">00 211 232 000</a></h4>
                                            </div>
                                        </div>
                                        <div className="header__widget-info">
                                            <div className="header__widget-icon">
                                                <img src="assets/img/icon/header/header-icon-02.png" alt="icon not found" />
                                            </div>
                                            <div className="header__widget-content">
                                                <span>Email Address</span>
                                                <h4><a href="mailto:info@webmail.com">info@webmail.com</a></h4>
                                            </div>
                                        </div>
                                        <div className="header__right">
                                            <div className="header__button d-none d-lg-block">
                                                <Link href="/contact" ><div className="header__btn-1">Get Appointment<span><i className="fa-solid fa-angle-right"></i></span></div></Link>
                                            </div>
                                            <div className="header__widget-toggle d-lg-none">
                                                <span className="sidebar__toggle" onClick={() => setShowSidebar(true)}>
                                                    <div className="bar-icon">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden__header">
                                        <div className="hidden__header-inner">
                                            <div className="main-menu d-none d-lg-block">
                                                <nav id="mobile-menu">
                                                    <NavMenu />
                                                </nav>
                                            </div>
                                            <div className="header__button d-none d-xl-block">
                                                <Link href="/contact" ><div className="header__btn-1">Get Appointment<span><i className="fa-solid fa-angle-right"></i></span></div></Link>
                                            </div>
                                            <div className="header__toggle d-lg-none">
                                                <span className="sidebar__toggle" onClick={() => setShowSidebar(true)}>
                                                    <div className="bar-icon">
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
                <div className="header__area header__transparent">
                    <div className="container">
                        <div className="header__main-wrapper d-none d-lg-block">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-xl-2 col-lg-2 col-6">
                                    <div className="header__toggle" onClick={() => setShowSidebar(true)}>
                                        <button className="sidebar__toggle">
                                            <i className="flaticon-dots-menu"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                                    <div className="menu__main-wrapper d-flex justify-content-center">
                                        <div className="main-menu d-none d-none d-lg-block">
                                            <nav id="mobile-menu-2">
                                                <NavMenu />
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-6">
                                    <div className="header__right text-end">
                                        <div className={searchOpen ? "search__button search__open" : "search__button"}>
                                            <span className="search__toggle" onClick={() => { setSearchOpen(!searchOpen) }}>
                                                <i className="header-search__btn fa-regular fa-magnifying-glass"></i>
                                                <i className="header-search__close fa-regular fa-xmark"></i>
                                            </span>
                                            <div className="bd-search__form p-relative">
                                                <form action="#">
                                                    <input type="text" placeholder="Search here..." />
                                                    <button type="submit">
                                                        <i className="fa-regular fa-magnifying-glass"></i>
                                                    </button>
                                                </form>
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

export default Header;