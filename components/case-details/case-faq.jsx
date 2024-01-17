import React from 'react';

const CaseFaq = () => {
    return (
        <div className="case__faq-wrapper">
            <h4>some question answers</h4>
            <p className="mb-35">Still not convinced that gaming is good for you? That’s understandable, considering
                concerns
                long raised by parents that
                include the treatment of women social gaming, violence in
                games and gaming addiction. For more information, explore the Safer Gaming Guide from the Family
                Online Safety
                Institute.</p>
            <div className="accordion" id="accordionExample">
                <div className="row custom-gx-5">
                    <div className="col-lg-6">
                        <div className="bd-faq__accordion mb-30">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Appropriate for your specific business
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>From finance, retail, and travel, to social media, cybersecurity, ad
                                            tech, & more, market leaders are leveraging web data to maintain
                                            their advantage. Discover how it can work for you.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Design & development troubleshooting
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>From finance, retail, and travel, to social media, cybersecurity, ad
                                            tech, & more, market leaders are leveraging web data to maintain
                                            their advantage. Discover how it can work for you.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Online support & action
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>From finance, retail, and travel, to social media, cybersecurity, ad
                                            tech, & more, market leaders are leveraging web data to maintain
                                            their advantage. Discover how it can work for you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bd-faq__accordion mb-30">
                            <div className="accordion" id="accordionExample-2">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            Appropriate for your specific business
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                        aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>From finance, retail, and travel, to social media, cybersecurity, ad
                                                tech, & more, market leaders are leveraging web data to maintain
                                                their advantage. Discover how it can work for you.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Design & development troubleshooting
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>From finance, retail, and travel, to social media, cybersecurity, ad
                                                tech, & more, market leaders are leveraging web data to maintain
                                                their advantage. Discover how it can work for you.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            Online support & action
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>From finance, retail, and travel, to social media, cybersecurity, ad
                                                tech, & more, market leaders are leveraging web data to maintain
                                                their advantage. Discover how it can work for you.</p>
                                        </div>
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

export default CaseFaq;