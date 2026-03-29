import React from 'react';
import './hero.css';
import logo from '../assets/logo.png';
import heroBg from '../assets/herobackground.png';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';

    i18n.changeLanguage(newLang);

    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        
        </div>

        <ul className="nav-links">
          <li>{t('home')}</li>
          <li>{t('events')}</li>
          <li>{t('about')}</li>
          <li>{t('contact')}</li>
        </ul>

        <button className="lang-btn" onClick={toggleLanguage}>
          {i18n.language === 'en' ? 'AR' : 'EN'}
        </button>
      </nav>

      <div className="hero-content">
        <p className="badge">{t('badge')}</p>

        <h1>
          {t('heroTitle1')} <span>{t('heroTitle2')}</span> {t('heroTitle3')}
        </h1>

        <p className="subtext">{t('heroSubtext')}</p>

        <button className="cta-btn">{t('exploreBtn')}</button>

        <div className="stats">
          <div>
            <h3>50K+</h3>
            <p>{t('happyUsers')}</p>
          </div>
          <div>
            <h3>1000+</h3>
            <p>{t('eventsHosted')}</p>
          </div>
          <div>
            <h3>4.9</h3>
            <p>{t('avgRating')}</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;