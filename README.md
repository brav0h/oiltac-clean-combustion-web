
# OILTAC - Clean Combustion Across Industries

A professional website for OILTAC, a plant-based fuel additive that improves combustion, reduces engine sludge, and lowers emissions across various industries including maritime, rail, manufacturing, and diesel fleet operations.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Industry-Focused**: Targeted content for maritime operators, rail managers, industrial engineers, and fleet owners
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **SEO Ready**: Comprehensive meta tags and structured data

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Analytics**: Google Tag Manager integration
- **Cookie Consent**: CookieYes integration

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd oiltac-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── Industries.tsx  # Industries section
│   ├── Benefits.tsx    # Benefits section
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── MSDS.tsx        # MSDS page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── integrations/       # Third-party integrations
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

The application is built as a static website and can be deployed to any static hosting service:

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Import your repository to Vercel
2. The build settings are automatically detected

### Other Static Hosts
1. Run `npm run build`
2. Upload the `dist` folder to your hosting service

## Environment Variables

No environment variables are required for basic functionality. For analytics and tracking:

- Google Analytics is configured via GTM (GTM-MKH32BVW)
- CookieYes consent management is integrated

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is proprietary and confidential. All rights reserved.

## Contact

For questions about this website or OILTAC products, please visit our contact page or reach out through the website's contact form.
