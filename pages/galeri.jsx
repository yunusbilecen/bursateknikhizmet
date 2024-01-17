import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import CaseStudyMain from '../components/case-study';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Case Study'} />
      <CaseStudyMain />
    </Wrapper>
  );
};

export default index;