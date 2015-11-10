import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import { createHistory } from 'history';
import App from './components/App';
import Contacts from './components/Contacts';
import CommentBox from './components/CommentBox';
import './index.scss';

render((
  <Router history={createHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={CommentBox} />
      <Route path="contacts" component={Contacts} />
    </Route>
  </Router>
), document.getElementById('app'));
