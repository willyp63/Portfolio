import React from 'react';
import {Link} from 'react-router';

const NavBar = React.createClass({
  render () {
    return (
      <header className='nav-bar'>
        <h1 className='my-name'>Wil Pirino</h1>
        <ul className='nav-list'>
          <li className='nav-item'><Link to={'/bio'}>Bio</Link></li>
          <li className='nav-item'><Link to={'/projects'}>Projects</Link></li>
          <li className='nav-item'><Link to={'/skills'}>Skills</Link></li>
          <li className='nav-item'><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </header>
    );
  }
});

export default NavBar;
