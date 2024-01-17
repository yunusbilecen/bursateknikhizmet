import React from 'react';

const Pagination = () => {
    return (
        <div className="col-12">
            <div className="bd-basic__pagination d-flex align-items-center">
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-arrow-left-long"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">1</a>
                        </li>
                        <li>
                            <span className="current">2</span>
                        </li>
                        <li>
                            <a href="#">3</a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Pagination;