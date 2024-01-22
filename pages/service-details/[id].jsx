import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../../layout/footers/footer';
import ServiceDetailsArea from '../../components/service-details/service-details-area';
import ServicesList from '../../data/services-data';
import HeaderThree from '../../layout/headers/header-three';
import MySeo from '../../components/MySeo';

const ServicesDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [service, setService] = useState({});


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)

    else (setService(ServicesList.find(item => item.id == id)))

    return () => {

    };
  }, [id]);

  return (
    <>
      <MySeo pageTitle={'Service Details'} />
      <HeaderThree />

      <main >
        <ServiceDetailsArea item={service} />
      </main>
      <Footer footer_area="footer__area footer-bg pt-95" />
    </>
  );
};

export default ServicesDetails;