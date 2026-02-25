# Emmanuel Nwalozie — Personal Site

![Next.js](https://img.shields.io/badge/Next.js_14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel)

A cinematic personal portfolio site for Emmanuel Nwalozie — USC student, dual athlete (defensive end + sprinter), poet, and student government representative.

> Screenshot

## Features

- **Cinematic Hero** — Full-screen video background with a pulsing warm amber orb, smooth clip-up title animations, and a subtle scroll indicator; graceful fallback for when no video is loaded
- **Personality Ticker** — Horizontally scrolling marquee of character traits and interests, giving immediate personality context above the fold
- **Photo Gallery** — Masonry-style grid with staggered Framer Motion reveal animations and a warm shimmer on hover; features a 2+1 desktop layout with full-width and portrait cards
- **Beach Section with Parallax** — Full-width parallax scroll images flanking a 4-column handstand portrait grid; each photo uses a subtle 7% parallax offset on scroll
- **Facts Section** — Typewriter-style staggered reveal of personal facts (athletics, campus, poetry, fashion, campus life) formatted as a clean label/value list
- **Accessibility-First** — Skip-to-content link, `aria-label` on every section, `aria-hidden` on all decorative elements, and semantic HTML throughout

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | Space Grotesk (display) + Inter (body) |
| Animation | Framer Motion (scroll reveal, parallax, page transitions) |
| Deployment | Vercel |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Adding the Hero Video

Drop a video file at `public/videos/hero.mp4` to activate the full-screen background. The site displays a warm radial gradient fallback without it.

## Project Structure

```
app/
  page.tsx              # Root page — composes all sections
  layout.tsx            # Root layout with metadata and font setup
  globals.css           # Global styles and custom CSS variables
components/
  Hero.tsx              # Full-screen cinematic hero with video background
  PersonalityTicker.tsx # Scrolling personality marquee
  Gallery.tsx           # Masonry photo grid with Framer Motion reveals
  BeachSection.tsx      # Parallax beach photo section
  FactsSection.tsx      # Staggered facts list
  GrainOverlay.tsx      # Subtle film grain texture overlay
  Footer.tsx            # Minimal footer with location and year
public/
  images/               # Photo assets
  videos/               # hero.mp4 (not committed — add locally)
```

## Author

**Caleb Newton** — [calebnewton.me](https://calebnewton.me)
Personal site built for Emmanuel Nwalozie · USC · 2026
