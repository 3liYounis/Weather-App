# Weather & Authentication App

## Project Overview

A React Native mobile application built with Expo that combines user authentication with real-time weather functionality. The app provides a seamless user experience with a modern dark theme interface, featuring secure user registration/login and live weather data retrieval for any city worldwide.

## Features

### Authentication System
- **User Registration**: Create new accounts with username, email, and password
- **User Login**: Secure sign-in with email and password authentication
- **Session Management**: Persistent login sessions with automatic authentication state management
- **Logout Functionality**: Secure session termination and navigation back to landing page

### Weather Functionality
- **Real-time Weather Data**: Fetch current weather conditions for any city
- **Weather Display**: Shows temperature, weather conditions, and weather icons
- **City Search**: Input field to search for weather in specific cities
- **Loading States**: User-friendly loading indicators during API calls
- **Error Handling**: Proper error messages for invalid city names or network issues

### User Interface
- **Dark Theme Design**: Modern black and orange color scheme
- **Custom Components**: Reusable form fields and buttons with consistent styling
- **Tab Navigation**: Easy switching between Home and Weather screens
- **Responsive Design**: Optimized for mobile devices with proper safe area handling
- **Custom Typography**: Poppins font family with multiple weights for visual hierarchy

## Tech Stack

### Core Technologies
- **React Native**: Cross-platform mobile development framework
- **Expo**: Development platform and toolchain for React Native
- **Expo Router**: File-based routing system for navigation
- **JavaScript**: Primary programming language

### Backend & Database
- **Appwrite**: Backend-as-a-Service for authentication and database management
- **Cloud Appwrite**: Hosted backend services for user management and data storage

### Styling & UI
- **NativeWind**: Tailwind CSS for React Native styling
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Reusable UI components with consistent design

### External APIs
- **WeatherAPI**: Real-time weather data service (weatherapi.com)

### Development Tools
- **Babel**: JavaScript compiler and transpiler
- **Jest**: Testing framework
- **TypeScript**: Type checking and enhanced development experience
- **Metro**: React Native bundler

## Project Structure

```
WeatherApp/
├── app/                    # Main application screens
│   ├── (auth)/            # Authentication screens
│   │   ├── signIn.jsx     # Login screen
│   │   └── signUp.jsx     # Registration screen
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── home.jsx       # Home dashboard
│   │   └── weather.jsx    # Weather search and display
│   ├── _layout.jsx        # Root layout with font loading
│   └── index.jsx          # Landing/welcome screen
├── components/            # Reusable UI components
│   ├── CustomButton.jsx   # Custom styled buttons
│   └── FormField.jsx      # Form input fields with validation
├── context/               # React Context for state management
│   └── GlobalProvider.js  # Global authentication state
├── lib/                   # External service configurations
│   └── appwrite.js        # Appwrite backend configuration
├── constants/             # App constants and assets
│   ├── icons.js           # Icon asset definitions
│   └── images.js          # Image asset definitions
├── assets/                # Static assets
│   ├── fonts/             # Poppins font family
│   ├── icons/             # Custom app icons
│   └── images/            # App images and logos
└── configuration files    # Various config files (package.json, etc.)
```

## Key Libraries & Dependencies

### Core Dependencies
- `expo`: ~52.0.20 - Expo SDK
- `react`: 18.3.1 - React library
- `react-native`: 0.76.5 - React Native framework
- `expo-router`: ^4.0.15 - File-based routing
- `react-native-appwrite`: ^0.5.0 - Appwrite SDK for React Native

### UI & Styling
- `nativewind`: ^4.1.23 - Tailwind CSS for React Native
- `tailwindcss`: ^3.4.17 - CSS framework
- `react-native-safe-area-context`: 4.12 - Safe area handling
- `expo-font`: ~13.0.2 - Custom font loading

### Navigation & Gestures
- `@react-navigation/native`: ^7.0.0 - Navigation library
- `@react-navigation/bottom-tabs`: ^7.0.0 - Tab navigation
- `react-native-gesture-handler`: ~2.20.2 - Gesture handling
- `react-native-reanimated`: ~3.16.1 - Animations

### Development Tools
- `typescript`: ^5.3.3 - TypeScript support
- `jest`: ^29.2.1 - Testing framework
- `babel`: ^6.23.0 - JavaScript compiler

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (for testing)

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Run on specific platform:
   - iOS: `npm run ios`
   - Android: `npm run android`
   - Web: `npm run web`

### Environment Setup
- Configure Appwrite backend settings in `lib/appwrite.js`
- Set up WeatherAPI key in `app/(tabs)/weather.jsx`

## App Flow

1. **Landing Page**: Welcome screen with app branding
2. **Authentication**: Sign up or sign in to access the app
3. **Home Dashboard**: Personalized welcome screen with user information
4. **Weather Screen**: Search and view real-time weather data for any city
5. **Navigation**: Easy tab-based navigation between Home and Weather

## Design Philosophy

The app follows a clean, modern design approach with:
- **Consistent Color Scheme**: Black primary background with orange accents
- **Typography Hierarchy**: Multiple Poppins font weights for visual structure
- **User-Centric Design**: Intuitive navigation and clear information display
- **Responsive Layout**: Optimized for various mobile screen sizes
- **Accessibility**: Proper contrast ratios and touch targets
