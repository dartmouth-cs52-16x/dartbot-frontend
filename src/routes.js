import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Map from './components/map';
import BioContainer from './containers/profiles/bioContainer';
import AdminContainer from './containers/admin/adminContainer';
import Bot from './components/bot';
import About from './components/about';
import RequireAuth from './containers/require-auth';
import SignIn from './containers/signin';
import SignUp from './containers/signup';
import Analytics from './containers/admin/adminComponents/analytics';
import UpdateContainer from './containers/admin/updateContainer';
import UpdateLoc from './containers/admin/adminComponents/updateLoc';
import UpdateIntent from './containers/admin/adminComponents/updateIntents';
import UpdateSurvey from './containers/admin/adminComponents/updateSurveys';

export default (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={Bot} />
      <Route path="about" component={About} />
      <Route path="profiles" component={BioContainer} />
      <Route path="signin" component={SignIn} />
      <Route path="tour" component={Map} />
    </Route>
    <Route path="/admin" component={RequireAuth(AdminContainer)}>
      <IndexRoute component={Analytics} />
      <Route path="bios" component={UpdateContainer} />
      <Route path="locs" component={UpdateLoc} />
      <Route path="intents" component={UpdateIntent} />
      <Route path="surveys" component={UpdateSurvey} />
      <Route path="signup" component={SignUp} />
    </Route>
  </div>
);
