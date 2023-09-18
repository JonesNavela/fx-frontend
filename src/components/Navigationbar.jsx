import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/logoHeaderTrans.png';
import { FaTimes, FaBars } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  background-color: #060606;
  z-index: 100;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vh;
  margin: 0 auto;
  padding: 10px 20px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  img {
    width: 10rem;
    height: auto;
  }
`;

const MobileMenuButton = styled.div`
  cursor: pointer;
  color: #fff;
  font-size: 24px;
  padding: 5px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: ${props => (props.showMobileMenu ? 'center' : 'flex-start')};
    display: ${props => (props.showMobileMenu ? 'flex' : 'none')};
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #060606;
    text-align: center;
    z-index: 1;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
    padding: 10px;
  }

  @media (min-width: 769px) {
    margin-left: auto; /* Pushes NavLinks to the right */
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  margin: 10px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

function Navigationbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <NavbarContainer>
      <Container>
        <Brand href="#home">
          <img src={Logo} alt="logo" />
        </Brand>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <NavLinks showMobileMenu={showMobileMenu}>
          <NavLink href="#about">About us</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#founder">Founder</NavLink>
          <NavLink href="#contact">Contact us</NavLink>
        </NavLinks>
      </Container>
    </NavbarContainer>
  );
}

export default Navigationbar;
