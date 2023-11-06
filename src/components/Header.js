import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <NavLink to='/'>Anasayfa</NavLink>
      <NavLink to='/shop'>Shop</NavLink>
      <NavLink to='/cart'>Card</NavLink>
    </>
  );
}
