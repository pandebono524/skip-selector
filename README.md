# WasteSkip Pro - React Selection Interface  

A sleek, modern interface for selecting waste skips, built with React and TypeScript. 
This project enhances the user experience for choosing skips with intuitive controls and responsive design.  

## 🔧 Tech Stack  

- **Core:** React 18 + TypeScript  
- **UI Components:** Material-UI (v5)  
- **Styling:** Emotion CSS-in-JS  
- **Animations:** Framer Motion  
- **API Client:** Axios  
- **State Management:** React Context + Hooks  

## 🎨 Design System  

### Colors  

**Light Mode:**  
- Primary: `#1E88E5`  
- Secondary: `#FF4081`  
- Background: `#FAFAFA`  
- Cards: `#FFFFFF`  

**Dark Mode:**  
- Primary: `#64B5F6`  
- Secondary: `#FF80AB`  
- Background: `#121212`  
- Cards: `#1E1E1E`  

### Typography  
- Main font: 'Roboto' (Google Fonts)  
- Headings: 600 weight  
- Body text: 400 weight  

### Layout  
- 8px baseline grid  
- Responsive breakpoints:  
  - Mobile: < 768px  
  - Tablet: 768px - 1024px  
  - Desktop: ≥ 1024px  

## 🚀 Quick Start  

1. Install dependencies:  
```bash
yarn install
# or
npm install
```

2. Run dev server:  
```bash
yarn start
# or
npm start
```

3. Open in browser:  
`http://localhost:3000`  

## ✨ Key Features  

- **Adaptive Layout** - Works on all devices  
- **Theme Switching** - Light/dark mode support  
- **Interactive Cards** - Animated skip selection  
- **Step Navigation** - Guided selection process  

## 📂 Project Structure  

```
src/
├── components/
│   ├── SkipCard/       # Main selection component
│   └── SkipSelector/      # Individual skip card
├── theme/          # Theme/provider contexts
├── types/             # Custom hooks
```

## 🌐 Data Source  

Skip data is fetched from:  
`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`  

## 🛠 Development Notes  

### Best Practices  
- Type-safe components  
- Mobile-first CSS  
- Memoized components  
- Accessibility compliant  

### Scripts  
- `build`: Create production bundle  
- `lint`: Run ESLint checks  
- `format`: Prettier code formatting  

## 📜 License  

MIT Licensed - Free for modification and redistribution  