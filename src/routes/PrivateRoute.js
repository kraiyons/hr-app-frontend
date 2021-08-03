import React from 'react';
import { Route } from 'react-router-dom';
import PrivateLayout from '../layouts/PrivateLayout';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <PrivateLayout>
          <Component {...props} />
        </PrivateLayout>
      )}
    />
  );
};
