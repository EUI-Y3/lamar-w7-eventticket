import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './components/hero';
import Events from './components/events';
const Home = () => {
  return (
    <>
      <Hero />
      <Events />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);