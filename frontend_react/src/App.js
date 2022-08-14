import React from 'react';

import { About, Footer, Header, Services, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;