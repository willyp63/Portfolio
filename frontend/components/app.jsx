import React from 'react';
import NavBar from './nav_bar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const App = React.createClass({
  render () {
    const path = this.props.location.pathname;
    const segment = path.split('/')[1] || 'index';
    return (
      <div>
        <NavBar />
        <ReactCSSTransitionGroup transitionName="slide" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {React.cloneElement(this.props.children, { key: segment })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default App;
