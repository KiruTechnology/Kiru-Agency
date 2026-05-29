# Image Optimization Guide for Dome Gallery

## 📋 Required Images (19 Total)

### Projects (6 images)

```
src/assets/projects/
├── flowboard-dashboard.webp      (Dashboard UI mockup)
├── pulse-health-app.webp         (Mobile app screenshot)
├── nexaos-workspace.webp         (SaaS interface)
├── mobile-onboarding.webp        (Onboarding flow)
├── api-docs.webp                 (API documentation UI)
└── design-system.webp            (Design system showcase)
```

### Tech Stack (6 images)

```
src/assets/stack/
├── react-card.webp               (React logo card)
├── go-card.webp                  (Go logo card)
├── aws-card.webp                 (AWS logo card)
├── postgres-card.webp            (PostgreSQL logo card)
├── docker-card.webp              (Docker logo card)
└── figma-card.webp               (Figma logo card)
```

### Team (3 images)

```
src/assets/team/
├── whiteboard.webp               (Whiteboarding session)
├── coding.webp                   (Developers coding)
└── design-review.webp            (Design review meeting)
```

### Outcomes (4 images)

```
src/assets/outcomes/
├── retention-card.webp           (340% retention stat)
├── appstore-card.webp            (4.9★ App Store rating)
├── arr-card.webp                 ($2M ARR milestone)
└── speed-card.webp               (8 weeks to launch)
```

---

## 🎯 Image Specifications

### Recommended Sizes & Quality

| Category    | Dimensions | Max Size | Format | Use Case         |
| ----------- | ---------- | -------- | ------ | ---------------- |
| Projects    | 1200×800px | 150KB    | WebP   | High-res mockups |
| Stack Icons | 400×400px  | 50KB     | WebP   | Card display     |
| Team Photos | 1000×800px | 120KB    | WebP   | Portrait shots   |
| Outcomes    | 600×400px  | 80KB     | WebP   | Stat cards       |

---

## 🚀 Optimization Steps

### 1. **Image Format: WebP**

- 25-35% smaller than JPG
- Better quality than JPEG
- Perfect for web delivery

**Tools:**

- [Squoosh](https://squoosh.app/) - Online converter
- [TinyPNG](https://tinypng.com/) - Batch compression
- ImageMagick - CLI conversion

### 2. **Compression Best Practices**

**Quality Settings:**

- Projects: 85-90 quality
- Stack Icons: 95 quality (crisp)
- Team: 80-85 quality
- Outcomes: 85 quality

**Target Sizes:**

- Keep under 150KB per image
- Aim for 80-100KB average

### 3. **Lazy Loading (Built-in)**

The `OptimizedImage` component automatically:

- Sets `loading="lazy"` for non-priority images
- Sets `decoding="async"` for non-blocking decode
- Provides `priority={true}` option for above-fold images

### 4. **Responsive Images**

For future enhancement, add multiple sizes:

```
src/assets/projects/
├── flowboard-dashboard-sm.webp   (500px - mobile)
├── flowboard-dashboard-md.webp   (800px - tablet)
└── flowboard-dashboard-lg.webp   (1200px - desktop)
```

---

## 📝 Where to Find Images

### Project Mockups

- [Unsplash](https://unsplash.com) - High quality free photos
- [Pexels](https://pexels.com) - Free stock photos
- [Mockup Generator](https://www.figma.com) - Create browser mockups
- [UI Design Kits](https://www.figma.com/community) - Pre-made UI

### Tech Stack Icons

- [Devicons](https://devicons.dev/) - Official tech logos (use SVG, convert to WebP)
- [SimpleIcons](https://simpleicons.org/) - Clean SVG logos
- [Icon Sets](https://icon-sets.iconify.design/) - Curated collection

### Team Photos

- [Unsplash Portraits](https://unsplash.com/nq/people) - Professional headshots
- Real team photos (best for authenticity & trust)

### Outcomes/Stats

- Create in Figma with your colors
- Use Canva or Adobe Express for quick graphics
- Screenshot beautiful dashboards

---

## ⚡ Performance Targets

| Metric        | Target        | Impact                 |
| ------------- | ------------- | ---------------------- |
| Image Size    | <150KB each   | ⚡ 60% faster          |
| Load Strategy | Lazy load     | ⚡ Initial load faster |
| Format        | WebP          | ⚡ 30% smaller         |
| Resolution    | 2x DPI source | 🎨 Crisp on Retina     |

---

## 🔧 Usage in Components

### Basic Usage

```tsx
import { OptimizedImage } from "./components/OptimizedImage";

<OptimizedImage
  src="/assets/projects/flowboard-dashboard.webp"
  alt="FlowBoard Analytics Dashboard"
/>;
```

### With Priority (Above Fold)

```tsx
<OptimizedImage
  src="/assets/projects/flowboard-dashboard.webp"
  alt="FlowBoard Analytics"
  priority={true} // Load immediately
/>
```

### DomeGallery Integration

The DOME_IMAGES array in HeroWithDomeGallery.tsx uses OptimizedImage internally for all gallery items.

---

## 📊 File Size Checklist

Before deploying, verify all images:

```bash
# Check file sizes
ls -lh src/assets/projects/
ls -lh src/assets/stack/
ls -lh src/assets/team/
ls -lh src/assets/outcomes/
```

**Must be under 150KB each.**

---

## 🎨 Design Recommendations

### Projects Section

- Show real or realistic mockups
- Include UI details (buttons, text, typography)
- Mix of mobile and desktop screens
- 1200×800px for gallery display

### Stack Section

- Clean, centered logos on colored backgrounds
- Consistent card sizing (400×400px)
- Match your brand colors (blue, purple, green)
- High contrast for visibility

### Team Section

- Professional headshots or action photos
- Similar color grading/tone across images
- Portrait orientation (1000×800px)
- Show real team at work if possible

### Outcomes Section

- Simple, bold stat cards
- Large typography for numbers
- Icons or visual elements
- 600×400px cards

---

## 🚀 Next Steps

1. ✅ Create folder structure (DONE)
2. ⬜ Find/create 19 images
3. ⬜ Compress to WebP format
4. ⬜ Upload to src/assets/[category]/
5. ⬜ Test lazy loading in DevTools
6. ⬜ Verify page speed in Lighthouse

---

## 📞 Support Commands

**Test image loading:**

```bash
npm run build  # Build and check bundle size
```

**View performance:**

- Open DevTools → Network tab
- Filter by "Img"
- Sort by "Size" to find large files
- Check "Loading" column for lazy-load behavior
