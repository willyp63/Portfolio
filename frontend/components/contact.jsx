import React from 'react';

const Contact = React.createClass({
  render () {
    return (
      <div className='content-section'>
        <h1 className='contact-header'>Contact</h1>
        <ul>
          <li>Github</li>
          <li>Linkedin</li>
          <li>Email</li>
        </ul>
        <h3>Download Resume</h3>
      </div>
    );
  }
});

export default Contact;
