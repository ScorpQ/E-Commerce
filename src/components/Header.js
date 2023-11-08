import { NavLink } from 'react-router-dom';
import React from 'react'
export default function Header() {
  return (
    <div style={{backgroundColor: 'grey'}}>
      <NavLink to='/'>Anasayfa</NavLink>
      <NavLink to='/shop'>Shop</NavLink>
      <NavLink to='/cart'>Card</NavLink>
    </div>
  );
}
