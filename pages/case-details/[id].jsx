import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CaseDetailsArea from '../../components/case-details/case-details-area';
import caseList from '../../data/case-data';
import Footer from '../../layout/footers/footer';
import HeaderThree from '../../layout/headers/header-three';
import MySeo from '../../components/MySeo';

const CasesDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [cases, setCases] = useState({});


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)

    else (setCases(caseList.find(item => item.id == id)))

    return () => {

    };
  }, [id]);

  return (
    <>
      <MySeo pageTitle={'Case Details'} />
      <HeaderThree />
      <main>
        <CaseDetailsArea item={cases} />
      </main>
      <Footer footer_area="footer__area footer-bg pt-95" />
    </>
  );
};

export default CasesDetails;