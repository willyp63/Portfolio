import React from 'react';

const Projects = React.createClass({
  render () {
    return (
      <div className='content-section'>
        <h1 className='projects-header'>Projects</h1>
        <ul className='project-list'>
          <li className='project'>SoundScape</li>
          <li className='project'>Fat Bat and the Colored Caverns</li>
          <li className='project'>Worm</li>
        </ul>
      </div>
    );
  }
});

export default Projects;
