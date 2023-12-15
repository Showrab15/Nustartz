
import { Helmet } from 'react-helmet';
import OurTeam from '../../components/OurTeam/OurTeam';

const AboutUs = () => {
    return (
        <div>
  <Helmet>
        <title>About Us - NuStartz</title>
        <meta property="og:title" content="Discover NuStartz: Our Story and Mission" />
        <meta property="og:description" content="Learn who we are, what drives us, and our journey. Explore the heart behind NuStartz as we share our passion for innovation and growth" />
        <meta property="og:image" content="../../../src/assets/AboutUsBanner.png" />
        <meta property="og:url" content="https://www.nustartz.com/about-Us" />
      </Helmet>
                 <OurTeam/> 
           
        </div>
    );
};

export default AboutUs;