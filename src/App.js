import React from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import VenueInfo from './components/venueInfo/VenueInfo';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';
import Location from './components/location/Location';
import Footer from './components/header_footer/Footer';

function App() {
  return (
    <div className="App" style={{ height: '1000px', backgroundColor: 'blue' }}>
      <Element>
        <Header />
      </Element>
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="info">
        <VenueInfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Element>
        <Footer />
      </Element>
    </div>
  );
}

export default App;
