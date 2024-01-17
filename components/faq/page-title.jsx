import React from 'react';

const PageTitle = () => {
    return (
        <section className="faq__banner-area d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="faq__info-warapper">
                            <div className="faq__banner-title">
                                <h2>Welcome to our support center!</h2>
                            </div>
                            <form action="#">
                                <div className="faq__search-input">
                                    <input type="text" placeholder="Search it sulation..."/>
                                        <button>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="faq__banner-thumb">
                    <img src="/assets/img/faq/faq-banner.png" alt="image not found"/>
                </div>
            </div>
        </section>
    );
};

export default PageTitle;