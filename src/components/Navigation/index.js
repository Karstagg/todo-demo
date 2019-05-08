import React from 'react';
import { AuthUserContext } from '../Session';
import { NavigationAuth } from './navigationAuth';
import { NavigationNonAuth } from './navigationNonAuth';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'gatsby';
import navStyles from './navStyles.css';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <Navbar color="dark" light expand="md">
          <Link className='navbar-brand' to='/'>Todo List</Link>
          <NavigationAuth authUser={authUser}/>
        </Navbar>
      ) : (
        <Navbar color="dark" light expand="md">
          <Link className='navbar-brand' to='/'>Todo List</Link>
          <NavigationNonAuth/>
        </Navbar>
      )
    }
  </AuthUserContext.Consumer>
);

export default Navigation;
