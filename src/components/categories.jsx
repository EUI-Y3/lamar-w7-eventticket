import React from 'react';
import './categories.css';
import { useTranslation } from 'react-i18next';

import musicIcon from '../assets/icons/music.png';
import workshopsIcon from '../assets/icons/workshops.png';
import talksIcon from '../assets/icons/talks.png';
import theatreIcon from '../assets/icons/theatre.png';
import communityIcon from '../assets/icons/community.png';

const Categories = () => {
  const { t } = useTranslation();

  const categoriesData = [
    {
      id: 1,
      icon: musicIcon,
      name: t('music'),
      count: `120+ ${t('eventsHosted')}`,
    },
    {
      id: 2,
      icon: workshopsIcon,
      name: t('workshops'),
      count: `85+ ${t('eventsHosted')}`,
    },
    {
      id: 3,
      icon: talksIcon,
      name: t('talks'),
      count: `65+ ${t('eventsHosted')}`,
    },
    {
      id: 4,
      icon: theatreIcon,
      name: t('theatre'),
      count: `45+ ${t('eventsHosted')}`,
    },
    {
      id: 5,
      icon: communityIcon,
      name: t('community'),
      count: `95+ ${t('eventsHosted')}`,
    },
  ];

  return (
    <section className="categories">
      <h2>{t('eventCategories')}</h2>
      <div className="underline-cat"></div>

      <div className="categories-grid">
        {categoriesData.map((cat) => (
          <div className="category-card" key={cat.id}>
            <div className="category-icon">
              <img src={cat.icon} alt={cat.name} />
            </div>

            <h3>{cat.name}</h3>
            <p>{cat.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;