# EL ALAMYA ELECTROMECHANICAL

Professional MEP (Mechanical, Electrical, Plumbing) and Electromechanical Solutions Corporate Website.

## 🌟 Features

- 🌐 **Bilingual Support**: English and Arabic with RTL support
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern Design**: Industrial glassmorphism design with blue-red gradient theme
- ✨ **Smooth Animations**: Scroll reveal animations and smooth section transitions
- 🚀 **Performance Optimized**: Mobile-optimized with reduced padding and improved loading
- 🔤 **Custom Typography**: Omar-Bold-1 Arabic font integration
- 🎯 **SEO Ready**: Meta tags and translation prevention
- 🔥 **No Email Form**: Contact information displayed directly

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling (via CDN)
- **Lucide React** - Icon library

## 📁 Project Structure

```
├── App.tsx           # Main application component with all sections
├── constants.ts      # Content and translations (EN/AR)
├── types.ts          # TypeScript type definitions
├── index.tsx         # Application entry point
├── index.html        # HTML template with custom styles
├── Omar-Bold-1.ttf   # Custom Arabic font
├── vite.config.ts    # Vite configuration
├── vercel.json       # Vercel deployment configuration
└── package.json      # Dependencies and scripts
```

## 🚀 Local Development

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## ☁️ Deploy to Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to [Vercel](https://vercel.com)
2. Click **"Add New Project"**
3. Import GitHub repository: `https://github.com/same7-redaa/ELALAMYA`
4. Vercel will auto-detect Vite framework
5. Click **"Deploy"**
6. Your site will be live at: `https://your-project.vercel.app`

### Option 2: Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/same7-redaa/ELALAMYA)

## 🎨 Customization

### Update Content

Edit `constants.ts` to modify:
- Navigation links
- Hero section text
- About section
- Services descriptions
- Gallery items
- Project categories
- Contact information
- Footer text

### Change Colors

In `index.html` and `App.tsx`, modify:
- Primary: `#1d4ed8` (Blue)
- Secondary: `#b91c1c` (Red)
- Background gradient in `index.html`

### Add/Remove Sections

Edit `App.tsx` to add or remove sections in the main `App` component.

## 📝 Configuration Files

- **vercel.json**: Vercel deployment settings
- **vite.config.ts**: Vite build configuration
- **tsconfig.json**: TypeScript compiler options

## 🌐 Website Sections

1. **Hero** - Introduction with company name and stats
2. **About** - Vision, mission, and values
3. **Services** - Detailed MEP services (HVAC, Electrical, Plumbing, Fire Safety, etc.)
4. **Gallery** - Project showcase with image carousel
5. **Projects** - Featured projects by category
6. **Why Us** - Key differentiators and strengths
7. **Contact** - Direct contact information (no form)

## 🔧 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ iOS Safari
- ✅ Chrome Mobile

## 📱 Mobile Optimizations

- Reduced padding on all sections
- Smaller heading sizes on mobile
- Optimized touch targets
- Smooth scroll behavior
- White subtle borders for content separation
- No background-attachment: fixed (improves mobile performance)

## 🔒 Security Features

- Translation prevention via meta tags
- No third-party tracking
- Secure font loading

## 📄 License

All rights reserved © 2024 EL ALAMYA ELECTROMECHANICAL

---

**Built with ❤️ for EL ALAMYA ELECTROMECHANICAL**

For support or questions, visit the [GitHub repository](https://github.com/same7-redaa/ELALAMYA).
