import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/icons/profile.svg'
import home from '../../assets/icons/home.svg'

export const NavBar = () => {
  const pages = [
    { page: 'Home', path: '/', icon: home },
    { page: 'About', path: '/About', icon: profile }
  ];
  return (
    <nav>
      <div className="pages">
        {pages.map((item, index) => (
          <Link key={index} to={item.path} className='page' title={item.page}>
            <img src={item.icon} alt={item.page} className="icon" />
          </Link>
        ))}
      </div>
    </nav>
  );
};