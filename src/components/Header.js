import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope, FaTerminal } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem 0;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const NavLink = styled.a`
  color: white;
  position: relative;
  padding: 0.5rem 1rem;
  transition: color 0.3s;

  &:hover {
    color: #ff6347;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(128, 128, 128, 0.2);
    border-radius: 8px;
    transform: scale(1);
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    opacity: 1;
    z-index: -1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(128, 128, 128, 0.2);
    border-radius: 8px;
    transform: scale(0);
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    opacity: 0;
    z-index: -1;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const promptAnimation = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const PromptContainer = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-family: 'Courier New', Courier, monospace;
  white-space: nowrap;
  color: orange;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PromptIcon = styled(FaTerminal)`
  margin-right: 0.5rem;
  animation: ${promptAnimation} 1s infinite;
`;

const PromptText = styled.span`
  animation: typing 3s steps(20, end) infinite, blink-caret 0.75s step-end infinite;
  
  @keyframes typing {
    from { width: 0; }
    to { width: 18ch; }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #00ff00; }
  }

  overflow: hidden;
  border-right: .15em solid #00ff00;
  white-space: nowrap;
  letter-spacing: .15em;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <PromptContainer>
        <PromptIcon />
        <PromptText>Hello World !!</PromptText>
      </PromptContainer>
      <Nav>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
