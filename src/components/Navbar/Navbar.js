import React from 'react';
import navbarLogo from '../../logo1.png';
import './navbar.scss';

//exports in the funcrtion's definition
export default function Navbar() {
   return (
      <nav className="navbar" >
         <img src={navbarLogo} alt="EC Logo" />
         <ul className="nav-links">
            <li> <a href="/" className="nav-link">Home</a> </li>
            <li> <a href="/" className="nav-link">Tours</a> </li>
            <li> <a href="/" className="nav-link">About</a> </li>
         </ul>
      </nav>
   )
}
