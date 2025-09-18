# React Motion Components Library

A React-based motion/animation component library that provides reusable components utilizing Framer Motion and Three.js in a shadcn/ui style.

## Project Overview

This project provides high-quality animation components that developers can easily copy and use. Following the shadcn/ui philosophy, components are distributed via source code copying rather than as an npm package.

### Key Features

- 🎨 **Framer Motion** based 2D animations
- 🎮 **Three.js & React Three Fiber** based 3D graphics
- 🎯 **TypeScript** full support
- 🎨 **Tailwind CSS** styling
- 📦 **shadcn/ui style** component distribution
- 🚀 **Vite** based fast development environment

## Tech Stack

### Core

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and development server

### Animation & 3D

- **Motion** - New animation library (latest version of Framer Motion)
- **Framer Motion** - Declarative animation library
- **Three.js** - 3D graphics library
- **@react-three/fiber** - Three.js renderer for React
- **@react-three/drei** - R3F utility components

### Styling

- **Tailwind CSS** - Utility-first CSS
- **class-variance-authority** - Conditional class management
- **tailwind-merge** - Tailwind class merging
- **clsx** - Class name utility

## Project Structure

```
react-mov/
├── src/
│   ├── components/
│   │   ├── ui/              # Basic UI components
│   │   └── animations/       # Animation components
│   ├── registry/            # Component registry
│   │   ├── index.ts         # Registry configuration
│   │   └── components/      # Registered components
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── hooks/               # Custom hooks
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static files
├── components.json          # shadcn/ui configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation and Setup

1. **Clone the repository**

```bash
git clone https://github.com/mooyeon-choi/react-mov.git
cd react-mov
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

### Available Scripts

```bash
npm run dev        # Start development server (default: http://localhost:5173)
npm run build      # Production build
npm run preview    # Preview built result
npm run typecheck  # TypeScript type checking
npm run lint       # Lint check
```

## Component Usage

### 1. Installation via CLI (Recommended)

CLI tool will be available in the future:

```bash
npx react-mov add [component-name]
```

### 2. Manual Copy

1. Find desired component in `src/registry/components/`
2. Copy to your project
3. Install required dependencies

### Example Component Usage

```tsx
import { MotionCard } from "@/components/animations/motion-card";

function MyComponent() {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Animated Content</h2>
    </MotionCard>
  );
}
```

## Component Development Guide

### Adding New Components

1. **Create component file**

```tsx
// src/components/animations/my-animation.tsx
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MyAnimationProps {
  className?: string;
  children?: React.ReactNode;
}

export function MyAnimation({ className, children }: MyAnimationProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
```

2. **Register in registry**

```typescript
// src/registry/index.ts
export const registry = [
  {
    name: "my-animation",
    type: "components:animation",
    files: ["my-animation.tsx"],
    dependencies: ["framer-motion"],
  },
];
```

### Component Writing Rules

1. **TypeScript type definitions required**
2. **Export Props interface**
3. **Merge className with cn() utility**
4. **Specify dependencies**
5. **Provide Storybook examples** (optional)

## Component Categories

### Motion (Framer Motion)

- Fade In/Out
- Slide Animations
- Scale Animations
- Rotate Animations
- Path Animations
- Gesture Animations
- Scroll-triggered Animations
- Page Transitions

### 3D (Three.js)

- 3D Card Flip
- Particle Systems
- 3D Text Effects
- Mesh Animations
- Camera Controls
- Lighting Effects
- Post-processing Effects

### UI Components

- Animated Buttons
- Loading Spinners
- Progress Bars
- Tooltips
- Modals
- Drawers
- Accordions
- Tabs

## Distribution System

### Registry Structure

Components are registered in the registry in the following format:

```json
{
  "name": "component-name",
  "type": "components:ui",
  "registryDependencies": [],
  "dependencies": ["framer-motion"],
  "devDependencies": [],
  "files": [
    {
      "name": "component-name.tsx",
      "content": "// Component source code"
    }
  ]
}
```

### Component Metadata

Each component includes metadata:

- Name and description
- Dependency list
- Usage examples
- API documentation
- Browser compatibility

## Contributing

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow ESLint rules
- Apply Prettier formatting
- Write unit tests per component
- Provide Storybook stories

## Roadmap

### Phase 1: Basic Setup ✅

- [x] Initial project setup
- [x] TypeScript, Vite configuration
- [x] Tailwind CSS setup
- [x] Framer Motion, Three.js integration
- [x] shadcn/ui style setup

### Phase 2: Core Components

- [ ] 10 basic motion components
- [ ] 5 3D components
- [ ] 5 interactive components

### Phase 3: Distribution System

- [ ] CLI tool development
- [ ] Online documentation site
- [ ] Component playground
- [ ] npm package distribution

### Phase 4: Expansion

- [ ] Animation preset system
- [ ] Theme customization
- [ ] Plugin system
- [ ] Community components

## License

MIT License - Free to use, modify, and distribute

## Links

- [GitHub Repository](https://github.com/mooyeon-choi/react-mov)
- [Documentation](#) (Coming soon)
- [Component Gallery](#) (Coming soon)
- [Discord Community](#) (Coming soon)

## Contact & Support

- Issues: [GitHub Issues](https://github.com/mooyeon-choi/react-mov/issues)
- Email: lon12080@naver.com

---

Built with ❤️ using React, Framer Motion, and Three.js
