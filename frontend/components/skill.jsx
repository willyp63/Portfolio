import React from 'react';

const Skill = React.createClass({
  render () {
    return (
      <li className='skill'>
        <img src={this.props.imgSrc} />
        <p>{this.props.skillName}</p>
      </li>
    );
  }
});

export default Skill;
