import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--nav-border);
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-primary);
  cursor: pointer;
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--nav-bg);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 2rem;
    transform: ${props => props.isOpen ? 'translateY(-100%)' : 'translateY(0)'};
    transition: transform 0.3s ease;
    border-top: 1px solid var(--nav-border);
  }
`;

const NavLink = styled.a`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: var(--accent-primary);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-primary);
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'personal', label: 'Personal' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <NavContainer>
        <Logo onClick={() => scrollToSection('about')}>
          Durga Mallesh Reddy
        </Logo>
        
        <NavLinks isOpen={isOpen}>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
        
        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContainer>
    </Nav>
  );
};

export default Navigation; 