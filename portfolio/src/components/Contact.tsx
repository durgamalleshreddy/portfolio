import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: var(--section-padding);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Form = styled(motion.form)`
  background: rgba(255,255,255,0.08);
  padding: 2.5rem 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 15px;
    gap: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    gap: 1rem;
  }
`;

const Input = styled.input`
  padding: 0.9rem 1.1rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.2);
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  background: rgba(255,255,255,0.15);
  color: white;
  outline: none;
  transition: all 0.3s ease;
  
  &::placeholder { 
    color: #e0e0e0; 
  }
  
  &:focus {
    border-color: rgba(255,255,255,0.5);
    background: rgba(255,255,255,0.2);
    box-shadow: 0 0 0 3px rgba(255,255,255,0.1);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 0.9rem;
    font-size: 0.9rem;
  }
`;

const Textarea = styled.textarea`
  padding: 0.9rem 1.1rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.2);
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  background: rgba(255,255,255,0.15);
  color: white;
  outline: none;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &::placeholder { 
    color: #e0e0e0; 
  }
  
  &:focus {
    border-color: rgba(255,255,255,0.5);
    background: rgba(255,255,255,0.2);
    box-shadow: 0 0 0 3px rgba(255,255,255,0.1);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    font-size: 1rem;
    min-height: 100px;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 0.9rem;
    font-size: 0.9rem;
    min-height: 80px;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #ffe066 0%, #ffd700 100%);
  color: #333;
  border: none;
  border-radius: 8px;
  padding: 0.9rem 1.5rem;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  justify-content: center;
  transition: all 0.3s ease;
  min-height: 44px;
  
  &:hover {
    background: linear-gradient(135deg, #ffd700 0%, #ffe066 100%);
    color: #222;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    gap: 0.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
    gap: 0.4rem;
  }
`;

const Message = styled.div<{ type: 'success' | 'error' }>`
  color: ${props => props.type === 'success' ? '#ffe066' : '#ff6b6b'};
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255,255,255,0.1);
  border: 1px solid ${props => props.type === 'success' ? 'rgba(255, 224, 102, 0.3)' : 'rgba(255, 107, 107, 0.3)'};
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.8rem;
    margin-top: 0.8rem;
  }
`;

const FormTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 1rem;
  color: white;
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`;

const FormSubtitle = styled.p`
  text-align: center;
  font-size: clamp(0.9rem, 2vw, 1rem);
  margin-bottom: 2rem;
  color: rgba(255,255,255,0.8);
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (response.ok) {
        setFormStatus('success');
        setMessage('Thank you! Your message has been sent successfully.');
        e.currentTarget.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus('error');
      setMessage('Sorry, there was an error sending your message. Please try again.');
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <FormTitle>Get In Touch</FormTitle>
        <FormSubtitle>I'd love to hear from you! Send me a message.</FormSubtitle>
        
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/success"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p style={{ display: 'none' }}>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          
          <Input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            aria-label="Your Name"
          />
          <Input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            aria-label="Your Email"
          />
          <Textarea 
            name="message" 
            placeholder="Your Message" 
            required 
            aria-label="Your Message"
          />
          <Button 
            type="submit" 
            disabled={formStatus === 'submitting'}
            aria-label={formStatus === 'submitting' ? 'Sending message...' : 'Send message'}
          >
            <FaPaperPlane />
            {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </Button>
          
          {formStatus === 'success' && (
            <Message type="success">{message}</Message>
          )}
          
          {formStatus === 'error' && (
            <Message type="error">{message}</Message>
          )}
        </Form>
      </Container>
    </ContactSection>
  );
};

export default Contact; 