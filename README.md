# Weston Renn — Author Website

A cinematic author website and digital product experience designed around storytelling, personal branding, and e-book sales.

The project was built as a complete production-ready web experience rather than a static landing page. It combines an editorial visual direction with responsive layouts, subtle motion, content-driven sections, and a focused digital product journey.

## ✨ Overview

Weston Renn is a personal author website created to establish a strong author identity, introduce the story behind the book, and guide visitors toward the digital product.

The experience focuses on:

* Storytelling and editorial presentation
* Personal branding
* Book discovery
* Digital product presentation
* Conversion-focused user experience
* Responsive and accessible design
* Performance and SEO

## 🚀 Features

* Cinematic author-focused homepage
* Responsive desktop, tablet, and mobile layouts
* Editorial typography and visual hierarchy
* Smooth page and element animations
* Dedicated story/about sections
* Book presentation and product pages
* Digital e-book purchase journey
* Reusable React components
* Responsive navigation
* SEO metadata and structured page content
* Optimized images and responsive media
* Mobile-first UI implementation

## 🛠️ Tech Stack

### Frontend

* **Next.js** — React framework and application architecture
* **React** — Component-based UI
* **TypeScript** — Type-safe development
* **Tailwind CSS** — Styling and responsive layouts
* **Framer Motion** — Animations and transitions

### Backend & Data

* **MongoDB** — Database
* **Next.js server-side functionality** — Application logic and data handling

### Design

* **Figma** — UI/UX design and visual direction

### Development

* **Git & GitHub** — Version control
* **Vercel** — Deployment

## 📁 Project Structure

```text
weston-renn/
├── app/
│   ├── components/
│   ├── work/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── public/
│   ├── images/
│   └── ...
│
├── data/
│   └── ...
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js 18+
* npm

You can verify your Node.js installation with:

```bash
node -v
```

and npm with:

```bash
npm -v
```

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

### 2. Navigate into the project

```bash
cd YOUR_REPOSITORY
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
```

Add any additional environment variables required by your local configuration.

Never commit `.env.local` or expose private credentials in the repository.

### 5. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## 📦 Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the application in production mode.

```bash
npm run lint
```

Runs the project's linting checks.

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

## 🌐 Deployment

The project is configured for deployment with **Vercel**.

A typical deployment workflow is:

```text
GitHub
   ↓
Vercel
   ↓
Production Deployment
```

After connecting the repository to Vercel, add the required environment variables in the Vercel project settings before deploying.

## 🎨 Design Direction

The visual direction was intentionally designed to feel cinematic and editorial rather than like a conventional author portfolio.

The interface uses:

* Large-scale typography
* High contrast
* Generous whitespace
* Restrained color usage
* Cinematic imagery
* Subtle motion
* Strong visual hierarchy
* Focused calls to action

The design system was first explored in Figma and then translated into reusable responsive components.

## 📱 Responsive Experience

The website was designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

Layouts, typography, spacing, navigation, imagery, and interactions adapt to different screen sizes.

## 🔍 Performance & SEO

The project was structured with performance and search visibility in mind.

This includes:

* Next.js image optimization
* Semantic HTML structure
* Page metadata
* Responsive images
* Optimized assets
* Server-side capabilities provided by Next.js
* Clean URL structure

## 📸 Screenshots

Add screenshots of the project here.

Example:

```md
![Weston Renn Homepage](./public/screenshots/homepage.webp)
```

## 🌍 Live Website

**https://westonrenn.com**

## 📄 License

This project is a personal portfolio/client project.

The source code is provided for demonstration and educational purposes. Assets, branding, imagery, and written content may belong to their respective owners and are not licensed for reuse.

---

Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
