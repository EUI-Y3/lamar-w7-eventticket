import React from 'react';
import EventCard from './eventcard';
import './events.css';
import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';
import event4 from '../assets/event4.png';
import event5 from '../assets/event5.png';
import event6 from '../assets/event6.png';

const eventsData = [
  {
    id: 1,
    image: event1,
    category: 'Music',
    price: '$45',
    title: 'Summer Music',
    description: 'Experience an unforgettable night with top artists from around the world.',
    date: 'April 15, 2026',
    location: 'Central Park Arena',
  },
  {
    id: 2,
    image: event2,
    category: 'Music',
    price: '$35',
    title: 'Electronic Dance Night',
    description: 'Dance all night to the best EDM tracks with renowned DJs.',
    date: 'April 20, 2026',
    location: 'Downtown Club',
  },
  {
    id: 3,
    image: event3,
    category: 'Workshop',
    price: '$25',
    title: 'Creative Design Workshop',
    description: 'Learn from industry experts and enhance your creative skills.',
    date: 'April 25, 2026',
    location: 'Innovation Hub',
  },
  {
    id: 4,
    image: event4,
    category: 'Talk',
    price: '$20',
    title: 'TEDx Innovation Summit',
    description: 'Inspiring talks from changemakers and innovators.',
    date: 'May 5, 2026',
    location: 'Convention Center',
  },
  {
    id: 5,
    image: event5,
    category: 'Theatre',
    price: '$55',
    title: 'Broadway Night',
    description: 'A spectacular theatrical performance you will never forget.',
    date: 'May 10, 2026',
    location: 'Grand Theatre',
  },
  {
    id: 6,
    image: event6,
    category: 'Community',
    price: 'Free',
    title: 'Community Art Festival',
    description: 'Celebrate local artists and community culture together.',
    date: 'May 15, 2026',
    location: 'City Square',
  },
];

const Events = () => {
  return (
    <section className="events">
      <h2>Upcoming Events</h2>
      <div className="underline"></div>
      <div className="events-grid">
        {eventsData.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
};

export default Events;