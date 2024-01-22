import React from 'react';
import SEO from '../../components/SEO';
import CaseDetailsMain from '../../components/case-details'

const index = () => {
    return (
        <>
            <SEO pageTitle={'Case Details'} />
            <CaseDetailsMain />
        </>
    );
};

export default index;