import React from 'react';
import CaseDetailsMain from '../../components/case-details'
import MySeo from '../../components/MySeo';

const index = () => {
    return (
        <>
            <MySeo pageTitle={'Case Details'} />
            <CaseDetailsMain />
        </>
    );
};

export default index;