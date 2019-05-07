import { Nav, NavItem, NavLink } from 'reactstrap';
import * as ROUTES from '../../constants/routes';
import React from 'react';

export const NavigationNonAuth = () => (
  <Nav>
    <NavItem>
      <NavLink href={ROUTES.LANDING}>Landing Page</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href={ROUTES.SIGN_IN}>Sign In</NavLink>
    </NavItem>
  </Nav>
);