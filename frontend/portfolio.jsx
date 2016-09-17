import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/app';
import Bio from './components/bio';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute onEnter={_redirectToBio} />
    <Route path='/bio' component={Bio} />
  </Route>
);

function _redirectToBio (nextState, replaceState) {
  replaceState('/bio');
}

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>,
                  document.getElementById('root'));
});
