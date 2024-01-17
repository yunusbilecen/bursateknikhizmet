import React from 'react';
import SEO from '../../components/seo';
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