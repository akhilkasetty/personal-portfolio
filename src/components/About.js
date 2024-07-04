import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
        Motivated Software Developer with in-depth knowledge of C++, JavaScript, API development, and Front-end technologies. Skilled in developing, optimizing, and reworking systems to meet specific customer requirements. Passionate about scalable systems and writing efficient code.
      </AboutText>
    </AboutContainer>
  );
};

export default About;
