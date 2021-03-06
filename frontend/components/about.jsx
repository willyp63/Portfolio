import React from 'react';

const About = React.createClass({
  render () {
    return (
      <div className='content-section'>
        <h1 className='about-header'>About Me</h1>
        <h3 className='about-general'>I am a San Francisco-based, full-stack developer proficient in Objective-C, Ruby on Rails, Javascript, and React with Flux architecture.</h3>
        <p className='about-specific'>Ever since high school I've had a passion for coding! I taught myself a lot of what I know through web resources, books, and experimentation. I studied computer science at Purdue University, attending courses in Data Structures, Algorithm Design, and Computer Architecture. Seeking more hands on experience, I came to App Academy where I learned full-stack web development. I am currently looking for an exciting position to launch my professional career.</p>
      </div>
    );
  }
});

export default About;
