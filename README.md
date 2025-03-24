# Skip Selector - React Coding Challenge

A modern, responsive skip selection interface built with React, TypeScript, and Material-UI. This project is a redesign of the skip selection page from WeWantWaste.co.uk, focusing on improved user experience and clean, maintainable code.

## 🎯 Project Overview

This project is a front-end coding challenge that involves redesigning the skip selection interface while maintaining its core functionality. The goal is to create a modern, responsive, and user-friendly interface that works seamlessly across all devices.

### Key Features

- 🎨 Modern, clean UI design
- 📱 Fully responsive layout
- 🌓 Dark/Light theme support
- ⚡ Smooth animations and transitions
- 🎯 Step-by-step selection process
- 📊 Real-time skip data integration
- ♿ Accessibility focused

## 🛠️ Technical Stack

- **Framework:** React with TypeScript
- **UI Library:** Material-UI (MUI)
- **Styling:** MUI's styled-components
- **Animations:** Framer Motion
- **HTTP Client:** Axios
- **State Management:** React Hooks
- **Type Checking:** TypeScript

## 🎨 Theme Implementation

### Color Palette

#### Light Theme
- Primary: `#1976d2` (Blue)
- Secondary: `#dc004e` (Pink)
- Background: `#ffffff`
- Surface: `#f5f5f5`
- Text: 
  - Primary: `rgba(0, 0, 0, 0.87)`
  - Secondary: `rgba(0, 0, 0, 0.6)`
- Error: `#d32f2f`
- Success: `#2e7d32`

#### Dark Theme
- Primary: `#90caf9` (Light Blue)
- Secondary: `#f48fb1` (Light Pink)
- Background: `#121212`
- Surface: `#1e1e1e`
- Text:
  - Primary: `rgba(255, 255, 255, 0.87)`
  - Secondary: `rgba(255, 255, 255, 0.6)`
- Error: `#f44336`
- Success: `#4caf50`

### Typography
- Font Family: Roboto
- Scale:
  - h1: 2.5rem (40px)
  - h2: 2rem (32px)
  - h3: 1.75rem (28px)
  - h4: 1.5rem (24px)
  - body1: 1rem (16px)
  - body2: 0.875rem (14px)
  - caption: 0.75rem (12px)

### Spacing
- Base unit: 8px
- Common spacings:
  - xs: 4px
  - sm: 8px
  - md: 16px
  - lg: 24px
  - xl: 32px

### Component Styling
- Border Radius: 8px
- Elevation: 0-24px (based on importance)
- Transitions: 300ms ease-in-out
- Shadows: Custom blur effects for glass morphism

### Theme Features
- Smooth theme switching with transitions
- Persistent theme preference
- System theme detection
- Custom component theming
- Responsive typography
- Consistent spacing system

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd skip-selector
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## 📱 Features Implementation

### Responsive Design
- Mobile-first approach
- Breakpoints for different screen sizes:
  - xs: < 600px (mobile)
  - sm: 600px - 960px (tablet)
  - md: 960px - 1280px (small desktop)
  - lg: > 1280px (large desktop)

### Theme Support
- Light/Dark mode toggle
- Consistent color scheme
- Smooth theme transitions

### Skip Selection
- Grid layout for skip options
- Animated card transitions
- Clear selection indicators
- Detailed skip information display

### Navigation
- Step-by-step process indicator
- Back/Continue navigation
- Progress tracking

## 🏗️ Project Structure

```
skip-selector/
├── src/
│   ├── components/
│   │   ├── SkipSelector.tsx    # Main component
│   │   └── SkipCard.tsx        # Individual skip card
│   ├── types/
│   │   └── skip.ts             # TypeScript interfaces
│   ├── theme/
│   │   └── theme.ts            # Dark/Light theme
│   ├── App.tsx
│   └── index.tsx
├── public/
├── package.json
└── tsconfig.json
```

## 🔄 API Integration

The application fetches skip data from:
```
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
```

## 🎨 Design Decisions

1. **Modern UI Elements**
   - Clean, minimalist design
   - Consistent spacing and typography
   - Smooth animations for better UX

2. **Responsive Layout**
   - Adaptive grid system
   - Mobile-optimized navigation
   - Flexible card layouts

3. **User Experience**
   - Clear visual hierarchy
   - Intuitive selection process
   - Immediate feedback on actions

4. **Performance**
   - Optimized animations
   - Efficient state management
   - Lazy loading of components

## 🔍 Testing

The application has been tested across:
- Chrome, Firefox, Safari, Edge
- iOS and Android devices
- Different screen sizes and orientations

## 📦 Future Improvements

1. Add unit tests
2. Implement error boundaries
3. Add loading skeletons
4. Improve accessibility features
5. Add more interactive elements
6. Implement form validation
7. Add analytics tracking

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Author

[Your Name]
- GitHub: [your-github-profile]
- Email: [your-email]

## 🙏 Acknowledgments

- WeWantWaste.co.uk for providing the API and inspiration
- Material-UI team for the excellent component library
- Framer Motion team for the animation library
