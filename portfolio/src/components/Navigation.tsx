import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
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
  
  @media (max-width: 768px) {
    backdrop-filter: blur(15px);
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-primary);
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent-primary);
  }
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
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
    backdrop-filter: blur(15px);
    flex-direction: column;
    padding: 2rem 1rem;
    transform: ${props => props.isOpen ? 'translateY(-100%)' : 'translateY(0)'};
    transition: transform 0.3s ease;
    border-top: 1px solid var(--nav-border);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-height: calc(100vh - 100%);
    overflow-y: auto;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const NavLink = styled.a`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 0;
  
  &:hover {
    color: var(--accent-primary);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-primary);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem 0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid var(--border-color);
    
    &:last-child {
      border-bottom: none;
    }
    
    &::after {
      display: none;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--bg-secondary);
    color: var(--accent-primary);
  }
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
  
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.nav-container') && !target.closest('.mobile-menu-button')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    <>
      <Nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'
        }}
      >
        <NavContainer className="nav-container">
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
          
          <MobileMenuButton 
            className="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </NavContainer>
      </Nav>
      
      <AnimatePresence>
        {isOpen && (
          <MobileMenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 