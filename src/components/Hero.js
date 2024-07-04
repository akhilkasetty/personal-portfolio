import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/hero-image.jpeg'; // Replace with your image

const HeroContainer = styled.section`
  background: url(${heroImage}) no-repeat center center/cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5rem;
  color: #fff;
  text-align: left;
  position: relative;

  @media (max-width: 768px) {
    padding-left: 2rem;
    height: 60vh;
    align-items: center;
    text-align: center;
    justify-content: flex-end;
    padding-bottom: 2rem; // Add padding to push the text container down
  }
`;

const BlurBackground = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <BlurBackground>
        <HeroTitle>Akhil Kashetty</HeroTitle>
        <HeroSubtitle>Software Development Engineer</HeroSubtitle>
        <HeroDescription>I create scalable systems and innovative algorithms.</HeroDescription>
      </BlurBackground>
    </HeroContainer>
  );
};

export default Hero;
