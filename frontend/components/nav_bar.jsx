import React from 'react';
import ScrollableNavList from './scrollable_nav_list';

const NavBar = React.createClass({
  componentWillMount () {
    this.navItemNames = ['about', 'projects', 'skills', 'contact'];
    this.navItemTargetIds = ['about-start', 'projects-start', 'skills-start', 'contact-start'];
  },
  componentDidMount () {
    $('.portrait, .my-name').click(this._scrollToTop);
  },
  componentWillUnmount () {
    $('.portrait, .my-name').unbind('click');
  },
  _scrollToTop () {
    $(`#about-start`).scrollView({duration: 1000});
  },
  render () {
    return (
      <header className='nav-bar'>
        <img src='/assets/portrait.jpg' alt='my portrait' className='portrait' />
        <h1 className='my-name'>Wil Pirino</h1>
        <h2 className='my-title'>Software Engineer</h2>
        <ScrollableNavList itemNames={this.navItemNames} targetIds={this.navItemTargetIds} />
        <ul className='nav-bar-contact-icons'>
          <li><a href='http://www.github.com/willyp63'><i className="fa fa-github-square"></i></a></li>
          <li><a href='https://www.linkedin.com/in/wil-pirino-33675b122'><i className="fa fa-linkedin-square"></i></a></li>
          <li><a href='mailto:wpirino1@gmail.com'><i className="fa fa-envelope"></i></a></li>
          <li><a href='/wil-pirino.pdf'><i className="fa fa-file-text"></i></a></li>
        </ul>
      </header>
    );
  }
});

export default NavBar;
