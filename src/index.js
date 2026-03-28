import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './components/hero';
import Events from './components/events';
import Categories from './components/categories';
import Why from './components/why';
import Booking from './components/booking';
import Newsletter from './components/newsletter';
import Preloader from './components/preloader';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <>
      <Hero />
      <Events />
      <Categories />
      <Why />
      <Booking />
      <Newsletter />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);