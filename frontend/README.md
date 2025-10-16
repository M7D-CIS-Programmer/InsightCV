# InsightCV - AI-Powered Talent Matching Website

A stunning, modern, and futuristic website for InsightCV built with React and Framer Motion. This project features a professional design with exact color matching from the provided reference image, smooth animations, and responsive design.

## 🎨 Design Features

- **Exact Color Matching**: Uses the precise color palette from the reference image
  - Dark red-orange gradient background (`#2C1A1A` to `#FF5722`)
  - Neon orange accents (`#FF8C00`, `#FF5722`)
  - White text with proper contrast
- **Professional Animations**: Framer Motion powered smooth transitions
- **Responsive Design**: Works perfectly on all devices
- **Bilingual Support**: English and Arabic text
- **Modern UI/UX**: Glassmorphism effects, glowing elements, and parallax

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation with scroll effects
│   ├── Hero.js            # Hero section with bilingual content
│   ├── About.js           # About section with animated icons
│   ├── Features.js        # Features grid with hover effects
│   ├── Footer.js          # Footer with social links
│   └── *.css              # Component-specific styles
├── App.js                 # Main app component
├── App.css                # Global app styles
├── index.js               # React entry point
└── index.css              # Global styles and utilities
```

## 🎯 Key Components

### Navbar
- Transparent to solid on scroll
- Smooth entrance animations
- Mobile-responsive menu
- Dark/light mode toggle
- Glowing "Get Started" button

### Hero Section
- Bilingual headlines (English/Arabic)
- Parallax mouse effects
- Floating particle animations
- Gradient background matching reference
- Animated call-to-action buttons

### About Section
- Animated feature icons
- Scroll-triggered animations
- Statistics counter animations
- Background floating elements

### Features Section
- 4 feature cards with hover effects
- Framer Motion slide-in animations
- Gradient backgrounds
- Interactive buttons with glow effects

### Footer
- Newsletter signup
- Social media links
- Contact information
- Smooth hover animations
- Glow separator line

## 🎨 Color Palette

Based on the reference image:
- **Primary Background**: `#2C1A1A` → `#4A201A` → `#8B301A` → `#C0401A` → `#FF5722`
- **Accent Orange**: `#FF8C00`
- **Neon Orange**: `#FF5722`
- **Text**: `#FFFFFF` (white)
- **Secondary Text**: `rgba(255, 255, 255, 0.8)`

## 🛠 Technologies Used

- **React 18** - Modern React with hooks
- **Framer Motion** - Smooth animations and transitions
- **CSS3** - Advanced styling with gradients and effects
- **HTML5** - Semantic markup
- **Responsive Design** - Mobile-first approach

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## ✨ Animation Features

- **Scroll-triggered animations** using `useInView`
- **Hover effects** on interactive elements
- **Parallax mouse tracking** in hero section
- **Floating particles** and background elements
- **Smooth page transitions**
- **Loading animations** for components

## 🎯 Performance Optimizations

- **Lazy loading** for animations
- **Optimized CSS** with efficient selectors
- **Smooth scrolling** behavior
- **Hardware acceleration** for animations
- **Minimal re-renders** with proper React patterns

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📄 License

This project is created for demonstration purposes. All rights reserved.

---

**Built with ❤️ using React and Framer Motion**
