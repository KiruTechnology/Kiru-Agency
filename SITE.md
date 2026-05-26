# KiruTech Website Documentation

Technical documentation for the KiruTech website built with React, TypeScript, and Vite.

## 🌟 Website Features

- **Responsive Design**: Fully responsive layout optimized for all devices
- **3D Animations**: Interactive dome gallery and hero animations using GSAP
- **Dynamic Content**: Service showcase, project portfolio, pricing, and team sections
- **Authentication**: User login and signup pages with secure layout
- **Legal Pages**: Privacy policy and terms of service pages
- **Performance Optimized**: Built with Vite for rapid development and fast builds
- **Type Safe**: Full TypeScript support for reliable code
- **Modern Styling**: Tailwind CSS for utility-first styling
- **Accessibility**: Optimized for accessible web design

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.5
- **Language**: TypeScript 6.0
- **Build Tool**: Vite 8.0
- **Styling**: Tailwind CSS 4.3 + TailwindCSS Vite Plugin
- **Routing**: React Router DOM 7.15
- **Animations**: GSAP 3.15
- **Gestures**: @use-gesture/react 10.3
- **Compiler**: React Compiler (Babel) for automatic optimization
- **Linting**: ESLint 10.2 with TypeScript support
- **Code Quality**: TypeScript ESLint for type-aware linting

## 📁 Project Structure

```
src/
├── assets/              # Static assets and component demos
├── components/          # Reusable React components
│   ├── Buttons.tsx
│   ├── DomeGallery.tsx
│   ├── FloatingCTA.tsx
│   ├── HeroWithDomeGallery.tsx
│   ├── KIRUMAIN.tsx
│   ├── Reveal.tsx
│   ├── icons/           # Icon components
│   ├── layout/          # Layout components (Navbar, Footer, etc.)
│   └── sections/        # Page sections (Features, Services, Pricing, etc.)
├── data/                # Static data and configuration
├── layouts/             # Layout wrappers (RootLayout, SecurityLayout)
├── pages/               # Page components
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── SignupPage.tsx
│   ├── ProjectsPage.tsx
│   ├── ServicesPage.tsx
│   ├── PrivacyPolicy.tsx
│   ├── TermsOfService.tsx
│   └── NotFoundPage.tsx
├── styles/              # Global and component styles
├── App.tsx              # Main app component with routing
└── main.tsx             # Application entry point
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd KiruTech
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement (HMR)
- **`npm run build`** - Build TypeScript and create an optimized production bundle
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 🎨 Key Components

### Sections

- **Features**: Showcase of KiruTech's key capabilities
- **Services**: Detailed service offerings
- **Process**: Step-by-step explanation of work methodology
- **Pricing**: Transparent pricing tiers
- **Testimonials**: Client feedback and success stories
- **Team**: Team members and expertise
- **Work**: Portfolio of completed projects
- **FAQ**: Frequently asked questions
- **Contact**: Contact form and information
- **StatsStrip**: Key metrics and statistics

### Interactive Elements

- **HeroWithDomeGallery**: Eye-catching hero section with 3D dome gallery
- **FloatingCTA**: Floating call-to-action button
- **FloatingButton**: Dynamic floating button component
- **Reveal**: Scroll-based content reveal animations

## 🔒 Security

The project includes security-focused layouts and pages:

- Separate `SecurityLayout` for authentication pages
- Privacy Policy compliance
- Terms of Service documentation
- Secure routing patterns

## 🚀 Build & Deployment

### Production Build

```bash
npm run build
```

This creates an optimized production bundle in the `dist/` directory with:

- Minified JavaScript and CSS
- Optimized images and assets
- Source maps for debugging

### Preview Production Build

```bash
npm run preview
```

## 🧹 Code Quality

The project uses modern development tools:

- **ESLint**: Enforces code quality and consistency
- **TypeScript**: Provides type safety and better development experience
- **React Compiler**: Automatically optimizes React components

To lint your code:

```bash
npm run lint
```

## 🎯 Performance Features

- **Vite HMR**: Instant module hot updates during development
- **React Compiler**: Automatic optimization of React components (enabled by default)
- **Code Splitting**: Automatic splitting of code for better performance
- **CSS Optimization**: Tailwind CSS purging for minimal bundle size
- **Lazy Loading**: Route-based code splitting for faster initial loads

## 📱 Browser Support

This project supports modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

When contributing to the KiruTech website:

1. Follow the existing code structure and naming conventions
2. Ensure TypeScript strict mode compliance
3. Run `npm run lint` before committing
4. Use meaningful commit messages

## 📄 License

This project is proprietary software owned by KiruTech. All rights reserved.

---

For company information, see [README.md](./README.md)
