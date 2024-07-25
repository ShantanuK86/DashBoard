// src/components/Header/Header.js

import './Header.css';
import React from 'react';

const Header = ({ title }) => {
  return (
    <header >
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
