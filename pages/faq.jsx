import MySeo from '../components/MySeo';
import Wrapper from '../layout/wrapper';
import FaqMain from '../components/faq';

const index = () => {
  return (
    <Wrapper>
      <MySeo pageTitle={'Faq'} />
      <FaqMain />
    </Wrapper>
  );
};

export default index;