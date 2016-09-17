import React from 'react';

const About = React.createClass({
  render () {
    return (
      <div className='content-section'>
        <h1 className='about-header'>About Me</h1>
        <h3 className='about-general'>I am a San Francisco-based full-stack developer with experience in Objective-C, Ruby on Rails, Javascript, and React with Flux architecture.</h3>
        <p className='about-specific'>Ever since high school, I've been in love with coding. I taught myself and worked on projects in my spare time. I always had a finished product in mind, but really I was working for all the challenges along the way. I love what I do, and I'm currently looking to turn my passion into a career.</p>
      </div>
    );
  }
});

export default About;
