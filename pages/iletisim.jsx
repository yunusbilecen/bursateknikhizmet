// pages/iletisim.jsx
import { useEffect, useState } from 'react';
import Wrapper from '../layout/wrapper';
import ContactMain from '../components/contact';
import MySeo from '../components/MySeo';
import prisma from '../lib/prisma';

const Iletisim = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const comp = await prisma.company.findMany();
        setCompanies(comp);
        console.log(comp)
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <Wrapper>
      <MySeo pageTitle={'Contact'} />
      <ContactMain companyData={companies} />
    </Wrapper>
  );
};

export default Iletisim;
