import React, { useState } from 'react';
import './newsletter.css';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`${t('subscribe')} - ${email}!`);
      setEmail('');
    }
  };

  return (
    <section className="newsletter">
      <h2>{t('stayUpdated')}</h2>
      <p className="newsletter-subtext">{t('newsletterSubtext')}</p>

      <div className="newsletter-form">
        <input
          type="email"
          placeholder={t('enterEmail')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>{t('subscribe')}</button>
      </div>

      <p className="newsletter-privacy">{t('privacy')}</p>

      <div className="newsletter-stats">
        <div>
          <h3>10K+</h3>
          <p>{t('subscribers')}</p>
        </div>
        <div>
          <h3>Weekly</h3>
          <p>{t('updates')}</p>
        </div>
        <div>
          <h3>100%</h3>
          <p>{t('free')}</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;