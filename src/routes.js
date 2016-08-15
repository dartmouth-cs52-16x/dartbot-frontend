import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Welcome from './components/welcome';
import ProfilesContainer from './containers/profilesContainer';
import AdminContainer from './containers/adminContainer';
import Bot from './components/bot';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="profiles" component={ProfilesContainer} />
    <Route path="admin" component={AdminContainer} />
    <Route path="bot" component={Bot} />
  </Route>
);
