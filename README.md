# Mahalaxmi Developers - Property Showcase

A modern, responsive website showcasing premium residential properties by Mahalaxmi Developers in Nagpur, Maharashtra.

## 🏗️ Features

- **Professional Landing Page**: Modern design with hero section, project gallery, and contact information
- **Property Showcase**: Detailed information about 6 premium residential projects
- **Individual Property Pages**: Comprehensive details for each project including:
  - High-quality images
  - Detailed descriptions and specifications
  - Location information and directions
  - Amenities and features
  - RERA information and pricing
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Contact Integration**: Direct phone calls and WhatsApp messaging
- **Modern UI/UX**: Built with Tailwind CSS and shadcn/ui components

## 🏢 Featured Projects

1. **Mahalaxmi Nagar 25** - Premium 2 BHK apartments in Dharampeth
2. **Mahalaxmi Nagar 31** - Luxury 3 BHK apartments in Civil Lines
3. **Mahalaxmi Nagar 40** - Affordable luxury 2 BHK near Wardha Road
4. **Mahalaxmi Nagar 41** - Family-friendly 2 BHK near Koradi Road
5. **Mahalaxmi Nagar 42** - Premium 3 BHK in Sadar area
6. **Mahalaxmi Nagar 43** - Ultra-premium 3 BHK in Dharampeth Extension

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mahalaxmi-property-showcase
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

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation bar
│   ├── PropertiesSection.tsx  # Property gallery
│   ├── PropertyCard.tsx       # Individual property cards
│   ├── ContactSection.tsx     # Contact information
│   └── Footer.tsx      # Footer
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── PropertyDetail.tsx     # Individual property page
│   └── NotFound.tsx    # 404 page
├── data/               # Data files
│   └── properties.ts   # Property information
├── assets/             # Images and static assets
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main app component
```

## 🎨 Customization

### Adding New Properties

1. Add property images to `src/assets/`
2. Update the properties array in `src/data/properties.ts`
3. Include all required fields: title, location, price, description, etc.

### Styling

The project uses Tailwind CSS with custom color schemes:
- `luxury`: Primary brand colors
- `premium`: Accent colors
- `primary`: Interactive elements

### Contact Information

Update contact details in:
- `src/components/Navbar.tsx`
- `src/components/ContactSection.tsx`
- `src/components/Footer.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### Environment Variables

Create a `.env` file for any environment-specific configurations:

```env
VITE_APP_TITLE=Mahalaxmi Developers
VITE_CONTACT_PHONE=+919876543210
VITE_CONTACT_EMAIL=info@mahalaxmidevelopers.com
```

### Build Configuration

The project uses Vite for building. Configuration can be found in:
- `vite.config.ts` - Build configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 📄 License

This project is proprietary to Mahalaxmi Developers.

## 🤝 Support

For support and inquiries:
- Phone: +91 98765 43210
- Email: info@mahalaxmidevelopers.com
- Office: 123 Business Centre, Civil Lines, Nagpur - 440001

---

**Mahalaxmi Developers** - Your Trusted Property Partner in Nagpur
