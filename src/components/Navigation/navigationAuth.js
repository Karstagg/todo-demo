import { Nav, NavItem, NavLink } from 'reactstrap';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import React from 'react';

export const NavigationAuth = ({ authUser }) => (

  <Nav >
    <NavItem>
      <NavLink href={ROUTES.HOME}>Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink><SignOutButton /></NavLink>
    </NavItem>
  </Nav>
);