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
  overflow-x: hidden;
`;

const GlobalStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    /* Responsive font sizing */
    @media (max-width: 1200px) {
      font-size: 15px;
    }
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
    
    @media (max-width: 480px) {
      font-size: 13px;
    }
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
    --accent-primary: #667eea;
    --accent-secondary: #764ba2;
    --nav-bg: rgba(255, 255, 255, 0.95);
    --nav-border: rgba(0, 0, 0, 0.1);
    --card-bg: #ffffff;
    --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    /* Responsive spacing */
    --section-padding: 5rem 2rem;
    --container-max-width: 1200px;
    --border-radius: 15px;
    
    @media (max-width: 768px) {
      --section-padding: 3rem 1rem;
      --border-radius: 10px;
    }
    
    @media (max-width: 480px) {
      --section-padding: 2rem 1rem;
    }
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
    --nav-bg: rgba(26, 26, 26, 0.95);
    --nav-border: rgba(255, 255, 255, 0.1);
    --card-bg: #2d2d2d;
    --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
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
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    color: var(--text-primary);
    
    /* Responsive heading sizes */
    @media (max-width: 768px) {
      line-height: 1.3;
    }
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }

  h3 {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
  }

  h4 {
    font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  }

  p {
    font-size: clamp(0.9rem, 2vw, 1rem);
    line-height: 1.6;
    
    @media (max-width: 768px) {
      line-height: 1.7;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Container utility class */
  .container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  /* Section utility class */
  .section {
    padding: var(--section-padding);
  }

  /* Grid utility classes */
  .grid {
    display: grid;
    gap: 2rem;
    
    @media (max-width: 768px) {
      gap: 1.5rem;
    }
  }

  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
    
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .grid-auto-fit {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }

  /* Flex utility classes */
  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .items-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  /* Text utility classes */
  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  /* Spacing utility classes */
  .mb-1 { margin-bottom: 0.5rem; }
  .mb-2 { margin-bottom: 1rem; }
  .mb-3 { margin-bottom: 1.5rem; }
  .mb-4 { margin-bottom: 2rem; }
  .mb-5 { margin-bottom: 3rem; }

  .mt-1 { margin-top: 0.5rem; }
  .mt-2 { margin-top: 1rem; }
  .mt-3 { margin-top: 1.5rem; }
  .mt-4 { margin-top: 2rem; }
  .mt-5 { margin-top: 3rem; }

  .p-1 { padding: 0.5rem; }
  .p-2 { padding: 1rem; }
  .p-3 { padding: 1.5rem; }
  .p-4 { padding: 2rem; }
  .p-5 { padding: 3rem; }

  /* Responsive visibility classes */
  .hidden-mobile {
    @media (max-width: 768px) {
      display: none !important;
    }
  }

  .hidden-desktop {
    @media (min-width: 769px) {
      display: none !important;
    }
  }

  /* Smooth scrolling for anchor links */
  html {
    scroll-padding-top: 80px;
    
    @media (max-width: 768px) {
      scroll-padding-top: 60px;
    }
  }

  /* Better touch targets for mobile */
  @media (max-width: 768px) {
    button, a, [role="button"] {
      min-height: 44px;
      min-width: 44px;
    }
  }

  /* Improved focus states for accessibility */
  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  textarea:focus-visible {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
  }

  /* Reduced motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
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
