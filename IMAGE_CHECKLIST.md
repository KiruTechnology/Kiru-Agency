# Image Asset Checklist

Use this checklist to track which images have been placed in the correct folders.

## ✅ Projects (6 images) — `src/assets/projects/`

| Image                    | Status | Size   | Notes                    |
| ------------------------ | ------ | ------ | ------------------------ |
| flowboard-dashboard.webp | ⬜     | <150KB | Dashboard/analytics UI   |
| pulse-health-app.webp    | ⬜     | <150KB | Mobile app screenshot    |
| nexaos-workspace.webp    | ⬜     | <150KB | SaaS workspace UI        |
| mobile-onboarding.webp   | ⬜     | <150KB | Onboarding flow screens  |
| api-docs.webp            | ⬜     | <150KB | API documentation page   |
| design-system.webp       | ⬜     | <150KB | Design system components |

## ✅ Tech Stack (6 images) — `src/assets/stack/`

| Image              | Status | Size  | Notes                       |
| ------------------ | ------ | ----- | --------------------------- |
| react-card.webp    | ⬜     | <50KB | React logo (400×400px)      |
| go-card.webp       | ⬜     | <50KB | Go logo (400×400px)         |
| aws-card.webp      | ⬜     | <50KB | AWS logo (400×400px)        |
| postgres-card.webp | ⬜     | <50KB | PostgreSQL logo (400×400px) |
| docker-card.webp   | ⬜     | <50KB | Docker logo (400×400px)     |
| figma-card.webp    | ⬜     | <50KB | Figma logo (400×400px)      |

## ✅ Team (3 images) — `src/assets/team/`

| Image              | Status | Size   | Notes                      |
| ------------------ | ------ | ------ | -------------------------- |
| whiteboard.webp    | ⬜     | <150KB | Team whiteboarding session |
| coding.webp        | ⬜     | <150KB | Developers coding/working  |
| design-review.webp | ⬜     | <150KB | Design review meeting      |

## ✅ Outcomes (4 images) — `src/assets/outcomes/`

| Image               | Status | Size   | Notes                    |
| ------------------- | ------ | ------ | ------------------------ |
| retention-card.webp | ⬜     | <100KB | 340% retention stat card |
| appstore-card.webp  | ⬜     | <100KB | 4.9★ App Store card      |
| arr-card.webp       | ⬜     | <100KB | $2M ARR milestone card   |
| speed-card.webp     | ⬜     | <100KB | 8 weeks to launch card   |

---

## 🎯 Quick Image Sources

### Projects

- [Unsplash](https://unsplash.com) - Search "dashboard", "app screenshot", "workspace"
- Create mockups with [Figma](https://www.figma.com) - Use free templates
- [Dribbble](https://dribbble.com) - UI inspiration (design mockups)

### Tech Stack

- [Devicons](https://devicons.dev/) - Official React, Go, AWS, PostgreSQL, Docker, Figma logos
- Export as SVG, convert to WebP using [Squoosh](https://squoosh.app/)
- Keep logos centered with 20px padding on colored backgrounds

### Team

- Use real team photos for authenticity
- [Unsplash Portraits](https://unsplash.com/nq/people) - Professional headshots
- Crop to 1000×800px, compress to WebP

### Outcomes

- Create simple stat cards in [Figma](https://www.figma.com)
- Use your brand colors (blue #58a6ff, purple, green #3fb950)
- Large typography: 72px+ for numbers

---

## 🛠️ Compression Workflow

1. **Prepare image** (1200px max width for projects)
2. **Convert to WebP**:
   - Use [Squoosh](https://squoosh.app/)
   - Quality: 85-90 for photos, 95 for icons
3. **Verify size** (<150KB max)
4. **Save** to correct folder
5. **Check browser** - images load on dome gallery

---

## ⚡ Performance Check

After adding all images:

```bash
# Verify all images are present
ls -R src/assets/projects/
ls -R src/assets/stack/
ls -R src/assets/team/
ls -R src/assets/outcomes/

# Build and check bundle
npm run build

# Run production build test
npm run preview
```

**Open DevTools (F12) → Network Tab:**

- Filter by "Img"
- Verify all images load
- Check sizes are under limits
- Look for "lazy" in Loading column (for off-screen images)

---

## 📝 Notes

- All images should be WebP format for optimal size/quality
- Filenames must match exactly (case-sensitive)
- Keep images centered and well-composed for gallery display
- Compress before uploading to avoid slow gallery

Mark completed images with ✅ in the Status column above.
