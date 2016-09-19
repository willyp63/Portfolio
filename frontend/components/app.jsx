import React from 'react';
import NavBar from './nav_bar';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';

const App = React.createClass({
  render () {
    return (
      <div>
        <NavBar />
        <div className='banner-wrapper' id='about-start'>
          <img src='/assets/ocean_banner.jpg' className='banner-image' />
        </div>
        <div className='main-content'>
          <About />
          <div className='content-section-seperator' id='projects-start' />
          <Projects />
          <div className='content-section-seperator' id='skills-start' />
          <Skills />
          <div className='content-section-seperator' id='contact-start' />
          <Contact />
        </div>
      </div>
    );
  }
});

export default App;
