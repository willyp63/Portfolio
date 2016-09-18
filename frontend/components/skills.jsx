import React from 'react';

const Skills = React.createClass({
  render () {
    return (
      <div className='content-section'>
        <h1 className='skills-header'>Skills</h1>
        <ul className='skill-list'>
          <div className='row'>
            <li className='skill'>
              <img src='/assets/rails.png' />
              <p>Ruby on Rails</p>
            </li>
            <li className='skill'>
              <img src='/assets/javascript.png' />
              <p>JavaScript</p>
            </li>
            <li className='skill'>
              <img src='/assets/javascript.png' />
              <p>C/C++</p>
            </li>
            <li className='skill'>
              <img src='/assets/jquery.png' />
              <p>JQuery</p>
            </li>
            <li className='skill'>
              <img src='/assets/react.png' />
              <p>React.js/Flux</p>
            </li>
          </div>
          <div className='row'>
            <li className='skill'>
              <img src='/assets/javascript.png' />
              <p>RSpec</p>
            </li>
            <li className='skill'>
              <img src='/assets/css.png' />
              <p>Objective-C</p>
            </li>
            <li className='skill'>
              <img src='/assets/html.png' />
              <p>HTML/CSS</p>
            </li>
            <li className='skill'>
              <img src='/assets/git.png' />
              <p>Git</p>
            </li>
            <li className='skill'>
              <img src='/assets/postgresql.png' />
              <p>PostgreSQL</p>
            </li>
          </div>
        </ul>
      </div>
    );
  }
});

export default Skills;
