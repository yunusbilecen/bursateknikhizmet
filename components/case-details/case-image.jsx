
import React from 'react';

const CaseImage = () => {
    return (
        <div className="case__sub-image">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="singel__sub-image mb-30">
                        <img src="/assets/img/portfolio/case-sub-1.jpg" alt="" width={410} height={410} />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="singel__sub-image mb-30">
                        <img src="/assets/img/portfolio/case-sub-2.jpg" alt="" width={410} height={410} />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="singel__sub-image mb-30">
                        <img src="/assets/img/portfolio/case-sub-3.jpg" alt="" width={410} height={410} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseImage;