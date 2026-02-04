# Project Documentation - Ratan Mahal Resort Website

## 1. Project Overview
**Name**: Ratan Mahal Resort Website
**Purpose**: A premium, high-speed, and mobile-first website for a luxury resort in Ratangarh, Rajasthan.
**Core Features**:
- **PWA (Progressive Web App)** support for "Add to Home Screen".
- **Bilingual Content** (English & Hindi) for local reach.
- **Sticky Mobile Navigation** for app-like usage.
- **Direct Contact Features** (Click-to-Call, WhatsApp integration).

---

## 2. Technology Stack

### Core Framework
- **Next.js 16 (App Router)**: The latest React framework for server-side rendering, SEO, and fast routing.
- **React 19**: Modern UI library for building component-based interfaces.
- **TypeScript**: Ensures type safety and cleaner code.

### Styling & Design
- **Tailwind CSS v4**: Utility-first CSS framework configured for "Zero-Runtime" styles.
- **CSS Variables**: Used for the custom design system (Gold/Beige theme).
  - Primary: `#D4AF37` (Gold), `#4A3728` (Royal Brown).
  - Background: `#F5F5DC` (Beige/Cream).
- **Fonts**:
  - Headings: `Playfair Display` (Serif, for luxury feel).
  - Body: `Inter` (Sans-serif, for readability).

### Icons & Assets
- **Lucide React**: Modern, lightweight SVG icons.
- **Next/Image**: Automatic image optimization and lazy loading.

---

## 3. Project File Structure (Tree)

```
/Ratan mahal
├── app/                        # App Router Directories (Pages)
│   ├── layout.tsx              # Root layout (Fonts, Meta, Navbar, Footer)
│   ├── page.tsx                # Home Page (Hero, Highlights)
│   ├── globals.css             # Global Styles (Tailwind imports & Theme variables)
│   ├── manifest.ts             # PWA Configuration
│   ├── about/page.tsx          # About Us Page
│   ├── rooms/page.tsx          # Rooms & Suites Page
│   ├── dining/page.tsx         # Restaurant Page
│   ├── amenities/page.tsx      # Facilities Page
│   ├── events/page.tsx         # Weddings & Events Page
│   ├── gallery/page.tsx        # Photo Gallery Page
│   ├── contact/page.tsx        # Contact Us Page
│   ├── reviews/page.tsx        # Guest Reviews Page
│   └── favicon.ico
│
├── components/                 # Reusable UI Components
│   ├── Navbar.tsx              # Sticky Top Navigation (Desktop)
│   ├── MobileMenu.tsx          # Sticky Bottom Navigation (Mobile)
│   ├── Footer.tsx              # Site Footer (Map, Address, Links)
│   ├── Hero.tsx                # Home Page Main Banner
│   ├── Highlights.tsx          # Icon Grid for Amenities
│   └── FloatingButtons.tsx     # WhatsApp/Phone Floating Action Buttons
│
├── public/                     # Static Assets
│   ├── next.svg
│   └── ...
│
├── .vscode/                    # Editor Settings
│   └── settings.json           # VS Code configuration (ignoring CSS warnings)
│
├── next.config.ts              # Next.js Config
├── tailwind.config.ts          # Tailwind Config (if explicit config needed)
├── package.json                # Dependencies & Scripts
├── tsconfig.json               # TypeScript Configuration
└── README.md                   # Setup Instructions
```

---

## 4. Key Component Implementation Details

### **Responsive Navigation**
- **Desktop**: A traditional top navbar that starts transparent and turns solid white upon scrolling.
- **Mobile**: A bottom sticky bar (like Instagram/YouTube apps) providing easy thumb reach to Home, Rooms, Dining, and Events.

### **Theming (Gold & Royal Brown)**
All colors are defined in `app/globals.css` as CSS variables (`--color-gold`, `--color-royal-brown`). This allows for instant theme changes across the entire site by modifying just one file.

### **PWA (Progressive Web App)**
The `app/manifest.ts` file generates a `manifest.webmanifest` automatically. This allows mobile users (Android/iOS) to install the website as an app, giving a full-screen native experience.

## 5. How to Run
- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start Production**: `npm start`
