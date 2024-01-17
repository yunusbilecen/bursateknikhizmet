import Link from 'next/link';
import React from 'react';
import blogList from '../../data/blog-data';

const BlogSectionThree = () => {
    return (
        <section className="news-area pb-55">
            <div className="news__style-3">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="section__title-wrapper text-center mb-20">
                            <div className="section__subtitle-3">
                                <p className="gradient__subtitle">News Feed<span></span></p>
                            </div>
                            <div className="section__title-3">
                                <h2 className="mb-20">Blog Insights</h2>
                            </div>
                        </div>
                    </div>
                    {blogList &&
                        <div className="row wow fadeInUp" data-wow-delay=".3s">
                            {blogList.slice(8, 11).map((item, num) => (
                                <div className="col-xl-4 col-lg-6 col-md-6" key={num}>
                                    <div className="news__singel-item mb-60">
                                        <div className="news__item-thumb w-img mb-35">
                                            <Link href={`/blog-details/${item.id}`} ><div><img src={item.blogImg} alt="image not found" /></div></Link>
                                        </div>
                                        <div className="news__item-content">
                                            <Link href="/blog" ><a className="news__tag">{item.blogTag}</a></Link>
                                            <div className="news__item-meta mb-10">
                                                <ul>
                                                    <li><i className={item.blogDateIcon}></i><span>{item.blogDate}</span></li>
                                                    <li><Link href={`/blog-details/${item.id}`} ><div><i className={item.blogAuthorIcon}></i>{item.blogAuthor}</div></Link></li>
                                                </ul>
                                            </div>
                                            <h3 className="news__title"><Link href={`/blog-details/${item.id}`} ><div>{item.blogTitle}</div></Link></h3>
                                        </div>
                                        <div className="news__button mt-25">
                                            <Link href={`/blog-details/${item.id}`} ><div className="news__btn">{item.blogBtn}</div></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default BlogSectionThree;