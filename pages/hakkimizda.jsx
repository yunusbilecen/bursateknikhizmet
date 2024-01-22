// /pages/hakkimizda/index.jsx
import React from 'react';
import Wrapper from '../layout/wrapper';
import AboutMain from '../components/about';
import MySeo from '../components/MySeo';

const Hakkimizda = () => {
  return (
    <Wrapper>
      <MySeo pageTitle={'Hakkımızda'} />
      <AboutMain />
    </Wrapper>
  );
};

export default Hakkimizda;
