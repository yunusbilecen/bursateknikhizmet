import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SEO from '../../components/seo';
import TeamList from '../../data/team-data';
import Footer from '../../layout/footers/footer';
import TeamDetailsArea from '../../components/team-details/team-details-area'
import HeaderThree from '../../layout/headers/header-three';

const TeamsDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [team, setTeam] = useState({});


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)

    else (setTeam(TeamList.find(item => item.id == id)))

    return () => {

    };
  }, [id]);

  return (
    <>
      <SEO pageTitle={'Team Details'} />
      <HeaderThree />
      <main>
        <TeamDetailsArea item={team} />
      </main>
      <Footer footer_area="footer__area footer-bg pt-95" />
    </>
  );
};

export default TeamsDetails;