import { Helmet } from 'react-helmet';
import Services from '../../components/Services/Services';

const Offerings = () => {


  if (window.pageYOffset > 0) {
    window.scrollTo(0, 0);
  }


  return (
    <>
      <Helmet>
        <title>Offerings || Explore Our Solutions: NuStartz Offerings</title>
        <meta property="og:title" content="Explore Our Solutions: NuStartz Offerings" />
        <meta property="og:description" content="Discover a range of tailored solutions and services designed to meet your needs. Dive into our offerings that empower and innovate, crafted to elevate your experience with NuStartz" />
        <meta property="og:image" content="../../../src/assets/Offerings/OfferingsBanner.png" />
        <meta property="og:url" content="https://www.nustartz.com/offerings" />
      </Helmet>
      <Services />
    </>
  );
};

export default Offerings;