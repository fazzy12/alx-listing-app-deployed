# ALX Listing App

A modern, responsive property listing application built with Next.js, TypeScript, and TailwindCSS. This project serves as a foundation for building an Airbnb clone with features for property listings, detailed property views, and booking functionality.

## 🎯 Project Goals

The ALX Listing App aims to provide:

- **Modern Property Listings**: Display properties with rich media, pricing, and ratings
- **Detailed Property Views**: Comprehensive property information with amenities, reviews, and booking options
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Type Safety**: Full TypeScript integration for robust development
- **Reusable Components**: Modular component architecture for scalability
- **Clean Architecture**: Well-organized codebase following industry best practices

## 🏗️ Project Structure

```
alx-listing-app/
├── components/           # Reusable UI components
│   └── common/          # Common components used across the app
│       ├── Card.tsx     # Property card component for listings
│       └── Button.tsx   # Reusable button component
├── interfaces/          # TypeScript type definitions
│   └── index.ts         # All interfaces and types
├── constants/           # Application constants and configuration
│   └── index.ts         # API endpoints, UI constants, and app config
├── pages/               # Next.js pages (using Pages Router)
│   └── index.tsx        # Home page
├── public/              # Static assets
│   └── assets/          # Images, icons, and other media files
├── styles/              # Global styles
│   └── globals.css      # Global CSS with Tailwind imports
└── README.md           # Project documentation
```

### 📁 Directory Purposes

- **`components/`**: Contains all reusable UI components. The `common/` subdirectory houses components used throughout the application like buttons, cards, and form elements.

- **`interfaces/`**: Centralizes all TypeScript interfaces and type definitions. This ensures type safety and provides a single source of truth for data structures.

- **`constants/`**: Stores application-wide constants including API endpoints, configuration settings, UI text, and other static data that needs to be reused.

- **`public/assets/`**: Houses all static assets such as images, icons, SVGs, and other media files that need to be publicly accessible.

## 🚀 Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/alx-listing-app.git
   cd alx-listing-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality
- `npm run lint:fix` - Fixes linting issues automatically

## 🛠️ Technologies Used

- **Next.js 13+**: React framework with Pages Router for building the application
- **TypeScript**: For type safety and better developer experience
- **TailwindCSS**: Utility-first CSS framework for styling
- **ESLint**: Code linting and formatting
- **React**: UI library for building user interfaces

## 🎨 Design System

The project uses a consistent design system built with TailwindCSS:

- **Colors**: Primary blue palette with semantic color variants
- **Typography**: Clean, readable fonts with consistent sizing
- **Spacing**: Uniform spacing scale for layouts and components
- **Components**: Reusable, accessible components with consistent styling

## 🔧 Configuration

### TailwindCSS Configuration

The project uses a minimal TailwindCSS configuration located in `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Global Styles

Global styles are defined in `styles/globals.css` with Tailwind imports:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🌟 Features

### Current Features

- ✅ Project scaffolding with Next.js and TypeScript
- ✅ TailwindCSS integration for styling
- ✅ Reusable Card component for property listings
- ✅ Flexible Button component with multiple variants
- ✅ TypeScript interfaces for type safety
- ✅ Organized folder structure for scalability
- ✅ ESLint configuration for code quality

### Upcoming Features

- 🔄 Property listing page with search and filters
- 🔄 Detailed property view with image gallery
- 🔄 Booking functionality with date selection
- 🔄 User authentication and profile management
- 🔄 Review and rating system
- 🔄 Responsive mobile design
- 🔄 API integration for dynamic data

## 🤝 Contributing

We welcome contributions to improve the ALX Listing App! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
