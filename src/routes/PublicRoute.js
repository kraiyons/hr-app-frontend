import React from 'react';
import { Route } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <PublicLayout>
          <Component {...props} />
        </PublicLayout>
      )}
    />
  );
};
