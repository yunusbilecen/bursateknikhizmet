import Link from 'next/link';
import React from 'react';

const HeaderTop = () => {
    return (
        <div className="header-top__area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-4 col-4">
                        <div className="topbar__link">
                            <Link href="/faq" ><div>Faq</div></Link>
                            <Link href="/case-study" ><div>Case</div></Link>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-8">
                        <div className="topbar__right d-flex align-items-center justify-content-end">
                            <div className="tobar__social d-none d-md-block">
                                <div className="topbar__social">
                                    <ul>
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header__lang p-relative pl-40">
                                <span className="header__lang-selected">English</span>
                                <ul className="header__lang-list">
                                    <li>Spanish</li>
                                    <li>Portugese</li>
                                    <li>American</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;