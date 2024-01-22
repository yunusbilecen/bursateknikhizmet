import Wrapper from '../layout/wrapper';
import TeamMain from '../components/team';
import MySeo from '../components/MySeo';

const index = () => {
  return (
    <Wrapper>
      <MySeo pageTitle={'Team'} />
      <TeamMain />
    </Wrapper>
  );
};

export default index;