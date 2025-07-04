import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ToggleButton = styled(motion.button)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.1)'};
  border: 2px solid ${props => props.theme === 'dark' 
    ? 'rgba(255, 255, 255, 0.2)' 
    : 'rgba(0, 0, 0, 0.2)'};
  color: ${props => props.theme === 'dark' ? '#fff' : '#333'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 1001;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme === 'dark' 
      ? 'rgba(255, 255, 255, 0.2)' 
      : 'rgba(0, 0, 0, 0.2)'};
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
`;

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton
      theme={theme}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </ToggleButton>
  );
};

export default ThemeToggle; 