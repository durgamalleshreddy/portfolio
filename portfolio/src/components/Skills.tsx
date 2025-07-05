import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCogs, FaUsers, FaBrain } from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background: var(--bg-primary);

  @media (max-width: 768px) {
    padding: 3rem 1rem;
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
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }
`;

const SkillCategory = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: var(--card-shadow);

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 10px;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--card-bg);
  border-radius: 10px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    gap: 0.8rem;
  }
`;

const SkillIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 0.8rem;
  }
`;

const SkillName = styled.span`
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Skills: React.FC = () => {
  const technicalSkills = [
    "DevOps Tools",
    "Linux Administration",
    "Shell Scripting",
    "Python Programming",
    "Jenkins CI/CD",
    "Prometheus & Grafana",
    "Ansible Configuration Management",
    "AWS Cloud Services",
    "Microsoft Azure",
    "Nginx, Apache & Tomcat",
    "Terraform Infrastructure Management",
    "Git, GitLab, GitHub",
    "Docker & Kubernetes"
  ];

  const interpersonalSkills = [
    "Excellent Analytical Skills",
    "Strong Communication Skills",
    "Problem Solving Abilities",
    "Leadership Qualities",
    "Ability to Work Under Pressure",
    "Critical Thinking",
    "Networking Skills"
  ];

  const coreSkills = [
    "Infrastructure as Code",
    "Continuous Integration/Deployment",
    "Cloud Architecture",
    "System Administration",
    "Security Best Practices",
    "Performance Optimization",
    "Monitoring & Alerting",
    "Automation & Scripting"
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaCogs />
          Skills
        </SectionTitle>
        
        <SkillsGrid>
          <SkillCategory
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>
              <FaCogs />
              Technical Skills
            </CategoryTitle>
            <SkillsList>
              {technicalSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillIcon>{skill.charAt(0)}</SkillIcon>
                  <SkillName>{skill}</SkillName>
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>

          <SkillCategory
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>
              <FaUsers />
              Interpersonal Skills
            </CategoryTitle>
            <SkillsList>
              {interpersonalSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillIcon>{skill.charAt(0)}</SkillIcon>
                  <SkillName>{skill}</SkillName>
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>

          <SkillCategory
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>
              <FaBrain />
              Core Competencies
            </CategoryTitle>
            <SkillsList>
              {coreSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillIcon>{skill.charAt(0)}</SkillIcon>
                  <SkillName>{skill}</SkillName>
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 