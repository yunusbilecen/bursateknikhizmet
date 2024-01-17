import Link from 'next/link';
import React from 'react';
import Sidebar from '../../components/common/sidebar';
import useGlobalContext from '../../hooks/use-context';
import useSticky from '../../hooks/use-sticky';
import HeaderTopTwo from './header-top-two';
import NavMenu from './navmenu';

const HeaderThree = () => {
    //for sidebar menu
    const { setShowSidebar } = useGlobalContext();
    //for sticky header
    const { headerSticky } = useSticky();
    return (
        <>
            <header>
                <div id="header-sticky" className={`header__area ${headerSticky ? 'sticky' : ''}`}>
                    <div className="header__main-wrapper-3">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-xl-2 col-lg-2 col-6">
                                    <div className="header__logo">
                                        <Link href="/" ><div><img src="/assets/img/logo/logo.png" alt="logo not found" /></div></Link>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-6">
                                    <div className="header__right-3 d-flex align-items-center justify-content-end">
                                        <div className="main-menu main-menu-3 d-none d-none d-lg-block">
                                            <nav id="mobile-menu">
                                                <NavMenu />
                                            </nav>
                                        </div>
                                        <div className="header__button d-none d-xxl-block mr-20">
                                            <Link href="/iletisim" ><div className="header__btn-1 s-2">Randevu Al</div></Link>
                                        </div>
                                        <div className="header__toggle style-2 d-none d-lg-block">
                                            <button className="sidebar__toggle" onClick={() => setShowSidebar(true)}><i className="flaticon-dots-menu"></i></button>
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
            </header>

            {/* sidebar start */}
            <Sidebar />
            {/* sidebar end */}
        </>
    );
};

export default HeaderThree;