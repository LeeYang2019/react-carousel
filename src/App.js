import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';

function App() {
  return (
    <div className="App" style={{ height: '1000px', backgroundColor: 'green' }}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
