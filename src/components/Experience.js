import React from 'react';
import styled from 'styled-components';
import cardekhoLogo from '../assets/cardekho-logo.jpeg';
import tcsLogo from '../assets/tcs-logo.png';

const ExperienceContainer = styled.section`
  padding: 4rem 2rem;
  background: #f4f4f4;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ExperienceTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #ccc;
    transform: translateX(-50%);
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  width: 50%;
  padding: 1rem 2rem;
  box-sizing: border-box;

  &:nth-child(odd) {
    left: 0;
  }
  &:nth-child(even) {
    left: 50%;
  }
  &:nth-child(odd)::before,
  &:nth-child(even)::before {
    content: '';
    position: absolute;
    top: 20px;
    right: -8px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent transparent #fff;
  }
  &:nth-child(even)::before {
    left: -8px;
    right: auto;
    border-color: transparent #fff transparent transparent;
  }
  @media (max-width: 768px) {
    width: 100%;
    left: 0 !important;
    margin-left: 0;
    padding: 1rem 0;
    &:nth-child(odd)::before,
    &:nth-child(even)::before {
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
      border-color: transparent transparent #fff transparent;
      transform: rotate(90deg);
    }
  }
`;

const TimelineContent = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CompanyLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
  border-radius: 50%;
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const JobTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const JobDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const YearLine = styled.div`
  position: relative;
  margin: 1rem 0;
  text-align: center;
  color: #666;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #ccc;
    z-index: -1;
  }

  span {
    background: #f4f4f4;
    padding: 0 1rem;
  }
`;

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <ExperienceTitle>Experience</ExperienceTitle>
      <Timeline>
        <TimelineItem>
          <TimelineContent>
            <CompanyLogo src={cardekhoLogo} alt="Cardekho Logo" />
            <CompanyName>Cardekho</CompanyName>
            <JobTitle>SDE 2</JobTitle>
            <JobDescription>
              - Streamlined lead management, boosting performance by 60%<br />
              - Deployed REDIS Cache, cutting response times by 57%<br />
              - Engineered multilingual platform, handling 600k+ daily transactions
            </JobDescription>
          </TimelineContent>
          <YearLine><span>2023 - Present</span></YearLine>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent>
            <CompanyLogo src={tcsLogo} alt="TCS Logo" />
            <CompanyName>TCS (Digital)</CompanyName>
            <JobTitle>Full Stack Developer</JobTitle>
            <JobDescription>
              - Developed digital automation for NETAPP, saving costs<br />
              - Created dashboard for 1M users<br />
              - Led multiple projects from documentation to implementation
            </JobDescription>
          </TimelineContent>
          <YearLine><span>2021 - 2023</span></YearLine>
        </TimelineItem>
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience;
