import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Personal from './components/Personal';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';

const AppContainer = styled.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  color: var(--text-primary);
`;

const GlobalStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  :root {
    /* Light theme variables */
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --text-primary: #333333;
    --text-secondary: #666666;
    --text-muted: #999999;
    --border-color: #e9ecef;
    --shadow-color: rgba(0, 0, 0, 0.1);
  }

  [data-theme="dark"] {
    /* Dark theme variables */
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --text-muted: #999999;
    --border-color: #404040;
    --shadow-color: rgba(0, 0, 0, 0.3);
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    color: var(--text-primary);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
`;

function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        <GlobalStyles />
        <ThemeToggle />
        <Navigation />
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Personal />
        <Contact />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
