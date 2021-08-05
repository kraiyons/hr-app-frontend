import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

import HomePage from './pages/HomePage';
import LeavesPage from './pages/LeavesPage';
import LoginPage from './pages/LoginPage/index';

export default function App() {
  return (
    <Router>
      <div class='w-full h-full border-black border-2'>
        <Switch>
          <PublicRoute exact path='/login'>
            <LoginPage />
          </PublicRoute>
          <PrivateRoute exact path='/leaves'>
            <LeavesPage />
          </PrivateRoute>
          <PublicRoute exact path='/'>
            <HomePage />
          </PublicRoute>
        </Switch>
      </div>
    </Router>
  );
}
