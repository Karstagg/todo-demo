import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'gatsby'
import * as ROUTES from '../../constants/routes';
import React from 'react';

export const NavigationNonAuth = () => (
  <Nav>
    <NavItem>
      <Link className="nav-link" to={ROUTES.SIGN_IN}>Sign In</Link>
    </NavItem>
  </Nav>
);
