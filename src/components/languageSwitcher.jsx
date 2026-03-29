import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeToEnglish = () => {
    i18n.changeLanguage('en');
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
  };

  const changeToArabic = () => {
    i18n.changeLanguage('ar');
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  };

  return (
    <div className="lang-switcher">
      <button onClick={changeToEnglish}>EN</button>
      <button onClick={changeToArabic}>AR</button>
    </div>
  );
};

export default LanguageSwitcher;