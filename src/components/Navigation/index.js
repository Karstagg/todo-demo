import React from 'react';
import { AuthUserContext } from '../Session';
import {NavigationAuth} from './navigationAuth';
import {NavigationNonAuth} from './navigationNonAuth';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

export default Navigation;
