import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import Main from '../modules/users/screens/Main';

import AuthLayout from '../modules/dashboard/screens/_layouts/auth';
import DashboardLayout from '../modules/dashboard/screens/_layouts/dashboard';

import Dashboard from '../modules/dashboard/screens/Main';
import Authenticate from '../modules/dashboard/screens/Authenticate';
import Projects from '../modules/dashboard/screens/Projects';
import Tenders from '../modules/dashboard/screens/Tenders';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route
          path="/authenticate"
          component={Authenticate}
          layout={AuthLayout}
        />

        <Route
          exact
          path="/dashboard/statistics"
          component={Dashboard}
          layout={DashboardLayout}
          isPrivate
        />
        <Route
          exact
          path="/dashboard/projects"
          component={Projects}
          layout={DashboardLayout}
          isPrivate
        />
        <Route
          exact
          path="/dashboard/tenders"
          component={Tenders}
          layout={DashboardLayout}
          isPrivate
        />

        <Route path="*" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
