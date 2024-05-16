import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "/logoLetters.png";
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();
  const isMenuOrLocation = location.pathname === "/menu" || location.pathname === "/location";

  return (
    <section className={`navbar ${isMenuOrLocation ? 'navbar-alt' : ''}`}>
      <img src={Logo} alt="Logo" className="logo" />
      <ul className="menuList">
        <li className="menuItem"><Link to="/">Quienes Somos</Link></li>
        <li className="menuItem"><Link to="/menu">Menú</Link></li>
        <li className="menuItem"><Link to="/location">Ubicación</Link></li>
      </ul>
    </section>
  );
}

export default NavBar;
