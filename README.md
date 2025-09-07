# DJReklesz IPTV Website

A modern, responsive IPTV service website built with Next.js and Tailwind CSS.

## Project Structure

### Pages
- **Home** (`/`) - Hero section, stats, features, and services preview
- **About** (`/about`) - Why choose us section
- **Services** (`/services`) - What we offer
- **Features** (`/features`) - All-in-one IPTV subscription details
- **Pricing** (`/pricing`) - Subscription plans and pricing
- **Contact** (`/contact`) - Contact information and support
- **All** (`/all`) - Complete page with all sections (for users who want everything on one page)
- **Apps** (`/apps`) - Application downloads and setup

### Components
- `Header.js` - Navigation header with responsive menu
- `Hero.js` - Main hero section with call-to-action buttons
- `Stats.js` - Statistics and numbers showcase
- `Features.js` - Feature highlights grid
- `Services.js` - Service offerings
- `About.js` - Why choose us section
- `Pricing.js` - Pricing plans and subscription options
- `Contact.js` - Contact form and information
- `Footer.js` - Site footer with company information
- `FloatingAction.js` - Floating action button
- `WhatsAppContact.js` - WhatsApp contact integration
- `ThemeContext.js` - Theme management context

## Features

- **Responsive Design** - Works on all devices
- **Modern UI/UX** - Clean, professional design with gold accent colors
- **Component-Based Architecture** - Modular, reusable components
- **Page-Based Navigation** - Separate pages for better SEO and user experience
- **Interactive Elements** - Hover effects, animations, and smooth transitions
- **WhatsApp Integration** - Direct contact through WhatsApp
- **Theme Support** - Dark/light mode toggle

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Hooks** - State management and effects

## Navigation Structure

The website now uses proper page-based navigation instead of single-page scrolling:

- **Home** - Landing page with key sections
- **About** - Company information and benefits
- **Services** - Service offerings
- **Features** - Feature highlights
- **Pricing** - Subscription plans
- **Contact** - Contact information
- **All** - Complete single-page experience
- **Apps** - Application downloads

## Styling

The website uses a consistent color scheme:
- Primary: Gold gradient (`#D4A017` to `#B8860B`)
- Background: Black and dark grays
- Text: White and light grays
- Accents: Gold highlights and gradients

## Responsive Breakpoints

- Mobile: Default (320px+)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large Desktop: `xl:` (1280px+)
