import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import VenueInfo from './components/venueInfo/VenueInfo';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';
import Location from './components/location/Location';

function App() {
  return (
    <div className="App" style={{ height: '1000px', backgroundColor: 'blue' }}>
      <Header />
      <Featured />
      <VenueInfo />
      <Highlights />
      <Pricing />
      <Location />
    </div>
  );
}

export default App;
