import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Welcome from './components/welcome';
import ProfilesContainer from './containers/profilesContainer';
import AdminContainer from './containers/adminContainer';
import BotContainer from './containers/botContainer';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="profiles" component={ProfilesContainer} />
    <Route path="admin" component={AdminContainer} />
    <Route path="bot" component={BotContainer} />
  </Route>
);
