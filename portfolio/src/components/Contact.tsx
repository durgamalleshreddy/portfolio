import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const Form = styled(motion.form)`
  background: rgba(255,255,255,0.08);
  padding: 2.5rem 2rem;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 0.9rem 1.1rem;
  border-radius: 8px;
  border: none;
  font-size: 1.1rem;
  background: rgba(255,255,255,0.15);
  color: white;
  outline: none;
  &::placeholder { color: #e0e0e0; }
`;

const Textarea = styled.textarea`
  padding: 0.9rem 1.1rem;
  border-radius: 8px;
  border: none;
  font-size: 1.1rem;
  background: rgba(255,255,255,0.15);
  color: white;
  outline: none;
  min-height: 120px;
  resize: vertical;
  &::placeholder { color: #e0e0e0; }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #ffe066 0%, #ffd700 100%);
  color: #333;
  border: none;
  border-radius: 8px;
  padding: 0.9rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  justify-content: center;
  transition: background 0.3s;
  &:hover {
    background: linear-gradient(135deg, #ffd700 0%, #ffe066 100%);
    color: #222;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Message = styled.div<{ type: 'success' | 'error' }>`
  color: ${props => props.type === 'success' ? '#ffe066' : '#ff6b6b'};
  font-size: 1.1rem;
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255,255,255,0.1);
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
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p style={{ display: 'none' }}>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <Textarea name="message" placeholder="Your Message" required />
          <Button type="submit" disabled={formStatus === 'submitting'}>
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