
import Link from 'next/link';
import React from 'react';

const CaseNav = () => {
    return (
        <div className="case__nav-wrapper">
            <div className="case__nav-items">
                <div className="case__single">
                    <div className="case__thumb">
                        <Link href="/case-details"><span><img src="/assets/img/portfolio/case/01.jpg" alt="" width={300} height={400} /></span></Link>
                    </div>
                    <div className="case__content">
                        <span>Prev Case</span>
                        <h4 className="case__title"><Link href="/case-details" ><span>Tips On Minimalist</span></Link></h4>
                    </div>
                </div>
                <div className="dot__icon">
                    <a href="#"><i className="flaticon-dots-menu"></i></a>
                </div>
                <div className="case__single">
                    <div className="case__thumb">
                        <Link href="/case-details" ><span><img src="/assets/img/portfolio/case/02.jpg" alt="" width={300} height={400} /></span></Link>
                    </div>
                    <div className="case__content">
                        <span>Next Case</span>
                        <h4 className="case__title"><Link href="/case-details" ><span>Less Is More</span></Link></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseNav;