import Wrapper from '../layout/wrapper';
import HomeTwoMain from '../components/home-2';
import MySeo from '../components/MySeo';

const index = () => {
  return (
    <Wrapper>
      <MySeo pageTitle={'Home Two'} />
      <HomeTwoMain />
    </Wrapper>
  );
};

export default index;