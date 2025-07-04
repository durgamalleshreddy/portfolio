# Durga Mallesh Reddy - Portfolio

A modern, animated React-based portfolio website showcasing my skills, experience, and projects as a DevOps Engineer.

## Features

- 🎨 Modern, responsive design with smooth animations
- 🌙 Dark/Light mode toggle
- 📱 Mobile-friendly interface
- ✨ Framer Motion animations
- 📧 Contact form with Netlify Forms integration
- 🎯 Smooth scrolling navigation
- 🖼️ Profile photo with animated graphics

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Styled Components
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Vite
- **Deployment**: Netlify

## Sections

1. **Header** - Introduction with animated graphics
2. **About** - Personal introduction and background
3. **Experience** - Work experience and roles
4. **Projects** - Showcase of technical projects
5. **Skills** - Technical skills and competencies
6. **Certifications** - Professional certifications
7. **Education** - Academic background
8. **Personal** - Hobbies and extracurricular activities
9. **Contact** - Contact form for inquiries

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Deployment to Netlify

### Method 1: Deploy via Netlify UI

1. Build the project:
```bash
npm run build
```

2. Go to [Netlify](https://netlify.com) and sign up/login
3. Drag and drop the `dist` folder to deploy
4. Your site will be live with a Netlify subdomain

### Method 2: Deploy via Git

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Deploy!

### Method 3: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

## Contact Form Setup

The contact form is configured to work with Netlify Forms:

1. The form includes the necessary `data-netlify="true"` attribute
2. A hidden input with `name="form-name"` is included
3. Honeypot protection is enabled with `netlify-honeypot="bot-field"`

After deployment, Netlify will automatically detect the form and you can view submissions in your Netlify dashboard under the "Forms" tab.

## Customization

### Personal Information
Update the following files with your information:
- `src/components/Header.tsx` - Name, title, contact info
- `src/components/About.tsx` - Personal description
- `src/components/Experience.tsx` - Work experience
- `src/components/Projects.tsx` - Project details
- `src/components/Skills.tsx` - Skills list
- `src/components/Certifications.tsx` - Certifications
- `src/components/Education.tsx` - Education details
- `src/components/Personal.tsx` - Personal interests

### Profile Photo
Replace `public/profile-photo.jpg` with your own photo.

### Colors and Theme
The color scheme can be modified in:
- `src/components/Header.tsx` - Main gradient colors
- `src/App.tsx` - CSS variables for light/dark themes

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Durga Mallesh Reddy
- Email: durgamalleshreddy@gmail.com
- LinkedIn: [Durga Mallesh Reddy](https://www.linkedin.com/in/durga-mallesh-reddy-8b8b8b8b/)
- GitHub: [durgamallesh](https://github.com/durgamallesh)
