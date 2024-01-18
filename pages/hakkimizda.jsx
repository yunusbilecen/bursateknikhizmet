// /pages/hakkimizda/index.jsx
import React from 'react';
import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import AboutMain from '../components/about';

const Hakkimizda = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Hakkımızda'} />
      <AboutMain />
    </Wrapper>
  );
};

export default Hakkimizda;
