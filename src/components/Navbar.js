import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * Styled html elements for the navigation bar.
 */
const NavbarContainer = styled.div`
  background-color: #222831;
  color: #FFFFFF;
  height: 50px;
  display: flex;
`;

const LogoContainer = styled.div`
  margin: 16px 50px;
  flex-grow: 1;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 16px 50px;
`;

const NavListEl = styled.li`
  margin: 0 10px;

  a {
    color: #FFFFFF;
  }
`;

/**
 * The component that represents the navigation bar.
 */
class Navbar extends Component {
  render() {
    return (
      <NavbarContainer>
        <LogoContainer>Logo</LogoContainer>
        <NavList>
          <NavListEl><Link to='/main'>Main</Link></NavListEl>
          <NavListEl><Link to='/about'>About</Link></NavListEl>
          <NavListEl><Link to='/contacts'>Contacts</Link></NavListEl>
        </NavList>
      </NavbarContainer>
    );
  }
}

export default Navbar;
