import React from 'react';

const Newsletter = () => {
    return (
        <div className="newslatter__area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="newslatter__wrapper">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-5">
                                    <div className="section__title-one">
                                        <span>{"//  newsletter"}</span>
                                        <h2>User feedbacks</h2>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7">
                                    <div className="newslatter__form-wrapper">
                                        <form>
                                            <div className="newslatter__input">
                                                <input type="email" placeholder="Email address"/>
                                                    <i className="fa-solid fa-envelope-open"></i>
                                                    <button>newsletter</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;