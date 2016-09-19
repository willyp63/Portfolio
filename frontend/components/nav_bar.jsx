import React from 'react';

const NavBar = React.createClass({
  componentDidMount () {
    $('.nav-list').children('li').click(this._scrollToHeader);
    $('.portrait').click(this._scrollToTop);
    $('.my-name').click(this._scrollToTop);
    $(window).scroll(this._onScroll);
  },
  componentWillUnmount () {
    $('.nav-list').children('li').unbind('click');
    $(window).unbind('scroll');
  },
  _scrollToHeader (e) {
    const sectionName = e.target.id.match(/(.*)-nav-item/)[1];
    const offset = sectionName === 'about' ? 0 : 3;
    $(`#${sectionName}-start`).scrollView({duration: 1000, offset: offset});
  },
  _scrollToTop () {
    $(`#about-start`).scrollView({duration: 1000});
  },
  _onScroll () {
    $('.nav-item.selected').removeClass('selected');
    if (window.scrollY < $('#projects-start').offset().top) {
      $('#about-nav-item').addClass('selected');
    } else if (window.scrollY < $('#skills-start').offset().top) {
      $('#projects-nav-item').addClass('selected');
    } else if (window.scrollY < $('#contact-start').offset().top) {
      $('#skills-nav-item').addClass('selected');
    } else {
      $('#contact-nav-item').addClass('selected');
    }
  },
  _stopProgramScrolling () {
    this.programScrolling = false;
  },
  render () {
    return (
      <header className='nav-bar'>
        <img src='/assets/portrait.jpg' alt='my portrait' className='portrait' />
        <h1 className='my-name'>Wil Pirino</h1>
        <h2 className='my-title'>Software Engineer</h2>
        <ul className='nav-list'>
          <li className='nav-item selected' id='about-nav-item'>About</li>
          <li className='nav-item' id='projects-nav-item'>Projects</li>
          <li className='nav-item' id='skills-nav-item'>Skills</li>
          <li className='nav-item' id='contact-nav-item'>Contact</li>
        </ul>
        <ul className='nav-bar-contact-icons'>
          <li><a href='http://www.github.com/willyp63'><i className="fa fa-github-square"></i></a></li>
          <li><a href='https://www.linkedin.com/in/wil-pirino-33675b122'><i className="fa fa-linkedin-square"></i></a></li>
          <li><a href='mailto:wpirino1@gmail.com'><i className="fa fa-envelope"></i></a></li>
        </ul>
      </header>
    );
  }
});

export default NavBar;
