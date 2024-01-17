import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SEO from '../../components/seo';
import Footer from '../../layout/footers/footer';
import BlogDetailsArea from '../../components/blog-details/blog-details-area';
import blogList from '../../data/blog-data';
import HeaderThree from '../../layout/headers/header-three';

const BlogsDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [blog, setBlog] = useState({});


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)

    else (setBlog(blogList.find(item => item.id == id)))

    return () => {

    };
  }, [id]);

  return (
    <>
      <SEO pageTitle={'Team Details'} />
      <HeaderThree />
      <main>
        <BlogDetailsArea item={blog} />
      </main>
      <Footer footer_area="footer__area footer-bg pt-95" />
    </>
  );
};

export default BlogsDetails;