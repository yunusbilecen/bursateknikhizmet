import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import PriceMain from '../components/pricing';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Pricing'} />
      <PriceMain />
    </Wrapper>
  );
};

export default index;