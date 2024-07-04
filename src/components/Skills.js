import React from 'react';
import styled from 'styled-components';
import { FaPython, FaJs, FaReact, FaNode, FaDatabase } from 'react-icons/fa'; 
import { DiMongodb } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { PiFileCppLight } from "react-icons/pi";
import { SiNestjs } from "react-icons/si";

const SkillsContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #f4f4f4;
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  justify-content: center;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #ff6347;
    color: #fff;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SkillText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsTitle>My Skills</SkillsTitle>
      <SkillsGrid>
        <SkillCard>
          <IconWrapper>
            <FaJs />
          </IconWrapper>
          <SkillText>JavaScript</SkillText>
        </SkillCard>
        <SkillCard>
          <IconWrapper>
            <SiNextdotjs />
          </IconWrapper>
          <SkillText>NextJS</SkillText>
        </SkillCard>
        <SkillCard>
          <IconWrapper>
            <FaReact />
          </IconWrapper>
          <SkillText>React</SkillText>
        </SkillCard>
        <SkillCard>
          <IconWrapper>
            <FaNode />
          </IconWrapper>
          <SkillText>NodeJs</SkillText>
        </SkillCard>
        <SkillCard>
          <IconWrapper>
            <SiNestjs />
          </IconWrapper>
          <SkillText>NestJs</SkillText>
        </SkillCard>
        <SkillCard>
          <IconWrapper>
            <FaDatabase />
          </IconWrapper>
          <SkillText>SQL</SkillText>
        </SkillCard>
        <SkillCard>
          <IconWrapper>
            <DiMongodb />
          </IconWrapper>
          <SkillText>MongoDB</SkillText>
        </SkillCard>
        <SkillCard>
          <IconWrapper>
            <FaPython />
          </IconWrapper>
          <SkillText>Python</SkillText>
        </SkillCard>
        <SkillCard>
          <IconWrapper>
            <PiFileCppLight />
          </IconWrapper>
          <SkillText>CPP</SkillText>
        </SkillCard>
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
