import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './components/hero';
import Events from './components/events';
import Categories from './components/categories';
import Why from './components/why';

const Home = () => {
  return (
    <>
      <Hero />
      <Events />
      <Categories />
      <Why />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);