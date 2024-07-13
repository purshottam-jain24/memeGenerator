import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div id='navbar'>
      <div id="nav-left-div">
        <img src="/TrollFace.png" alt="TrollFace" />
        <h1>Meme Generator</h1>
      </div>
      <div id="nav-right-div">React Course - Project 3</div>
    </div>
  );
};

export default Navbar;
