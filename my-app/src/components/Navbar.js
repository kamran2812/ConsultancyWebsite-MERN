import React, { useState } from 'react';
import './Navbar.css';
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav id='navi' className="navbar fixed-top navbar-expand-lg px-4 py-0">
        <div className="container-fluid">
          <Link className="navbar-brand logotext py-0" to="/">
            <img src={logo} className="mt-0 my-0 py-0 logo" alt="..." />
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            {isMenuOpen ? (
              <i class="fa-solid fa-x cross"></i> // cross icon
            ) : (
              <span className="navbar-toggler-icon"></span> // default icon
            )}
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={closeMenu}>
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Work Destinations
                </a>
                <ul className="dropdown-menu">
                  <li onClick={closeMenu}><Link className="dropdown-item" to="/in-UK">UK</Link></li>
                  <li onClick={closeMenu}><Link className="dropdown-item" to="/in-slovakia">Slovakia</Link></li>
                  <li onClick={closeMenu}><Link className="dropdown-item" to="/in-hungary">Hungary</Link></li>
                  <li onClick={closeMenu}><Link className="dropdown-item" to="/in-PorTugal">Portugal</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Study Destinations
                </a>
                <ul className="dropdown-menu">
                  <li onClick={closeMenu}><Link className="dropdown-item" to="/united-kindom">UK</Link></li>
                  <li onClick={closeMenu}><Link className="dropdown-item" to="/sweden">Sweden</Link></li>
                  <li onClick={closeMenu}><Link className="dropdown-item" to="/hungary">Hungary</Link></li>
                  <li onClick={closeMenu}><Link className="dropdown-item" to="/ireland">Ireland</Link></li>
                  <li onClick={closeMenu}><Link className="dropdown-item" to="/PorTugal">Portugal</Link></li>
                  <li onClick={closeMenu}><Link className="dropdown-item" to="/canada">Canada</Link></li>
                  <li onClick={closeMenu}><Link className="dropdown-item" to="/austrailia">Australia</Link></li>
                </ul>
        </li>
        <li className="nav-item" onClick={closeMenu}>
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <Link className="nav-link" to="/FAQs">FAQs</Link>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
