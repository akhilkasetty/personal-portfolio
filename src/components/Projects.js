import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #f4f4f4;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectTitle>Train Scheduler</ProjectTitle>
          <ProjectDescription>
            Developed a real-time train scheduling application using React, Redux, Next.js, and Socket.IO. Implemented admin management and user viewing features with MongoDB, Redis, and RabbitMQ for scalable and efficient performance.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>News Aggregator</ProjectTitle>
          <ProjectDescription>
            Automatically scraps news from multiple news papers and
            applies Sentiment analysis , title classification , summarization into 60 words
            And user friendly UI on all devices   

            Published Research Paper on "Automatic News Aggregator" in IRJMETS
            (Volume:03/Issue:07/July-2021 Impact Factor- 5.354) and got best
            project appreciation from university       
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Recommendation System</ProjectTitle>
          <ProjectDescription>
            This Recommendation system is Content based
            recommendation system (Product Titles) . The algorithm recommends similar
            products based on Amazon opensource database the algorithm is trained on
            it
          </ProjectDescription>
        </ProjectCard>
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
