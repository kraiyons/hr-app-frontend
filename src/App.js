import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

import HomePage from './pages/HomePage/index';
import LeavesPage from './pages/LeavesPage';
import UsersPage from './pages/UsersPage';
import LoginPage from './pages/LoginPage/index';

export default function App() {
  return (
    <Router>
      <div className='w-full h-full'>
        <Switch>
          <PublicRoute exact path='/login'>
            <LoginPage />
          </PublicRoute>
          <PrivateRoute exact path='/leaves'>
            <LeavesPage />
          </PrivateRoute>
          <PrivateRoute exact path='/users'>
            <UsersPage />
          </PrivateRoute>
          <PublicRoute exact path='/'>
            <HomePage />
          </PublicRoute>
        </Switch>
      </div>
    </Router>
  );
}
