import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: var(--bg-secondary);
  padding: 3rem 2rem 2rem 2rem;
  color: var(--text-primary);
  text-align: center;
  border-top: 1px solid var(--border-color);
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
        &copy; {new Date().getFullYear()} Durga Mallesh Reddy. All rights reserved.
      </div>
    </FooterSection>
  );
};

export default Footer; 