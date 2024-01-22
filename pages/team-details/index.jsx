import React from 'react';
import TeamDetailsMain from '../../components/team-details'
import MySeo from '../../components/MySeo';

const index = () => {
    return (
        <>
            <MySeo pageTitle={'Team Details'} />
            <TeamDetailsMain />
        </>
    );
};

export default index;