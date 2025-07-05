import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUserTie } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: var(--bg-secondary);
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

const SummaryCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 3rem;
  border-radius: 15px;
  box-shadow: var(--card-shadow);
  line-height: 1.8;
  font-size: 1.1rem;
  color: var(--text-secondary);
  text-align: justify;
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 12px;
    line-height: 1.7;
    font-size: 1rem;
    text-align: left;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaUserTie />
          About Me
        </SectionTitle>
        
        <SummaryCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Results-driven and technically proficient DevOps Engineer with two years of experience in Linux administration, cloud computing, and DevOps practices. Specialized in automating deployments, managing infrastructure, and optimizing data centers. Expertise in AWS, Azure, Docker, Kubernetes, Terraform, and CI/CD pipelines using Jenkins. Adept at utilizing Shell and Python scripting to streamline operations, ensure high availability, and deliver scalable, reliable solutions. Eager to contribute to a dynamic organization, leveraging skills in cloud technologies and DevOps to drive growth and innovation.
        </SummaryCard>
      </Container>
    </AboutSection>
  );
};

export default About; 