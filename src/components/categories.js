import React from 'react';
import './categories.css';
import musicIcon from '../assets/icons/music.png';
import workshopsIcon from '../assets/icons/workshops.png';
import talksIcon from '../assets/icons/talks.png';
import theatreIcon from '../assets/icons/theatre.png';
import communityIcon from '../assets/icons/community.png';

const categoriesData = [
  { id: 1, icon: musicIcon, name: 'Music', count: '120+ Events' },
  { id: 2, icon: workshopsIcon, name: 'Workshops', count: '85+ Events' },
  { id: 3, icon: talksIcon, name: 'Talks', count: '65+ Events' },
  { id: 4, icon: theatreIcon, name: 'Theatre', count: '45+ Events' },
  { id: 5, icon: communityIcon, name: 'Community', count: '95+ Events' },
];

const Categories = () => {
  return (
    <section className="categories">
      <h2>Event Categories</h2>
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