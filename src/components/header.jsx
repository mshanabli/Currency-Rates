import React from 'react';
import { Navbar } from './shared/navbar';

export const Header = () => (
  <Navbar
    brandName="Currency Rates"
    navItems={[
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/rates', label: 'Rates' },
    ]}
  />
);
