import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 5rem 2rem;
  background: var(--bg-primary);
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
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  width: 100%;
  
  &:nth-child(odd) {
    .content {
      margin-left: 0;
      margin-right: 55%;
      text-align: left;
    }
    
    .timeline-dot {
      left: calc(50% - 15px);
    }
  }
  
  &:nth-child(even) {
    .content {
      margin-left: 55%;
      margin-right: 0;
      text-align: left;
    }
    
    .timeline-dot {
      right: calc(50% - 15px);
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2);
  z-index: 2;
`;

const Content = styled.div`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: var(--card-shadow);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
  }
  
  &:nth-child(odd) &::before {
    right: -20px;
    border-left-color: var(--card-bg);
  }
  
  &:nth-child(even) &::before {
    left: -20px;
    border-right-color: var(--card-bg);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: var(--accent-primary);
  margin-bottom: 0.5rem;
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Description = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const DescriptionItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  line-height: 1.6;
  color: var(--text-secondary);
  text-align: left;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--accent-primary);
    font-weight: bold;
  }
`;

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Xeedo Technologies",
      duration: "01/2025 – Present",
      location: "Bangalore, India",
      client: "Client: Sony India Software Centre (SISC)",
      description: [
        "Automating compliance checks and FossID scans within Jenkins CI/CD pipelines to ensure audit readiness and open-source license governance",
        "Collaborating with cross-functional teams to maintain secure delivery workflows and streamline DevOps processes",
        "Monitoring software usage, system performance, and license trends across cloud environments for cost optimization",
        "Contributing to internal audits, risk mitigation, and continuous compliance with enterprise standards",
        "Maintaining documentation in Confluence and building dashboards for real-time visibility into system health and compliance metrics"
      ]
    },
    {
      title: "Associate DevOps Engineer",
      company: "OSI DIGITAL",
      duration: "07/2023 – 01/2025",
      location: "Hyderabad, India",
      description: [
        "Implemented CI/CD pipelines with Jenkins and Azure CI/CD to automate software delivery",
        "Managed AWS infrastructure using Terraform for scalable cloud environments",
        "Utilized Docker and Kubernetes for streamlined deployments",
        "Monitored systems with Prometheus and Grafana",
        "Developed templating projects with Jinja"
      ]
    },
    {
      title: "Internship",
      company: "ISUZU Motors India Pvt. Ltd.",
      duration: "01/2023 – 04/2023",
      location: "Sricity, India",
      description: [
        "Gained hands-on experience with technology and engineering tools",
        "Assisted the engineering team in design analysis and testing of mechanical systems",
        "Focused on automotive components and systems",
        "Collaborated with senior engineers on product development, testing, and quality assurance projects"
      ]
    }
  ];

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaBriefcase />
          Experience
        </SectionTitle>
        
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TimelineDot className="timeline-dot" />
              <Content className="content">
                <JobTitle>{exp.title}</JobTitle>
                <Company>{exp.company}</Company>
                <Duration>
                  <FaCalendarAlt />
                  {exp.duration}
                </Duration>
                <Location>
                  <FaMapMarkerAlt />
                  {exp.location}
                </Location>
                {exp.client && <Company style={{ fontSize: '1rem', color: '#666' }}>{exp.client}</Company>}
                <Description>
                  {exp.description.map((item, i) => (
                    <DescriptionItem key={i}>{item}</DescriptionItem>
                  ))}
                </Description>
              </Content>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 