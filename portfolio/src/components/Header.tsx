import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const HeaderContainer = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 100vh;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const ProfileSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

// Animated Graphics Container
const GraphicsContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  
  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

// Floating Geometric Shapes
const FloatingShape = styled(motion.div)<{ size: number; color: string; shape: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  opacity: 0.3;
  border-radius: ${props => props.shape === 'circle' ? '50%' : props.shape === 'triangle' ? '0' : '4px'};
  
  ${props => props.shape === 'triangle' && `
    background: transparent;
    border-left: ${props.size / 2}px solid transparent;
    border-right: ${props.size / 2}px solid transparent;
    border-bottom: ${props.size}px solid ${props.color};
    width: 0;
    height: 0;
  `}
  
  @media (max-width: 768px) {
    width: ${props => props.size * 0.7}px;
    height: ${props => props.size * 0.7}px;
    
    ${props => props.shape === 'triangle' && `
      border-left: ${props.size * 0.35}px solid transparent;
      border-right: ${props.size * 0.35}px solid transparent;
      border-bottom: ${props.size * 0.7}px solid ${props.color};
    `}
  }
`;

// Animated Particles
const Particle = styled(motion.div)<{ size: number; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  opacity: 0.6;
  
  @media (max-width: 768px) {
    width: ${props => props.size * 0.7}px;
    height: ${props => props.size * 0.7}px;
  }
`;

// Glowing Ring Effect
const GlowRing = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 220px;
  height: 220px;
  transform: translate(-50%, -50%);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  z-index: 0;
  
  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
  
  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const InnerGlowRing = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  
  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
  
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileImage = styled(motion.div)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  border: 4px solid rgba(255,255,255,0.3);
  overflow: hidden;
  position: relative;
  z-index: 2;
  box-shadow: 
    0 0 30px rgba(255, 255, 255, 0.2),
    inset 0 0 30px rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #667eea, #764ba2, #667eea);
    border-radius: 50%;
    z-index: -1;
    animation: rotate 3s linear infinite;
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 15%;
    border-radius: 50%;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    margin-bottom: 0.75rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 1rem;
    flex-direction: column;
    align-items: center;
  }
  
  @media (max-width: 480px) {
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }
`;

const ContactItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: transform 0.3s ease;
  padding: 0.5rem;
  border-radius: 8px;
  
  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.75rem;
    min-width: 200px;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    min-width: 180px;
    padding: 0.5rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255,255,255,0.3);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
`;

const Intro = styled(motion.div)`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  letter-spacing: 0.5px;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    flex-direction: column;
    gap: 0.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

const Subtitle = styled(motion.div)`
  font-size: 1.25rem;
  color: #ffe066;
  margin-bottom: 2rem;
  font-weight: 400;
  letter-spacing: 0.2px;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }
`;

const TITLES = ["DevOps Engineer", "Site Reliability Engineer"];

const Title = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  opacity: 0.9;
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    min-height: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    min-height: 2rem;
  }
`;

const Cursor = styled.span`
  animation: blink 1s infinite;
  color: #ffe066;
`;

const Header: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < TITLES[titleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(TITLES[titleIndex].slice(0, displayed.length + 1));
        }, 80);
      } else {
        setTyping(false);
        timeout = setTimeout(() => setTyping(true), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(TITLES[titleIndex].slice(0, displayed.length - 1));
        }, 40);
      } else {
        setTitleIndex((titleIndex + 1) % TITLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, titleIndex]);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML += `@keyframes wave { 0% { transform: rotate(0deg); } 10% { transform: rotate(14deg); } 20% { transform: rotate(-8deg); } 30% { transform: rotate(14deg); } 40% { transform: rotate(-4deg); } 50% { transform: rotate(10deg); } 60% { transform: rotate(0deg); } 100% { transform: rotate(0deg); } }`;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <HeaderContainer>
      <ProfileSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative' }}
      >
        {/* Animated Graphics Background */}
        <GraphicsContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Floating Geometric Shapes */}
          <FloatingShape
            size={50}
            color="#fff"
            shape="circle"
            style={{ top: '10%', left: '10%' }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <FloatingShape
            size={50}
            color="#fff"
            shape="triangle"
            style={{ top: '20%', left: '80%' }}
            animate={{
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <FloatingShape
            size={50}
            color="#fff"
            shape="circle"
            style={{ top: '80%', left: '20%' }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <FloatingShape
            size={50}
            color="#fff"
            shape="triangle"
            style={{ top: '70%', left: '70%' }}
            animate={{
              rotate: [0, -360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          {/* Animated Particles */}
          <Particle
            size={10}
            color="#fff"
            style={{ top: '30%', left: '30%' }}
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Particle
            size={10}
            color="#fff"
            style={{ top: '70%', left: '70%' }}
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Glowing Ring Effect */}
          <GlowRing
            animate={{
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <InnerGlowRing
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </GlowRing>
        </GraphicsContainer>
        
        <ProfileImage
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="/profile-photo.jpg" 
            alt="Durga Mallesh Reddy" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = '<FaUser style="font-size: 3rem; color: white;" />';
            }}
          />
        </ProfileImage>
      </ProfileSection>
      
      <Intro
        initial={{ opacity: 0, y: -40, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
      >
        <span role="img" aria-label="waving hand" style={{ fontSize: '2.2rem', display: 'inline-block', animation: 'wave 1.5s infinite' }}>👋</span>
        Hi, I am <span style={{ color: '#ffe066', fontWeight: 700 }}>Durga Mallesh!</span>
      </Intro>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.5 }}
      >
        I automate, optimize, and love ☕. Let's build something awesome together!
      </Subtitle>
      
      <Title
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ minHeight: '2.5rem' }}
      >
        {displayed}
        <span style={{ borderRight: '2px solid white', marginLeft: 2, animation: 'blink 1s steps(1) infinite' }} />
      </Title>
      
      <ContactInfo
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <ContactItem href="mailto:durgamalleshreddy@gmail.com">
          <FaEnvelope />
          durgamalleshreddy@gmail.com
        </ContactItem>
        <ContactItem href="tel:+919014650716">
          <FaPhoneAlt />
          +91 9014650716
        </ContactItem>
        <ContactItem>
          <FaMapMarkerAlt />
          Bangalore, India
        </ContactItem>
      </ContactInfo>
      
      <SocialLinks
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <SocialLink 
          href="https://linkedin.com/in/durgamallesh-reddy-36b9831a7" 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink 
          href="https://github.com/durgamalleshreddy" 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
        </SocialLink>
      </SocialLinks>
    </HeaderContainer>
  );
};

export default Header; 