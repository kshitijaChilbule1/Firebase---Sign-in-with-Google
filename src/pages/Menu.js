import React from 'react';
import NavbarComp from '../components/NavbarComp';
import List from '../components/List';
import RestaurantSearch from '../components/RestaurantSearch';

const Menu = () => {
  return (
    <div>
      <NavbarComp/>
      <RestaurantSearch/>
      <List/>
    </div>
  )
}

export default Menu
