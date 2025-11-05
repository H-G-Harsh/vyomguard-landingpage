# VyomGarud Landing Page

A modern, responsive landing page for VyomGarud - a military-grade UAV/drone systems company. Built with Next.js, Tailwind CSS, and Framer Motion to deliver a professional, high-performance web experience.

![VyomGarud Landing Page](./public/gif (1).gif)

## 🚀 Overview

VyomGarud's landing page showcases precision engineering and advanced autonomy through a clean, confident design. The single-page application features smooth animations, responsive layouts, and a military-grade aesthetic that reflects the company's mission-critical focus.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, and TypeScript
- **Responsive Design**: Seamlessly adapts from mobile (375px) to desktop (1920px+)
- **Smooth Animations**: Framer Motion powers subtle, professional transitions
- **Dark Theme**: Military-grade aesthetic with charcoal backgrounds and orange accents
- **Performance Optimized**: Fast load times and smooth 60fps animations
- **Accessible**: WCAG AA compliant with keyboard navigation support
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🎨 Design System

### Color Palette
- **Primary Background**: `#1a1a1a` (Charcoal)
- **Secondary Background**: `#2a2a2a` (Lighter Charcoal)
- **Primary Text**: `#ffffff` (White)
- **Secondary Text**: `#b0b0b0` (Gray)
- **Accent**: `#ff7b00` (Orange)
- **Accent Hover**: `#e66d00` (Darker Orange)

### Typography
- **Headings**: Poppins (400, 500, 600, 700, 800)
- **Body Text**: Inter (300, 400, 500, 600)

### Sections
1. **Hero** - Full-screen introduction with animated title and CTA
2. **About** - Mission statement with animated precision icon
3. **Capabilities** - Four product/service cards with hover effects
4. **Highlights** - Three key differentiators with icons
5. **Contact** - Form with validation and contact information
6. **Footer** - Branding and social links

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Clone and Install

```bash
# Clone the repository
git clone <repository-url>
cd vyomgarud-landing

# Install dependencies
npm install

# Run development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm start
```

## 📁 Project Structure

```
vyomgarud-landing/
├── public/
│   └── images/          # Image assets
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout with fonts and metadata
│   │   ├── page.tsx     # Main landing page
│   │   └── globals.css  # Global styles and theme
│   ├── components/
│   │   ├── Hero.tsx     # Hero section
│   │   ├── About.tsx    # About section
│   │   ├── Capabilities.tsx  # Capabilities grid
│   │   ├── Highlights.tsx    # Highlights section
│   │   ├── Contact.tsx  # Contact form
│   │   ├── Footer.tsx   # Footer
│   │   └── ui/
│   │       ├── Button.tsx    # Reusable button component
│   │       ├── Card.tsx      # Reusable card component
│   │       └── Container.tsx # Layout container
│   ├── data/
│   │   └── content.ts   # Centralized content data
│   ├── types/
│   │   └── index.ts     # TypeScript interfaces
│   └── lib/
│       └── utils.ts     # Utility functions
├── package.json
└── README.md
```

## 🎯 Design Decisions

### Component Architecture
- **Reusable UI Components**: Button, Card, and Container components provide consistency
- **Content Separation**: All text content centralized in `data/content.ts` for easy updates
- **Type Safety**: TypeScript interfaces ensure data integrity across components

### Performance Optimizations
- **GPU-Accelerated Animations**: Using `transform` and `opacity` for smooth 60fps animations
- **Lazy Loading**: Images load on-demand to reduce initial bundle size
- **Code Splitting**: Next.js automatically splits code for optimal loading
- **Font Optimization**: Next.js font optimization for Google Fonts

### Responsive Strategy
- **Mobile-First**: Base styles target mobile, with progressive enhancement
- **Breakpoints**: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Flexible Grids**: CSS Grid and Flexbox adapt layouts seamlessly

### Animation Philosophy
- **Subtle & Professional**: Animations enhance without distracting
- **Performance-First**: All animations under 600ms for snappy feel
- **Accessibility**: Respects `prefers-reduced-motion` for users who need it

## 🧪 Testing Checklist

- [x] Responsive design tested at 375px, 768px, 1024px, 1920px
- [x] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [x] Form validation working correctly
- [x] All animations smooth and performant
- [x] Keyboard navigation functional
- [x] Color contrast meets WCAG AA standards
- [x] Images have descriptive alt text
- [x] Smooth scroll behavior working

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub repository
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel auto-detects Next.js and configures build settings
5. Click "Deploy" and your site goes live!

### Alternative Deployment Options
- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Use AWS hosting infrastructure
- **Self-hosted**: Build and deploy to your own server

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](./public/screenshot-desktop.png)

### Mobile View
![Mobile Screenshot](./public/screenshot-mobile.png)

## 🔧 Troubleshooting

### Build Errors
- Ensure Node.js version is 18 or higher
- Delete `node_modules` and `.next` folders, then reinstall: `npm install`
- Clear npm cache: `npm cache clean --force`

### Styling Issues
- Tailwind CSS v4 uses CSS-based configuration in `globals.css`
- Custom colors defined in `:root` CSS variables
- Check browser DevTools for CSS conflicts

### Animation Performance
- Reduce animation complexity if frame rate drops
- Check browser's Performance tab in DevTools
- Ensure GPU acceleration is enabled

## 📝 License

This project was created as part of the VyomGarud Web Developer Intern Assessment.

## 🤝 Contact

For questions or guidance:
- **Phone**: +91 8881444693
- **Email**: contact@vyomgarud.com

---

**Built with precision. Engineered for excellence.**
