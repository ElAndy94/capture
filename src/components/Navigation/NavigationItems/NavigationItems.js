import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = () => (
  <ul className="NavigationItems">
  <NavigationItem link="/dashboard">Dashboard</NavigationItem>
    <NavigationItem link="/photography">Photography</NavigationItem>
    <NavigationItem link="/aboutMe">About Me</NavigationItem>
    <NavigationItem link="/tuition">Tuition</NavigationItem>
    <NavigationItem link="/shop">Shop</NavigationItem>
    <NavigationItem link="/contact">Contact</NavigationItem>
  </ul>
);

export default navigationItems;
