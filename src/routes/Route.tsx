import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  layout?: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  layout: Layout,
  ...rest
}) => {
  const { user } = useAuth();

  const isSigned = !!user;

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return !isPrivate ? (
          <>
            {Layout ? (
              <Layout>
                <Component />
              </Layout>
            ) : (
              <Component />
            )}
          </>
        ) : (
          <>
            {isSigned ? (
              <>
                {Layout ? (
                  <Layout>
                    <Component />
                  </Layout>
                ) : (
                  <Component />
                )}
              </>
            ) : (
              <Redirect
                to={{
                  pathname: '/authenticate',
                }}
              />
            )}
          </>
        );
      }}
    />
  );
};

export default Route;
