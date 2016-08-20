import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Map from './components/map';
import BioContainer from './containers/profiles/bioContainer';
import AdminContainer from './containers/admin/adminContainer';
import Bot from './components/bot';
import RequireAuth from './containers/require-auth';
import SignIn from './containers/signin';
import SignUp from './containers/signup';
import NewBio from './containers/admin/adminComponents/newBio';
import Analytics from './containers/admin/adminComponents/analytics';
import UpdateBio from './containers/admin/adminComponents/updateBio';
import UpdateContainer from './containers/admin/updateContainer';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Map} />
    <Route path="profiles" component={BioContainer} />
    <Route path="admin" component={RequireAuth(AdminContainer)}>
      <Route path="analytics" component={Analytics} />
      <Route path="newbio" component={NewBio} />
      <Route path="bios" component={UpdateContainer} />
      <Route path="bios/:id" component={UpdateBio} />
    </Route>
    <Route path="signin" component={SignIn} />
    <Route path="signup" component={SignUp} />
    <Route path="bot" component={Bot} />
  </Route>
);
