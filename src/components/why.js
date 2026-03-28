import React from 'react';
import './why.css';
import fastIcon from '../assets/icons/fast.png';
import trustIcon from '../assets/icons/trust.png';
import mailIcon from '../assets/icons/mail.png';
import pricesIcon from '../assets/icons/prices.png';

const features = [
  { id: 1, icon: fastIcon, title: 'Easy Booking', desc: 'Book your tickets in just a few clicks' },
  { id: 2, icon: trustIcon, title: 'Trusted Events', desc: 'All events are verified and secure' },
  { id: 3, icon: mailIcon, title: 'Instant Confirmation', desc: 'Get your tickets immediately via email' },
  { id: 4, icon: pricesIcon, title: 'Best Prices', desc: 'Exclusive deals and student discounts' },
];

const stats = [
  { id: 1, value: '98%', label: 'Customer Satisfaction' },
  { id: 2, value: '24/7', label: 'Support Available' },
  { id: 3, value: '100K+', label: 'Tickets Sold' },
  { id: 4, value: '500+', label: 'Partner Venues' },
];

const Why = () => {
  return (
    <section className="why">
      <h2>Why Choose Our Platform?</h2>
      <p className="why-subtext">We make it easy to discover and attend the best events in your city</p>
      <div className="why-underline"></div>

      <div className="why-grid">
        {features.map((feature) => (
          <div className="why-card" key={feature.id}>
            <div className="why-icon">
              <img src={feature.icon} alt={feature.title} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="why-stats">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.id}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;