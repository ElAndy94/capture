import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem link="/photography">Photography</NavigationItem>
    <NavigationItem link="/aboutMe">About Me</NavigationItem>
    <NavigationItem link="/tuition">Tuition</NavigationItem>
    <NavigationItem link="/store">Store</NavigationItem>
    <NavigationItem link="/contact">Contact</NavigationItem>
  </ul>
);

export default navigationItems;
