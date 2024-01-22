import Wrapper from '../layout/wrapper';
import ServiceMain from '../components/service';
import MySeo from '../components/MySeo';

const index = () => {
  return (
    <Wrapper>
      <MySeo pageTitle={'Service'} />
      <ServiceMain />
    </Wrapper>
  );
};

export default index;