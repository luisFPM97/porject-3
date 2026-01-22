# 🌌 Rick and Morty Explorer

A modern, Google Photos-inspired web application for exploring the Rick and Morty multiverse. Built with React and styled with a clean, professional design featuring dark/light mode, user authentication, and responsive layout.

## ✨ Features

### 🎨 **Google Photos-Inspired Design**
- Clean, modern interface with card-based layout
- Smooth animations and transitions
- Professional color schemes for both themes
- Hover effects and interactive elements

### 🌓 **Dark/Light Mode**
- Toggle between light and dark themes
- Automatic theme persistence using localStorage
- Smooth theme transitions
- Google Photos-style color palettes

### 👤 **User Authentication**
- Simple name-based login (no password required)
- Optional custom nickname or auto-generated nickname
- User avatar with initials
- Persistent login state

### 🔍 **Smart Search**
- Google Photos-style search bar in header
- Search locations by ID (1-126)
- Clean search interface with icon
- Real-time search functionality

### 📱 **Fully Responsive**
- Optimized for desktop, tablet, and mobile
- Adaptive grid layouts
- Mobile-friendly navigation
- Touch-optimized interactions

### 🎯 **Key Components**

#### Header
- Logo and app title
- Centered search bar
- Theme toggle button
- User menu with avatar and dropdown

#### Location Info
- Location details card
- Population, type, and dimension info
- Hover effects and transitions

#### Resident Cards
- Character images with status badges
- Species, origin, and episode count
- Grid layout with responsive columns
- Smooth hover animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd porject-3
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎮 How to Use

1. **Sign In**: Enter your name (and optionally a nickname) to access the app
2. **Search**: Use the search bar in the header to find locations by ID (1-126)
3. **Toggle Theme**: Click the sun/moon icon to switch between light and dark modes
4. **View Details**: Browse location information and resident characters
5. **Sign Out**: Click your avatar and select "Sign out" from the dropdown menu

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS Variables** - Dynamic theming
- **Context API** - State management for auth and theme
- **Rick and Morty API** - Data source
- **localStorage** - Data persistence

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Main navigation header
│   ├── LoginPage.jsx           # Authentication page
│   ├── MainContent.jsx         # Main content wrapper
│   ├── LocationInfo.jsx        # Location details card
│   ├── ResidentCard.jsx        # Character card component
│   └── styles/                 # Component-specific styles
├── contexts/
│   ├── AuthContext.jsx         # Authentication state
│   └── ThemeContext.jsx        # Theme management
├── hooks/
│   └── useFetch.js             # Custom fetch hook
├── utils/
│   └── getRandomLocation.js    # Random location generator
├── App.jsx                      # Main app component
├── App.css                      # Global app styles
├── index.css                    # Reset and base styles
└── main.jsx                     # App entry point
```

## 🎨 Theming

The app uses CSS variables for dynamic theming. Themes are defined in `App.css`:

### Light Theme
- Clean white backgrounds
- Dark text for readability
- Blue accent color (#1a73e8)
- Subtle shadows

### Dark Theme
- Dark gray backgrounds
- Light text
- Light blue accent (#8ab4f8)
- Enhanced shadows

## 🔒 Authentication

- **No password required** - Simple name-based authentication
- **Auto-generated nicknames** - If no nickname is provided, one is generated automatically
- **Persistent sessions** - User data is stored in localStorage
- **User avatars** - Initials are extracted from the user's name

## 📱 Responsive Breakpoints

- **Desktop**: > 768px - Full grid layout with multiple columns
- **Tablet**: 480px - 768px - Adjusted grid with fewer columns
- **Mobile**: < 480px - Single column layout

## 🚧 Future Enhancements

- [ ] Advanced search filters (by character name, species, etc.)
- [ ] Favorites/bookmarks system
- [ ] Character detail modal
- [ ] Infinite scroll for large datasets
- [ ] Share functionality
- [ ] Export data options

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [Rick and Morty API](https://rickandmortyapi.com/) for providing the data
- Google Photos for design inspiration
- Rick and Morty creators for the amazing universe

## 👨‍💻 Development

Built with ❤️ using modern web technologies and best practices.

---

**Note**: This is a fan project and is not affiliated with or endorsed by Rick and Morty or Adult Swim.
