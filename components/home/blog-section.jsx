import Link from 'next/link';
import React from 'react';
import blogList from '../../data/blog-data';


const BlogSection = () => {
    return (
        <section className="news__area pt-120 pb-55">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-8 col-8">
                        <div className="section__title-one mb-50">
                            <span>{"//  News"}</span>
                            <h2>News & Insights</h2>
                        </div>
                    </div>
                    <div className="col-xl-4 col-4">
                        <div className="news__button mt-15 text-lg-end d-none d-md-block">
                            <Link href="/blog" ><div className="it__btn-3"><span>More News</span>
                                <i className="bdevs-btn-icon fas fa-angle-right" aria-hidden="true"></i></div></Link>
                        </div>
                    </div>
                </div>
                {blogList &&
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        {blogList.slice(0, 3).map((item, num) => (
                            <div className="col-xl-4 col-lg-6 col-md-6" key={num}>
                                <div className="news__singel-item mb-60">
                                    <div className="news__item-thumb mb-35">
                                        <Link href={`/blog-details/${item.id}`} ><div><img src={item.blogImg} alt="image not found" /></div></Link>
                                        <Link href={`/blog-details/${item.id}`} ><div className="news__tag">{item.blogTag}</div></Link>
                                    </div>
                                    <div className="news__item-content">
                                        <div className="news__item-meta mb-10">
                                            <ul>
                                                <li><i className={item.blogDateIcon}></i><span>{item.blogDate}</span></li>
                                                <li><Link href={`/blog-details/${item.id}`} ><div><i className={item.blogAuthorIcon}></i>{item.blogAuthor}</div></Link></li>
                                            </ul>
                                        </div>
                                        <h3 className="news__title"><Link href={`/blog-details/${item.id}`} ><div>{item.blogTitle}</div></Link></h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </section>
    );
};

export default BlogSection;