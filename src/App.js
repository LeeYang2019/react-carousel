import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured/Featured';
import VenueInfo from './components/venueInfo/VenueInfo';
import Highlights from './components/highlights/Highlights';

function App() {
  return (
    <div className="App" style={{ height: '1000px', backgroundColor: 'blue' }}>
      <Header />
      <Featured />
      <VenueInfo />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;
