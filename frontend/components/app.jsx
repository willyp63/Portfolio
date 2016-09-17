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
        <div className='banner-wrapper'>
          <img src='/assets/ocean_banner.jpg' className='banner-image' />
        </div>
        <div className='main-content'>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    );
  }
});

export default App;
