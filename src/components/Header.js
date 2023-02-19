import React from 'react';

function Header() {
  return (
    <header className="App-header">
      <h1 className="h1-header">Braxton Waxdeck</h1>
      <nav className='nav-bar'>
        <ul className='ul-header'>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li ><a id = 'contact-tag' href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;