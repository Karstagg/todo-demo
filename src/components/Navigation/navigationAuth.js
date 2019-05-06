import { Nav, NavItem, NavLink } from 'reactstrap';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import SignOutButton from '../SignOut';
import React from 'react';

export const NavigationAuth = ({ authUser }) => (

  <Nav style={{background: "black"}}>
    <NavItem>
      <NavLink href={ROUTES.HOME}>Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href={ROUTES.ACCOUNT}>Account</NavLink>
    </NavItem>
    {!!authUser.roles[ROLES.ADMIN] && (
      <NavItem>
        <NavLink href={ROUTES.ADMIN}>Admin</NavLink>
      </NavItem>
    )}
    <NavItem>
      <NavLink><SignOutButton /></NavLink>
    </NavItem>
  </Nav>
);