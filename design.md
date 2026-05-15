# GitHub-Style Landing Page

## Design Prompt & Specification

> ⚠️ All color tokens marked `[PROJECT COLOR]` must be replaced with your project's chosen colors before implementation.

---

## 1. Overall Aesthetic

Build a dark-mode-first, developer-centric landing page with a cinematic, immersive hero and clean section-by-section storytelling. The feel is premium, technical, and confident — not flashy. Think: the night sky meets a codebase.

The design language should communicate reliability and craftsmanship. Every element earns its place — no decorative noise, no filler animations. Structure is the decoration.

---

## 2. Color Palette

Replace every `[PROJECT COLOR]` token below with your project's actual hex values. Keep the same roles — only the values change.

| Token                | Value                         | Usage                           |
| -------------------- | ----------------------------- | ------------------------------- |
| Background           | `[PROJECT COLOR — page base]` | Page base / darkest layer       |
| Surface              | `[PROJECT COLOR — cards/nav]` | Cards, nav bar, code blocks     |
| Border               | `[PROJECT COLOR — dividers]`  | Dividers, card outlines         |
| Primary Text         | `[PROJECT COLOR — headlines]` | Headlines, body copy            |
| Muted Text           | `[PROJECT COLOR — subtitles]` | Subtitles, captions, labels     |
| Accent (Primary)     | `[PROJECT COLOR — CTA]`       | CTA buttons, highlights, glow   |
| Accent (Secondary)   | `[PROJECT COLOR — secondary]` | Secondary highlights, badges    |
| Link / Interactive   | `[PROJECT COLOR — links]`     | Links, interactive badges       |
| Gradient Start → End | `[PROJECT COLOR — aurora]`    | Hero background aurora gradient |

> The hero background uses a subtle radial gradient aurora — the deepest background color fading into hints of your accent colors at the edges, like northern lights behind a dark sky. The gradient should animate slowly with CSS keyframes.

---

## 3. Typography

| Element          | Font                       | Size                     | Weight / Style       |
| ---------------- | -------------------------- | ------------------------ | -------------------- |
| UI / Body        | Inter (or system-ui)       | 1rem base                | 400 regular          |
| Code / Terminal  | JetBrains Mono / Fira Code | 0.875rem                 | 400 regular          |
| Hero Headline    | Inter                      | clamp(2.5rem, 6vw, 5rem) | 700–800 bold         |
| Subheadline      | Inter                      | 1.25rem – 1.5rem         | 400, line-height 1.6 |
| Section Headings | Inter                      | 2rem – 3rem              | 600 semi-bold        |
| Body Text        | Inter                      | 1rem                     | 400, line-height 1.7 |

- **Letter spacing:** Hero headline: `-0.02em` (tight). All other text: default.
- **Color rule:** Use Primary Text color for headlines. Use Muted Text color for supporting copy.

---

## 4. Navigation Bar

- **Position:** Full-width, sticky top, starts transparent — transitions to frosted glass on scroll.
- **Scroll effect:** `background: rgba([PROJECT COLOR — surface], 0.85)` + `backdrop-filter: blur(12px)`
- **Bottom border:** `1px solid [PROJECT COLOR — border]`. No drop shadows.
- **Left:** Logo / wordmark in Primary Text color.
- **Center:** Nav links: Products, Solutions, Resources, Pricing. Muted Text color, Primary Text on hover.
- **Right:** "Sign in" as ghost/text button + "Sign up" as solid Accent (Primary) CTA — `border-radius: 6px`.

---

## 5. Hero Section

This is the most important section. Full viewport height (`100vh`), dark with the aurora gradient. Everything here must feel intentional and cinematic.

### 5.1 Layout & Content

- **Alignment:** Centered, single-column text stack. Graphic element sits below or partially behind the text.
- **Eyebrow badge (optional):** Small pill badge — e.g. `"✦ Now with [Feature]"` — with a secondary accent gradient border and subtle outer glow.
- **H1 Headline:** Two lines, massive type, tight line-height (`1.1`). Primary Text color. Example structure: _"Build and ship / software, together."_
- **Subtext:** 1–2 sentences below the headline. Muted Text color. Max-width: `560px`, centered.
- **CTA row:** Primary button: solid Accent (Primary) color, white text, `px-6 py-3`, `border-radius: 6px`. Secondary button: ghost style, border at 30% opacity.
- **Social proof:** Below buttons: small muted line — e.g. _"Join 100 million+ developers"_ — `0.85rem`, Muted Text color.

### 5.2 Hero Graphic

Below the text sits a large animated terminal or code editor mockup card. It uses the Surface color, a thin Border color outline, and shows syntax-highlighted code or a commit graph. The card should bleed slightly off the bottom edge of the hero into the next section, visually connecting the two.

### 5.3 Animations

- **Aurora background:** CSS `@keyframes` slow hue-rotate or gradient position shift. Duration: 8–12 seconds, infinite, alternate.
- **Hero card on load:** `opacity: 0→1`, `translateY: 20px→0`, duration `0.6s`, ease-out. Slight delay after headline.
- **Headline:** Fade in, `0.4s`, ease-out.

---

## 6. Feature Sections (Alternating Layout)

After the hero, the page is divided into 2–4 large feature sections, each taking roughly `80vh–100vh`. They alternate layout directions to create visual rhythm.

### 6.1 Layout Options

- **A:** Text left, visual right
- **B:** Text right, visual left
- **C:** Centered text with a wide visual below

### 6.2 Section Anatomy

- **Section label:** Small ALL-CAPS overline — e.g. `"COLLABORATION"` — in Accent (Primary) color, `0.75rem`, `letter-spacing: 0.1em`.
- **H2:** 2–3 lines, large, Primary Text, bold.
- **Body paragraph:** 2–3 sentences, Muted Text color.
- **Feature list:** 3–4 items. Each item: icon (16–20px SVG line icon in Accent color) + bold label + short description.
- **Visual:** Product screenshot, animated diagram, or illustrated graphic in a Surface color card with Border color outline and subtle inner glow.
- **Spacing:** Minimum `120px` top/bottom padding per section.

---

## 7. Code / Terminal Animation Blocks

Scattered throughout the page: animated code blocks that simulate live coding or display syntax-highlighted snippets. These are critical to the developer aesthetic.

- **Card style:** Surface color background, `border-radius: 8–12px`, `1px` Border color outline.
- **Top bar:** Three colored dots (red/yellow/green) or a tab bar with a filename chip.
- **Code font:** Monospace (JetBrains Mono). Syntax highlighting: `[PROJECT COLOR]` for strings, keywords, variables.
- **Cursor:** Blinking cursor at end of last line (CSS blink animation, `1s` infinite).
- **Typewriter effect (optional):** Lines appear one-by-one using `setTimeout` or CSS animation with staggered delays.

---

## 8. Stats / Social Proof Bar

A full-width horizontal strip with a slightly lighter background (Surface color) containing 3–4 large impressive numbers.

|   100M+    |      4M+      |          90%          |      ~30 min       |
| :--------: | :-----------: | :-------------------: | :----------------: |
| Developers | Organizations | Fortune 100 Companies | Average Setup Time |

> Replace the numbers and labels with your own metrics. Animate these counters with IntersectionObserver — counting up from 0 when they scroll into view.

---

## 9. Bento Card Grid

One section should use a bento-box grid layout — a CSS Grid with unequal cell sizes for visual hierarchy. This is one of the defining features of the GitHub homepage aesthetic.

- **Grid:** 2–3 columns, unequal heights/widths. Some cards span 2 columns.
- **Card style:** Surface color background, `1px` Border color border, `border-radius: 12px`, `padding: 24–32px`.
- **Card content:** Headline + short text + small icon or illustration per card.
- **Hover state:** `border-color` lightens; subtle `box-shadow: 0 0 0 1px [PROJECT COLOR — accent at 20% opacity]`.
- **Hierarchy:** Use spanning cards for the most important feature. Smaller cards surround it.

---

## 10. Scroll Animations

Use IntersectionObserver (or a library like AOS or Framer Motion) to trigger animations as sections enter the viewport.

- **Section entry:** `opacity: 0→1`, `translateY: 30px→0`, duration: `0.5–0.7s`, ease-out.
- **Stats counters:** Numbers count up from 0 when the stats bar enters the viewport.
- **Card grid:** Cards reveal with staggered delay — each card delays by `i × 80ms`.
- **Code blocks:** Typewriter starts only when the block scrolls into view.
- **Rule:** Never animate on first paint above the fold — only trigger IntersectionObserver for below-fold elements.

---

## 11. Trusted By / Logos Strip

A horizontal strip showing partner or customer logos. Logos are displayed in Muted Text color (desaturated, reduced opacity ~50%), brightening to full opacity on hover. Can be a static grid or a slow auto-scrolling marquee.

---

## 12. Footer

Dark footer using the page Background color. Multi-column grid layout. A single `1px` Border color top border separates it from the last section.

- **Left column:** Logo + 1-line tagline + social icons (GitHub, Twitter/X, LinkedIn, YouTube).
- **Link columns:** 4–5 columns of grouped links — e.g. Product, Platform, Support, Company.
- **Link styles:** Muted Text color default, Primary Text on hover. No underlines by default.
- **Bottom bar:** Copyright left, "Privacy · Terms · Cookie preferences" right. Both in Muted Text color, `0.85rem`.

---

## 13. Technical Implementation Notes

### 13.1 CSS Architecture

- **Custom properties:** Define all color tokens as CSS variables (e.g. `--color-bg`, `--color-surface`) so dark/light switching is trivial.
- **Reset:** Use a modern CSS reset (e.g. Josh W Comeau's) before any styles.
- **Units:** Use `rem` for typography, `px` for borders/shadows, `clamp()` for responsive type scaling.

### 13.2 Accessibility

- **Focus rings:** All interactive elements get `:focus-visible` outlines (`2px`, Accent color, `2px` offset).
- **Color contrast:** All text must meet WCAG AA (4.5:1 for body, 3:1 for large text). Test with your chosen colors.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` — disable all transitions and animations.
- **Semantic HTML:** Use `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>` correctly.

### 13.3 Performance

- **Images:** Serve as WebP with `<picture>` fallback. Use `loading="lazy"` for all below-fold images.
- **Fonts:** Use `<link rel="preconnect">` for Google Fonts. Add `font-display: swap`.
- **Animations:** Prefer CSS transitions over JS for simple effects. Use `will-change: transform` sparingly.
- **Scroll behavior:** `html { scroll-behavior: smooth; }`

### 13.4 Responsive Breakpoints

| Breakpoint | Width          | Key Changes                                                       |
| ---------- | -------------- | ----------------------------------------------------------------- |
| Mobile     | < 640px        | Single column, hero text scales down via `clamp()`, hamburger nav |
| Tablet     | 640px – 1024px | 2-column feature sections, bento grid collapses to 2 cols         |
| Desktop    | > 1024px       | Full layout as described. Max content width: `1280px`, centered   |

---

## 14. Pre-Launch Checklist

- [ ] All `[PROJECT COLOR]` tokens replaced with actual hex values
- [ ] Color contrast tested for all text/background combinations (WCAG AA)
- [ ] Page tested on Chrome, Firefox, Safari, and Edge
- [ ] Mobile layout tested on 375px (iPhone SE) and 390px (iPhone 14) viewports
- [ ] All images converted to WebP and have descriptive `alt` text
- [ ] Animations disabled when `prefers-reduced-motion` is active
- [ ] Lighthouse score: Performance ≥ 90, Accessibility ≥ 90
- [ ] All links and CTAs are functional and point to correct destinations
- [ ] Font `preconnect` tags are in `<head>`
- [ ] Open Graph meta tags set (`og:title`, `og:description`, `og:image`)
