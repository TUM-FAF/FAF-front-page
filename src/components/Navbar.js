import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 16px 50px;
`;

const NavLinksEl = styled.li`
  margin: 0 10px;

  a {
    color: #FFFFFF;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <NavbarContainer>
        <LogoContainer>Logo</LogoContainer>
        <NavLinks>
          <NavLinksEl><Link to='/main'>Main</Link></NavLinksEl>
          <NavLinksEl><Link to='/about'>About</Link></NavLinksEl>
          <NavLinksEl><Link to='/contacts'>Contacts</Link></NavLinksEl>
        </NavLinks>
      </NavbarContainer>
    );
  }
}

export default Navbar;
