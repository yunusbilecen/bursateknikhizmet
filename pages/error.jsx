import Wrapper from '../layout/wrapper';
import ErrorMain from '../components/error';
import MySeo from '../components/MySeo';

const index = () => {
  return (
    <Wrapper>
      <MySeo pageTitle={'Faq'} />
      <ErrorMain />
    </Wrapper>
  );
};

export default index;