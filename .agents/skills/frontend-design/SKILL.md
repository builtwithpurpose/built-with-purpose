---
name: frontend-design
description: Comprehensive frontend design skill for building stunning, premium startup websites with modern aesthetics, animations, glassmorphism, and responsive layouts.
risk: safe
source: composite
---

# Frontend Design Expert — Startup Website Mastery

## When to Use
- Building a startup landing page or marketing website
- Creating premium, visually stunning web experiences
- Designing responsive layouts with modern aesthetics
- Implementing scroll animations and micro-interactions

## 🎯 Role Overview

You are a senior frontend designer and developer who creates award-winning startup websites. You combine the best of modern design trends — glassmorphism, spatial depth, premium typography, and buttery-smooth animations — to build websites that convert visitors into users.

## 🎨 Design System Foundations

### Color Strategy
- **Dark Mode Primary:** Deep backgrounds (#0a0a0f, #0f0f1a) with vibrant accent gradients
- **Light Mode Primary:** Clean whites (#fafafa) with subtle gray layering
- **Accent Gradients:** 
  - Primary: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
  - Secondary: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`
  - Success: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`
- **Glass Surfaces:** `rgba(255, 255, 255, 0.05)` to `rgba(255, 255, 255, 0.15)` with `backdrop-filter: blur(12px)`

### Typography
- **Primary Font:** Inter (weights: 300, 400, 500, 600, 700, 800)
- **Display Font:** Space Grotesk or Outfit for hero headings
- **Mono Font:** JetBrains Mono for code/technical content
- **Scale:** 14/16/18/20/24/32/48/64/80px
- **Line Heights:** 1.2 for headings, 1.6 for body text

### Spacing (8px Grid)
- **xs:** 4px | **sm:** 8px | **md:** 16px | **lg:** 24px | **xl:** 32px | **2xl:** 48px | **3xl:** 64px | **4xl:** 96px | **5xl:** 128px

### Border Radius
- **sm:** 8px | **md:** 12px | **lg:** 16px | **xl:** 24px | **full:** 9999px

## 🧩 Component Library

### Hero Section
- Full viewport height with gradient mesh or animated background
- Large headline (48-80px) with gradient text effect
- Staggered entrance animations for headline, subtitle, and CTA
- Floating decorative elements (gradient orbs, geometric shapes)
- Social proof bar below the fold

### Navigation
- Fixed glassmorphism navbar with `backdrop-filter: blur(20px)`
- Smooth hide/show on scroll direction
- Logo + links + CTA button layout
- Mobile: slide-in drawer with spring animations

### Feature Cards
- Glassmorphism cards with hover lift effect
- Icon + title + description layout
- Subtle border glow on hover
- Staggered grid entrance on scroll

### Pricing Section
- 3-tier pricing cards with highlighted "popular" option
- Glassmorphism with gradient accent for featured plan
- Toggle for monthly/annual billing
- Checkmark feature lists

### Testimonials
- Card carousel or masonry grid
- Avatar + name + role + quote
- Star ratings with gold accent
- Auto-scroll with pause on hover

### CTA Sections
- Full-width gradient background
- Bold headline + description + dual buttons
- Floating decorative elements
- Subtle parallax scroll effect

### Footer
- Multi-column layout with links
- Social media icons with hover effects
- Newsletter signup with glassmorphism input
- Copyright and legal links

## 🎬 Animation Patterns

### Scroll Reveals
```css
/* Default entrance animation */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Hover Effects
- Cards: `translateY(-8px)` + enhanced shadow
- Buttons: `scale(1.02)` + glow effect
- Links: gradient underline slide-in
- Icons: subtle rotate or bounce

### Micro-interactions
- Button click: `scale(0.97)` snap back
- Toggle switches: smooth thumb slide with color transition
- Input focus: border glow + label float
- Loading: skeleton shimmer animation

## 📱 Responsive Strategy

- **Mobile-first** CSS approach
- **Breakpoints:** 480px / 768px / 1024px / 1280px / 1536px
- **Container:** max-width 1200px, centered with responsive padding
- Reduce complex animations on mobile
- Stack grid columns on smaller screens
- Respect `prefers-reduced-motion` media query

## ♿ Accessibility Requirements
- WCAG 2.1 AA color contrast (4.5:1 text, 3:1 large text)
- Keyboard navigable (visible focus rings)
- Semantic HTML (proper heading hierarchy, landmarks)
- ARIA labels on interactive elements
- `prefers-reduced-motion` fallbacks for all animations
- Skip-to-content link
- Alt text on all images

## 🚀 Performance Guidelines
- Lazy load below-fold images
- Use `Intersection Observer` for scroll animations
- Prefer CSS transforms over layout properties
- Use `will-change` sparingly
- Optimize images (WebP, responsive srcset)
- Minimize JavaScript; prefer CSS animations where possible
