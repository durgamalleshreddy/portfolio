import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes, FaChevronDown, FaGithub, FaLinkedin } from 'react-icons/fa';

const Nav = styled.nav`
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
  &:hover { color: var(--accent-primary); }
  @media (max-width: 768px) { font-size: 1.25rem; }
  @media (max-width: 480px) { font-size: 1.1rem; }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--nav-bg);
    backdrop-filter: blur(15px);
    flex-direction: column;
    padding: 1rem 0.5rem 0.5rem 0.5rem;
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-120%)'};
    transition: transform 0.3s cubic-bezier(.4,2,.6,1);
    border-top: 1px solid var(--nav-border);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    max-height: 70vh;
    overflow-y: auto;
    z-index: 1001;
  }
  @media (max-width: 480px) {
    padding: 0.5rem 0.25rem;
    max-height: 50vh;
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
  &:hover { color: var(--accent-primary); }
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
  &:hover::after { width: 100%; }
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid var(--border-color);
    &:last-child { border-bottom: none; }
    &::after { display: none; }
    &:hover {
      background: var(--bg-secondary);
      border-radius: 6px;
      margin: 0.25rem 0;
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

const MoreMenuToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.2s;
  &:hover { color: var(--accent-primary); }
`;

const MoreMenu = styled.div<{ show: boolean }>`
  width: 100%;
  background: var(--bg-secondary);
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  margin-top: 0.25rem;
  padding: 0.5rem 0;
  display: ${props => props.show ? 'block' : 'none'};
  text-align: center;
`;

const MoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: var(--accent-primary);
    color: #fff;
  }
`;

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
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
        setShowMore(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setShowMore(false);
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
          {/* More menu for mobile */}
          <MoreMenuToggle onClick={() => setShowMore(s => !s)}>
            More <FaChevronDown style={{ transform: showMore ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
          </MoreMenuToggle>
          <MoreMenu show={showMore}>
            <MoreLink href="https://github.com/durgamalleshreddy" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</MoreLink>
            <MoreLink href="https://linkedin.com/in/durgamalleshreddy" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</MoreLink>
            <MoreLink href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</MoreLink>
          </MoreMenu>
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
  );
};

export default Navigation; 