import React from 'react';
import { Link } from 'gatsby';
import { Nav, NavItem, NavLink } from 'reactstrap';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

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

const NavigationAuth = ({ authUser }) => (

  <Nav>
    <NavLink><Link to={ROUTES.LANDING}>Landing</Link></NavLink>
  <NavItem>
    <NavLink><Link to={ROUTES.LANDING}>Landing</Link></NavLink>
</NavItem>
<NavItem>
  <NavLink><Link to={ROUTES.HOME}>Home</Link></NavLink>
</NavItem>
<NavItem>
  <NavLink><Link to={ROUTES.ACCOUNT}>Account</Link></NavLink>
</NavItem>
    {!!authUser.roles[ROLES.ADMIN] && (
<NavItem>

  <NavLink><Link to={ROUTES.ADMIN}>Admin</Link></NavLink>

</NavItem>
    )}
    <NavItem>
      <NavLink><SignOutButton /></NavLink>
    </NavItem>
</Nav>
);

const NavigationNonAuth = () => (
  <Nav>
    <NavItem>
      <NavLink><Link to={ROUTES.LANDING}>Landing</Link></NavLink>
    </NavItem>
    <NavItem>
      <NavLink><Link to={ROUTES.SIGN_IN}>Sign In</Link></NavLink>
    </NavItem>
  </Nav>
);


export default Navigation;
