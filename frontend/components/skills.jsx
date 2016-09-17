import React from 'react';

const Skills = React.createClass({
  render () {
    return (
      <div className='content-section'>
        <h1 className='skills-header'>Skills</h1>
        <ul className='skill-list'>
          <li className='skill'>Ruby on Rails</li>
          <li className='skill'>JavaScript</li>
          <li className='skill'>C/C++</li>
          <li className='skill'>Java</li>
          <li className='skill'>JQuery</li>
          <li className='skill'>React.js/Flux</li>
          <li className='skill'>RSpec</li>
          <li className='skill'>Objective-C</li>
          <li className='skill'>HTML/CSS</li>
          <li className='skill'>Git</li>
          <li className='skill'>SQL</li>
        </ul>
      </div>
    );
  }
});

export default Skills;
