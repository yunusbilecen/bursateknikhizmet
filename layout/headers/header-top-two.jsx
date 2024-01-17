import Link from 'next/link';
import React from 'react';

const HeaderTopTwo = () => {
    return (
        <div className="topbar__style-2 d-none d-sm-block">
            <div className="header-top__area ">
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
                                <div className="topbar__text">
                                    <p><strong>Open Hour:</strong> Mon - Fri: 8.00 am - 6.00 pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopTwo;