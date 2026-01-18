# Restaurant Web Application

A modern, responsive restaurant website built with Next.js, featuring user authentication, menu browsing, and booking functionality. The application showcases a complete restaurant experience with beautiful UI components and smooth user interactions.

## Project Description

This is a full-featured restaurant web application that provides customers with an intuitive platform to explore menu items, learn about the restaurant, make reservations, and manage their accounts. Built with modern web technologies, it offers a seamless experience across all devices.

## Setup & Installation Instructions

### Prerequisites
- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd first-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production
```bash
npm run build
npm start
```

## Route Summary

### Public Routes
- `/` - Landing page
- `/home` - Main homepage with featured content
- `/aboutus` - About the restaurant page
- `/products` - Menu and product catalog
- `/contact` - Contact information and form

### Authentication Routes
- `/login` - User login page
- `/register` - User registration page

### Protected Routes
All routes under the `(HomeLayout)` group are accessible after authentication.

## List of Implemented Features

### 🔐 Authentication System
- User registration with form validation
- User login functionality
- Protected route navigation
- Session management

### 🍽️ Restaurant Features
- **Menu Display** - Interactive menu with food items and pricing
- **Burger Showcase** - Special burger section with different varieties
- **Chef Information** - Meet the chef section
- **Restaurant Information** - About us and restaurant details

### 🎨 UI/UX Components
- **Responsive Navigation** - Mobile-friendly navbar with dropdown menu
- **Banner Section** - Eye-catching hero section
- **Booking System** - Table reservation functionality
- **Footer** - Newsletter subscription and links

### 📱 Modern Web Features
- **Responsive Design** - Optimized for all screen sizes
- **Interactive Elements** - Smooth animations and transitions
- **Toast Notifications** - User feedback system
- **Swiper Integration** - Image carousels and sliders

## Brief Explanation of Features

### Authentication System
The app includes a complete user authentication flow with dedicated login and register pages. Forms are built with validation and provide user feedback through toast notifications.

### Menu & Product Catalog
A comprehensive product showcase featuring different food categories, with special emphasis on burger varieties. Each item includes images, descriptions, and pricing information.

### Booking & Reservations
Customers can make table reservations through an integrated booking system, making it easy to secure dining times.

### Responsive Design
Built with Tailwind CSS and DaisyUI, the application provides a consistent experience across desktop, tablet, and mobile devices. The navigation automatically adapts to smaller screens with a collapsible menu.

### Interactive Components
Features smooth animations, image sliders using Swiper.js, and interactive elements that enhance user engagement throughout the browsing experience.

## Technology Stack

- **Framework**: Next.js 16.1.2 with App Router
- **Frontend**: React 19.2.3
- **Styling**: Tailwind CSS 4 + DaisyUI 5.5.14
- **Icons**: React Icons 5.5.0
- **Notifications**: React Toastify 11.0.5
- **Sliders**: Swiper 12.0.3
- **Linting**: ESLint with Next.js configuration

## Project Structure

```
src/
├── app/
│   ├── (auth)/          # Authentication routes
│   ├── (HomeLayout)/    # Main application routes
│   └── globals.css      # Global styles
├── components/          # Reusable UI components
│   ├── Banner/         # Hero section
│   ├── Berger/         # Burger showcase
│   ├── BookNow/        # Reservation system
│   ├── Chief/          # Chef information
│   ├── Menu/           # Menu display
│   └── forms/          # Form components
└── assets/             # Images and static files
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.
