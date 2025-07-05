import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const CertificationsSection = styled.section`
  padding: 5rem 2rem;
  background: var(--bg-primary);
  color: var(--text-primary);
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

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const CertificationCard = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px var(--shadow-color);
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid var(--border-color);
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CertificationIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const CertificationTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: bold;
  line-height: 1.4;
`;

const CertificationIssuer = styled.div`
  color: #667eea;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const CertificationDate = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const Certifications: React.FC = () => {
  const { theme } = useTheme();
  
  const certifications = [
    {
      title: "Python Crash Course",
      issuer: "Google",
      date: "2020"
    },
    {
      title: "Introduction to Jenkins",
      issuer: "Linux Foundation",
      date: "2024"
    },
    {
      title: "AI for Everyone",
      issuer: "DeepLearning.AI",
      date: "2021"
    },
    {
      title: "Goldman Sachs Engineering Virtual Program",
      issuer: "Goldman Sachs",
      date: "2023"
    },
    {
      title: "Meta Frontend Developer Certificate",
      issuer: "Meta",
      date: "2023"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      date: "2023"
    },
    {
      title: "Introduction to DevOps & SRE (Site Reliability Engineering)",
      issuer: "Linux Foundation",
      date: "2023"
    },
    {
      title: "Generative AI fundamentals",
      issuer: "Databricks",
      date: "2025"
    }
  ];

  return (
    <CertificationsSection id="certifications">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaCertificate />
          Certifications
        </SectionTitle>
        
        <CertificationsGrid>
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CertificationIcon>
                <FaAward />
              </CertificationIcon>
              <CertificationTitle>{cert.title}</CertificationTitle>
              <CertificationIssuer>{cert.issuer}</CertificationIssuer>
              <CertificationDate>{cert.date}</CertificationDate>
            </CertificationCard>
          ))}
        </CertificationsGrid>
      </Container>
    </CertificationsSection>
  );
};

export default Certifications; 