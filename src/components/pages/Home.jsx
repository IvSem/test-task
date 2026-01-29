import BackersPartners from '../sections/BackersPartners/BackersPartners';
import EngineStakenova from '../sections/EngineStakenova/EngineStakenova';
import HeroSection from '../sections/HeroSection/HeroSection';
import HowToEarn from '../sections/HowToEarn/HowToEarn';
import YeildSources from '../sections/YeildSources/YeildSources';

const Home = () => {
  return (
    <>
      <HeroSection />
      <BackersPartners />
      <YeildSources />
      <HowToEarn />
      <EngineStakenova />
    </>
  );
};

export default Home;
