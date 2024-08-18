import React, { Suspense, lazy, useState, useEffect } from 'react';
import Loading from '../../components/Loader/Loader'; // Adjust the path as needed

// Lazy load components
const Home = lazy(() => import('../../components/Home/Home'));
const About = lazy(() => import('../../components/About/About'));
const PastActivities = lazy(() => import('../../components/PastActivities/PastActivities'));
const Season = lazy(() => import('../../components/Season/Season'));
const Track = lazy(() => import('../../components/Track/Track'));
const Venue = lazy(() => import('../../components/Venue/Venue'));
const FAQ = lazy(() => import('../../components/FAQ/FAQ'));
const Footer = lazy(() => import('../../components/Footer/Footer'));
const Prize = lazy(() => import('../../components/Prize/Prize'));
const Sponsors = lazy(() => import('../../components/Sponsors/Sponsors'));
const Speakers = lazy(() => import('../../components/Speakers/Speakers'));

const Landing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay with setTimeout to show the loader
    setTimeout(() => {
      setLoading(false); // After 1500ms (1.5 seconds), setLoading(false) will hide the loader
    }, 1500);
  }, []); 

  return (
    <>
      {loading ? (
        <Loading /> // Display Loader component while loading is true
      ) : (
        <Suspense fallback={<Loading />}>
          <div>
            {/* Once loading is false, display the main content */}
            <div className="app-container">
              <Home />
              <About />
            </div>
            <PastActivities />
            <Season />
            <Track />
            <Venue />
            <Prize />
            <Sponsors />
            <Speakers />
            <FAQ />
            <Footer />
          </div>
        </Suspense>
      )}
    </>
  );
}

export default Landing;
