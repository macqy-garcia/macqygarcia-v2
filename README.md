# Macqy Garcia Portfolio Website Documentation

## Project Overview
This documentation outlines the structure, components, and implementation details for Macqy Garcia's personal portfolio website. The website serves to showcase professional experience, skills, and projects as a Senior Software Engineer with 9+ years of experience.

## Tech Stack
- **Frontend Framework**: React.js with Vite
- **Styling**: TailwindCSS
- **Deployment**: Vercel (current portfolio is at macqygarcia.vercel.app)
- **Version Control**: Git

## Project Structure
```
macqy-portfolio/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── SkillBadge.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Resume.jsx
│   ├── hooks/
│   │   └── useTheme.js
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── utils/
│   │   └── constants.js
│   ├── styles/
│   │   └── tailwind.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## Component Design

### Home Page Structure
1. **Hero Section**
   - Professional photo
   - Name: Macqy Garcia
   - Title: Senior Software Engineer
   - Brief introduction/tagline
   - Call to action buttons (View Resume, Contact Me)

2. **About Section**
   - Extended professional summary
   - Personal interests (Web Design, Basketball, Table Tennis, Hiking, Car Modification, Travelling)
   - Professional goals

3. **Experience Section**
   - Timeline-based layout showing career progression
   - Company cards with:
     - Position
     - Company name
     - Duration
     - Key responsibilities and achievements
   - Current and previous roles:
     - Senior Software Engineer at ING Hubs (Nov 2024 - Present)
     - Senior Software Engineer at Indra PH (July 2023 - December 2024)
     - Mid Software Engineer at "We move people and things" (April 2022 - August 2024)
     - Software Engineer at Department of the Interior and Local Government (September 2015 - April 2022)

4. **Skills Section**
   - Interactive skill cards organized by categories:
     - Programming Languages
     - Frontend/Libraries
     - Styling Libraries
     - Build Tools
     - State Management
     - Backend/Databases/ORMs
     - DevOps & Tools
     - Testing

5. **Education Section**
   - Bachelor of Science in Information Technology
   - Our Lady of Fatima University (2009 - 2013)

6. **Contact Section**
   - Email: garciamacqy@gmail.com
   - Phone: (+63) 955 5891828
   - LinkedIn: linkedin.com/in/macqy-garcia-3651621b8
   - Portfolio URL: macqygarcia.vercel.app
   - Contact form

## Responsive Design Specifications

- **Mobile First Approach**: All components designed for mobile and scaled up
- **Breakpoints**:
  - Small (sm): 640px
  - Medium (md): 768px
  - Large (lg): 1024px
  - Extra Large (xl): 1280px
  - 2XL (2xl): 1536px

## Theme and Styling

### Color Palette
- Primary: #0d47a1 (Dark Blue)
- Secondary: #e65100 (Orange)
- Background: #ffffff (White) / #121212 (Dark Mode)
- Text: #333333 (Dark Gray) / #f5f5f5 (Light Gray for Dark Mode)
- Accent: #00acc1 (Teal)

### Typography
- Headings: Inter, sans-serif
- Body: Roboto, sans-serif
- Code/Technical: Fira Code, monospace

## Features to Implement

1. **Dark Mode Toggle**
   - Implemented using React Context API
   - Persisted using localStorage

2. **Interactive Timeline**
   - Animated scrolling for experience section
   - Visual indicators for timeline progression

3. **Skill Visualization**
   - Progress bars or radar charts showing skill proficiency
   - Filterable skill badges by category

4. **Project Showcase**
   - Gallery of projects with:
     - Screenshots
     - Technologies used
     - Brief description
     - Links to live demo/GitHub

5. **Dynamic Resume**
   - Interactive version of resume
   - Option to download PDF version

6. **Smooth Animations**
   - Page transitions
   - Scroll-triggered animations using Intersection Observer API

## Deployment Strategy

1. **Development Workflow**
   - Local development using Vite dev server
   - Git for version control

2. **Build Process**
   - Optimize assets and bundle size
   - Generate static files using Vite build

3. **Deployment**
   - Host on Vercel
   - Configure custom domain if needed
   - Setup CI/CD through GitHub integration

## Performance Considerations

1. **Code Splitting**
   - Lazy load components not needed for initial render
   - Use dynamic imports for heavy components

2. **Image Optimization**
   - Use WebP format where possible
   - Implement responsive images with srcset
   - Lazy load images below the fold

3. **Core Web Vitals Optimization**
   - Minimize Largest Contentful Paint (LCP)
   - Optimize First Input Delay (FID)
   - Reduce Cumulative Layout Shift (CLS)

## Accessibility Considerations

1. **WCAG Compliance**
   - Proper heading hierarchy
   - Sufficient color contrast
   - Keyboard navigation support
   - Proper alt text for images

2. **Screen Reader Support**
   - Semantic HTML elements
   - ARIA labels where appropriate
   - Focus management for interactive elements

## Future Enhancements

1. **Blog Section**
   - Technical articles/tutorials
   - Professional insights

2. **Interactive Portfolio**
   - 3D elements with Three.js
   - Interactive code examples

3. **Testimonials**
   - Feedback from colleagues and clients

4. **Advanced Contact Options**
   - Calendly integration for scheduling calls
   - Multiple contact form templates
