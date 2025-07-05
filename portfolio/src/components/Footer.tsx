import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: var(--bg-secondary);
  padding: 3rem 2rem 2rem 2rem;
  color: var(--text-primary);
  text-align: center;
  border-top: 1px solid var(--border-color);

  @media (max-width: 768px) {
    padding: 2rem 1rem 1.5rem 1rem;
  }
`;

const FooterText = styled.div`
  color: var(--text-muted);
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <FooterText>
        &copy; {new Date().getFullYear()} Durga Mallesh Reddy. All rights reserved.
      </FooterText>
    </FooterSection>
  );
};

export default Footer; 