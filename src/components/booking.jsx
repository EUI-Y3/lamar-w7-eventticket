
import React, { useState } from 'react';
import './booking.css';
import { useTranslation } from 'react-i18next';

const Booking = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tickets: 1,
    event: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert(`${t('completeBooking')} - ${formData.name}!`);
  };

  return (
    <section className="booking">
      <h2>{t('bookTickets')}</h2>
      <div className="booking-underline"></div>

      <div className="booking-form">
        <div className="form-group">
          <label>{t('fullName')}</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>{t('emailAddress')}</label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>{t('numberOfTickets')}</label>
          <input
            type="number"
            name="tickets"
            min="1"
            value={formData.tickets}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>{t('selectEvent')}</label>
          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
          >
            <option value="">-- {t('selectEvent')} --</option>
            <option value="summer-music">Summer Music</option>
            <option value="edm-night">Electronic Dance Night</option>
            <option value="design-workshop">Creative Design Workshop</option>
            <option value="tedx">TEDx Innovation Summit</option>
            <option value="broadway">Broadway Night</option>
            <option value="art-festival">Community Art Festival</option>
          </select>
        </div>

        <button className="booking-btn" onClick={handleSubmit}>
          {t('completeBooking')}
        </button>
      </div>
    </section>
  );
};

export default Booking;