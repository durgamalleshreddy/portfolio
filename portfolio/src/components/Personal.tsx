import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaTrophy } from 'react-icons/fa';

const PersonalSection = styled.section`
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

const PersonalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

const PersonalCard = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px var(--shadow-color);
  border: 1px solid var(--border-color);
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
`;

const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ActivityItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: bold;
  }
`;

const Personal: React.FC = () => {
  const hobbies = [
    "Playing basketball, table tennis, and cricket to stay active and build teamwork",
    "Dancing to embrace rhythm and artistic expression",
    "Exploring photography to capture aesthetics and express creativity",
    "Following fashion trends and experimenting with styles to express individuality and creativity"
  ];

  const extracurricular = [
    "Worked as an executive body member in AME (Association of Mechanical Engineers) to conduct various technical events and fests in college",
    "Learned SALES and MARKETING by working at a cloth retail company (CELIO)",
    "Worked at KFC company during free time to support myself financially",
    "Completed NCC-A certification"
  ];

  return (
    <PersonalSection id="personal">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaHeart />
          Personal
        </SectionTitle>
        
        <PersonalGrid>
          <PersonalCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CardTitle>
              <FaHeart />
              Hobbies & Interests
            </CardTitle>
            <ActivityList>
              {hobbies.map((hobby, index) => (
                <ActivityItem key={index}>{hobby}</ActivityItem>
              ))}
            </ActivityList>
          </PersonalCard>

          <PersonalCard
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <CardTitle>
              <FaUsers />
              Extracurricular Activities
            </CardTitle>
            <ActivityList>
              {extracurricular.map((activity, index) => (
                <ActivityItem key={index}>{activity}</ActivityItem>
              ))}
            </ActivityList>
          </PersonalCard>
        </PersonalGrid>
      </Container>
    </PersonalSection>
  );
};

export default Personal; 