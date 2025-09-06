# AI Tools Hub – Next.js + TypeScript + Tailwind + Framer Motion

A premium, highly interactive landing experience for an AI tools platform. Portfolio‑ready to impress global clients and startups.

**Developer — Bushra Sayyed**

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react icons

## Project Structure
```
app/
  layout.tsx
  page.tsx                # Landing
  signin/page.tsx         # Sign In (with AI robot)
  trial/page.tsx          # Free Trial
  features/page.tsx       # Features grid
components/
  Navbar.tsx
  Hero.tsx
  Footer.tsx
  Sections/
    Features.tsx
    Demo.tsx
    Pricing.tsx
    Testimonials.tsx
    CTA.tsx
  ui/
    AnimatedButton.tsx
lib/
  data.ts                 # features & testimonials
  utils.ts
public/
  (optional assets)
```

## Getting Started
```bash
# 1) Install deps
pnpm i   # or: npm i  |  yarn

# 2) Dev
pnpm dev # or: npm run dev  |  yarn dev

# 3) Build
pnpm build && pnpm start
```

## Notes
- All primary CTAs are wired:
  - **Sign In** → `/signin`
  - **Start Free Trial** / **Get Started** → `/trial`
  - **Explore All Features** → `/features`
  - **Pricing / Demo** nav items scroll to sections on the home page (`/#pricing`, `/#demo`).
- Fully responsive (mobile → 4K), animated reveal & hover effects.
- Footer credits: **Developer — Bushra Sayyed**.
