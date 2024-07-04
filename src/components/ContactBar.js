import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const BarContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 1000;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #ff6347;
  }
`;

const ContactBar = () => {
  return (
    <BarContainer>
      <IconLink href="https://www.linkedin.com/in/akhil-kashetty/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </IconLink>
      <IconLink href="https://github.com/akhilkasetty" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </IconLink>
      <IconLink href="mailto:akhilxtel@gmail.com">
        <FaEnvelope />
      </IconLink>
    </BarContainer>
  );
};

export default ContactBar;
