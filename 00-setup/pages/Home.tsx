// import { useTranslation } from 'react-i18next';
import Hero from './homePage/Hero';
import About from './homePage/About';
import Services from './homePage/Services';
import { useEffect } from 'react';

function Home() {
  // const { t } = useTranslation();
  useEffect(() => {
    document.title = 'Marine Asset Finders';
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Services />
    </>
  );
}
export default Home;

//  src="https://dummyimage.com/720x600"
