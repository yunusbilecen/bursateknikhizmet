import MySeo from '../components/MySeo';
import Wrapper from '../layout/wrapper';
import CaseStudyMain from '../components/case-study';

const index = () => {
  return (
    <Wrapper>
      <MySeo pageTitle={'Case Study'} />
      <CaseStudyMain />
    </Wrapper>
  );
};

export default index;