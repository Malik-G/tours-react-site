import React from 'react';
import navbarLogo from '../../logo1.svg';

//exports in the funcrtion's definition
export default function Navbar() {
   return (
      <nav className = "navbar" >
         <img src={navbarLogo} alt="EC Logo"/>
      </nav>
   )
}
