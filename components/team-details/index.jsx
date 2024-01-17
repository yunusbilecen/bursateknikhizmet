import React from 'react';
import TeamList from '../../data/team-data';
import Footer from '../../layout/footers/footer';
import HeaderThree from '../../layout/headers/header-three';
import TeamDetailsArea from './team-details-area';

const item = TeamList[0]

const index = () => {
    return (
        <>
            <HeaderThree />
            <main>
                <TeamDetailsArea item={item} />
            </main>
            <Footer footer_area="footer__area footer-bg pt-95" />
        </>
    );
};

export default index;