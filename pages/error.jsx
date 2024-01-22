import SEO from '../components/SEO';
import Wrapper from '../layout/wrapper';
import ErrorMain from '../components/error';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Faq'} />
      <ErrorMain />
    </Wrapper>
  );
};

export default index;