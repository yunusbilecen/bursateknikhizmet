import Wrapper from '../layout/wrapper';
import ContactMain from '../components/contact';
import MySeo from '../components/MySeo';

const index = () => {
  return (
    <Wrapper>
      <MySeo pageTitle={'Contact'} />
      <ContactMain />
    </Wrapper>
  );
};

export default index;