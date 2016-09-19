import React from 'react';
import Skill from './skill';

const Skills = React.createClass({
  render () {
    return (
      <div className='content-section'>
        <h1 className='skills-header'>Skills</h1>
        <div className='skill-list'>
          <ul className='row'>
            <Skill imgSrc='/assets/ruby.png' skillName='Ruby' />
            <Skill imgSrc='/assets/rails.png' skillName='Rails' />
            <Skill imgSrc='/assets/javascript.png' skillName='JavaScript' />
            <Skill imgSrc='/assets/react.png' skillName='React.js/Flux' />
            <Skill imgSrc='/assets/html.png' skillName='HTML5' />
            <Skill imgSrc='/assets/css.png' skillName='CSS3' />
          </ul>
          <ul className='row'>
            <Skill imgSrc='/assets/objective-c.jpeg' skillName='Objective-C' />
            <Skill imgSrc='/assets/cplusplus.jpg' skillName='C/C++' />
            <Skill imgSrc='/assets/java.png' skillName='Java' />
            <Skill imgSrc='/assets/jquery.png' skillName='JQuery' />
            <Skill imgSrc='/assets/git.png' skillName='Git' />
            <Skill imgSrc='/assets/postgresql.png' skillName='PostgreSQL' />
          </ul>
        </div>
      </div>
    );
  }
});

export default Skills;
