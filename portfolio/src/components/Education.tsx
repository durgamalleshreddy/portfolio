import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const EducationSection = styled.section`
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

const EducationCard = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px var(--shadow-color);
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid var(--border-color);
`;

const Degree = styled.h3`
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Institution = styled.h4`
  font-size: 1.3rem;
  color: #667eea;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const EducationDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 1rem;
`;

const Education: React.FC = () => {
  return (
    <EducationSection id="education">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaGraduationCap />
          Education
        </SectionTitle>
        
        <EducationCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Degree>Bachelor of Technology in Mechanical Engineering</Degree>
          <Institution>Sagi Ramakrishnam Raju Engineering College</Institution>
          
          <EducationDetails>
            <DetailItem>
              <FaCalendarAlt />
              08/2019 – 04/2023
            </DetailItem>
            <DetailItem>
              <FaMapMarkerAlt />
              Bhimavaram, India
            </DetailItem>
          </EducationDetails>
          
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1.1rem' }}>
            Completed a comprehensive four-year program in Mechanical Engineering, gaining strong foundational knowledge in engineering principles, design analysis, and technical problem-solving. The curriculum provided hands-on experience with engineering tools and technologies, preparing for a successful transition into the technology sector.
          </p>
        </EducationCard>
      </Container>
    </EducationSection>
  );
};

export default Education; 