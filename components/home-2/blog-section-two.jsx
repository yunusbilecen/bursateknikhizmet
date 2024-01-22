import Link from 'next/link';
import React from 'react';
import blogList from '../../data/blog-data';


const BlogSectionTwo = () => {
    return (
        <section className="news__area pt-120 pb-135">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-12">
                        <div className="section__title-two s-2 text-center mb-45">
                            <span>Insights</span>
                            <h2>Blog & Insights</h2>
                        </div>
                    </div>
                </div>
                {blogList &&
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        {blogList.slice(3, 6).map((item, num) => (
                            <div className="col-xl-4 col-lg-6 col-md-6" key={num}>
                                <div className="news__item-2 mb-30">
                                    <div className="news__thumb-2 w-img">
                                        <Link href={`/blog-details/${item.id}`}><div><img src={item.blogImg} alt="image not found" /></div></Link>
                                    </div>
                                    <div className="news__content-2">
                                        <div className="news__meta">
                                            <span><i className={item.blogDateIcon}></i>{item.blogDate}</span>
                                            <span><Link href={`/blog-details/${item.id}`} ><div><i className={item.blogAuthorIcon}></i>{item.blogAuthor}</div></Link></span>
                                        </div>
                                        <h3><Link href={`/blog-details/${item.id}`} ><div>{item.blogTitle}</div></Link></h3>
                                        <p>{item.blogDesc}</p>
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

export default BlogSectionTwo;