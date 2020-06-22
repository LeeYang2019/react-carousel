import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured/Featured';

function App() {
  return (
    <div className="App" style={{ height: '1000px', backgroundColor: 'green' }}>
      <Header />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
