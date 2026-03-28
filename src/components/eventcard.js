import React from 'react';
import './eventcard.css';
import locationIcon from '../assets/icons/location.png';
import calendarIcon from '../assets/icons/calender.png';

const EventCard = ({ image, category, price, title, description, date, location }) => {
  return (
    <div className="event-card">
      <div className="card-image">
        <img src={image} alt={title} />
        <span className="category-badge">{category}</span>
        <span className="price-badge">{price}</span>
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-info">
          <p>
            <img src={calendarIcon} alt="date" className="icon" />
            {date}
          </p>
          <p>
            <img src={locationIcon} alt="location" className="icon" />
            {location}
          </p>
        </div>
        <button className="book-btn">Book Now →</button>
      </div>
    </div>
  );
};

export default EventCard;
