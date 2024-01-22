import React from 'react';
import ServiceDetailsMain from '../../components/service-details'
import MySeo from '../../components/MySeo';

const index = () => {
    return (
        <>
            <MySeo pageTitle={'Service Details'} />
            <ServiceDetailsMain />
        </>
    );
};

export default index;