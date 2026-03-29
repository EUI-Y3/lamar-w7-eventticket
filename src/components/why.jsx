import React from 'react';
import './why.css';
import { useTranslation } from 'react-i18next';
import fastIcon from '../assets/icons/fast.png';
import trustIcon from '../assets/icons/trust.png';
import mailIcon from '../assets/icons/mail.png';
import pricesIcon from '../assets/icons/prices.png';

const Why = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      icon: fastIcon,
      title: t('easyBooking'),
      desc: t('easyBookingDesc'),
    },
    {
      id: 2,
      icon: trustIcon,
      title: t('trustedEvents'),
      desc: t('trustedEventsDesc'),
    },
    {
      id: 3,
      icon: mailIcon,
      title: t('instantConfirmation'),
      desc: t('instantConfirmationDesc'),
    },
    {
      id: 4,
      icon: pricesIcon,
      title: t('bestPrices'),
      desc: t('bestPricesDesc'),
    },
  ];

  const stats = [
    {
      id: 1,
      value: '98%',
      label: t('whySubtext'),
    },
    {
      id: 2,
      value: '24/7',
      label: t('stayUpdated'),
    },
    {
      id: 3,
      value: '100K+',
      label: t('eventsHosted'),
    },
    {
      id: 4,
      value: '500+',
      label: t('eventCategories'),
    },
  ];

  return (
    <section className="why">
      <h2>{t('whyTitle')}</h2>
      <p className="why-subtext">{t('whySubtext')}</p>
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