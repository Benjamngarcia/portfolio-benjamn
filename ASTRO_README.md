# Benjamín García - Portfolio

Modern, bilingual portfolio built with Astro, React, and Tailwind CSS.

## Features

- 🚀 Built with Astro for optimal performance
- 🎨 Styled with Tailwind CSS
- 🌓 Dark mode support
- 🌍 Bilingual (Spanish/English)
- ⚡ Fast loading and optimized
- 📱 Fully responsive
- ✨ Smooth animations
- 📧 Contact form with EmailJS

## Tech Stack

- **Framework:** Astro 4
- **UI Components:** React 18
- **Styling:** Tailwind CSS
- **Icons:** Tabler Icons
- **Email:** EmailJS
- **Language:** TypeScript

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/
│   └── img/           # Project images
├── src/
│   ├── components/    # React & Astro components
│   ├── layouts/       # Page layouts
│   ├── pages/         # Routes (file-based routing)
│   ├── styles/        # Global styles
│   ├── utils/         # Utilities & i18n
│   └── data/          # Content data
├── astro.config.mjs   # Astro configuration
└── tailwind.config.mjs # Tailwind configuration
```

## Configuration

### EmailJS Setup

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Set up an email service and template
3. Update credentials in `src/components/ContactForm.tsx`:

```typescript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

### Content Updates

Edit `src/data/portfolio.ts` to update:
- Projects
- Technologies
- Social links
- Personal information

### Translations

Add or modify translations in `src/utils/i18n.ts`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## Deployment

The site can be deployed to any static hosting platform:

- **Vercel** (Recommended)
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages**

Build output is in the `dist/` directory.

## License

MIT © Benjamín García

## Contact

- Website: [your-domain.com]
- Email: benjamn.webdev3@gmail.com
- GitHub: [@Benjamngarcia](https://github.com/Benjamngarcia)
- LinkedIn: [benjamngarcia](https://www.linkedin.com/in/benjamngarcia)
