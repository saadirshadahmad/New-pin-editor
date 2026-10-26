# PinStudio — Pinterest Pin Studio for Digital Products

A browser-based Pinterest pin creative editor designed specifically for Etsy sellers, digital creators, and downloadable product merchants. Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Zustand**, **HTML5 Canvas 2D**, and **Dexie (IndexedDB)**.

---

## 🌟 Key Features

### 1. 20 Editable Digital-Product Templates
Every layout is an editable canvas element composition (not static images):
- **Template 01 — Clean Product Hero**: Large planner cover hero, title, subtitle, and CTA pill.
- **Template 02 — Full-Bleed Image**: 1000×1500 canvas image with dark gradient overlay, category pill, and headline.
- **Template 03 — Editorial Title + Image**: Upper editorial typography split with lower mockup focus.
- **Template 04 — Three-Image Collage**: Asymmetric 3-preview arrangement for bundle pages.
- **Template 05 — Four-Image Product Grid**: 2×2 grid showing multi-file digital packs.
- **Template 06 — Before / After or Problem / Solution**: Visual transformation with editable badges.
- **Template 07 — Feature Checklist**: Hero product mockup paired with 4 checkmark bullet points.
- **Template 08 — Free Download**: High-converting lead magnet pin with a bold FREE badge.
- **Template 09 — Bundle Showcase**: 1 main hero mockup + 3 preview tiles for 5-in-1 bundles.
- **Template 10 — Minimal Typography**: Generous negative space and high-contrast typography.
- **Template 11 — Product Pages Preview**: Realistic fanned/stacked preview sheets.
- **Template 12 — Device Mockup**: Original vector tablet frame with screen clipping.
- **Template 13 — Step-by-Step Guide**: 3 numbered actionable steps (01, 02, 03).
- **Template 14 — Benefits + Product**: Product mockup paired with 3 value cards.
- **Template 15 — Seasonal / Occasion**: Holiday banner, festive palette, and seasonal headline.
- **Template 16 — Quote / Tip Card**: Inspirational quote in quotes, author signoff, and product preview.
- **Template 17 — Checklist / Tracker Preview**: Habit tracker mockup with feature badges.
- **Template 18 — Colorway Comparison**: 3 columns showing product color variations.
- **Template 19 — Pinterest-Style Listicle Layout**: "5 Habits That Will Change Your Life" listicle.
- **Template 20 — Brand Signature**: Cohesive shop branding with logo/header, hero image, and shop URL.

### 2. High-Resolution Canvas & Export
- Default **2:3 vertical canvas** (1000 × 1500 px).
- **Direct Canvas 2D Export**:
  - **Standard 1×**: 1000 × 1500 px.
  - **Ultra-Sharp 2×**: 2000 × 3000 px.
- Waits for fonts (`document.fonts.ready`) and image decodes before capturing.
- Does not take DOM screenshots; renders pure canvas pixels for zero artifacts.

### 3. Interactive Artboard
- 8-handle interactive drag resizing (nw, n, ne, e, se, s, sw, w).
- Rotation handle with stalk and degree snapping.
- Center X (500px) and center Y (750px) smart snap guidelines.
- Zoom controls (fit to screen, 100%, + / -).
- Pinterest safe-area dotted guidelines toggle.
- Floating mobile feed preview tester.

### 4. Brand Kits
- Curated designer palettes: *Warm Minimalist*, *Lavender Dream*, *Earthy Botanical*, *Sleek Modern Slate*, *Blush & Champagne*.
- Custom brand kit creator.
- One-click smart brand application across backgrounds, titles, and CTA pills.

### 5. A/B Creative Variations (Bulk Workflow)
- Test different headlines, subtitles, and CTA colors on the same design.
- Batch export all variations with distinctive filenames (`[name]-variation-a-1x.png`).

### 6. Privacy & Persistence
- 100% client-side: images and designs stay in the user's browser.
- IndexedDB via Dexie for project storage, thumbnail previews, and asset caching.
- Portable JSON import and export.
- Pre-export design inspection (contrast check, small text warning, out-of-bounds check, missing image check).

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm or pnpm

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 📁 Architecture Overview
```
├── src/
│   ├── app/                    # Next.js App Router (layout, page, globals.css)
│   ├── components/editor/      # Editor UI components:
│   │   ├── Navbar.tsx          # Top bar with export, variations, autosave
│   │   ├── LeftSidebar.tsx     # Templates, uploads, typography, shapes, brand kit
│   │   ├── CanvasWorkspace.tsx # Interactive 2D artboard with drag/resize/rotate
│   │   ├── PropertiesPanel.tsx # Contextual property controls & layer manager
│   │   ├── WelcomeModal.tsx    # 3-path quick start flow
│   │   ├── FullPreviewModal.tsx# Clean full-screen 2:3 pin view
│   │   ├── QualityCheckModal.tsx# Pre-export contrast and bounds checks
│   │   ├── VariationsModal.tsx # A/B variation manager & batch exporter
│   │   └── BrandKitModal.tsx   # Color palette editor
│   ├── lib/
│   │   ├── canvas/             # Canvas 2D rendering & high-res export pipeline
│   │   ├── templates/          # All 20 full digital-product template definitions
│   │   ├── db/                 # Dexie IndexedDB persistence
│   │   ├── brand-kit/          # Palette definitions & application logic
│   │   ├── assets/             # Sample SVG mockups for immediate preview
│   │   └── quality-checks/     # Contrast, small-text, and bounds checking
│   ├── stores/                 # Zustand editor state with full undo/redo stack
│   └── types/                  # Shared TypeScript models
```
