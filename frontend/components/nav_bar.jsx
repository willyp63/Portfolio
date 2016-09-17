import React from 'react';

const NavBar = React.createClass({
  componentDidMount () {
    // const el = React.findDOMNode(this);
    // TweenLite.to(el, 1, {top: '100px'});
  },
  render () {
    return (
      <header className='nav-bar'>
        <img src='/assets/portrait.jpg' alt='my portrait' className='portrait' />
        <h1 className='my-name'>Wil Pirino</h1>
        <h2 className='my-title'>Software Engineer</h2>
        <ul className='nav-list'>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Projects</li>
          <li className='nav-item'>Skills</li>
          <li className='nav-item'>Contact</li>
        </ul>
      </header>
    );
  }
});

export default NavBar;
