# React Blog Site

A modern blog application built with React, Vite, and modern JavaScript. This project demonstrates component-based architecture with props-driven content rendering.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-101
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

## 📋 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks
- `npm test` - Run Jest tests

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Blog title header
│   ├── About.jsx       # Blog description and logo
│   ├── ArticleList.jsx # Container for all articles
│   └── Article.jsx     # Individual article component
├── data/
│   └── blog.js         # Blog data and posts
├── App.jsx             # Main application component
├── App.css             # Component-specific styles
├── index.css           # Global styles
└── main.jsx            # Application entry point
```

## 🧩 Components Overview

### App Component
- **Location**: `src/App.jsx`
- **Purpose**: Main application container
- **Children**: Header, About, ArticleList
- **Data Source**: `src/data/blog.js`

### Header Component
- **Location**: `src/components/Header.jsx`
- **Purpose**: Displays the blog title
- **Props**: `name` (string)
- **Connected to**: App.jsx

### About Component
- **Location**: `src/components/About.jsx`
- **Purpose**: Shows blog description and logo
- **Props**: `about` (string), `image` (string URL)
- **Connected to**: App.jsx

### ArticleList Component
- **Location**: `src/components/ArticleList.jsx`
- **Purpose**: Renders a collection of articles
- **Props**: `posts` (array of post objects)
- **Children**: Multiple Article components
- **Connected to**: App.jsx, Article.jsx

### Article Component
- **Location**: `src/components/Article.jsx`
- **Purpose**: Displays individual blog post
- **Props**: `title`, `date`, `preview` (all strings)
- **Connected to**: ArticleList.jsx

## 📸 Screenshots

### Homepage
![Blog Homepage](./screenshots/homepage.png)
*The main blog page showing the header, about section, and list of articles.*

### Component Structure
![Component Architecture](./screenshots/components.png)
*Visual representation of the component hierarchy and data flow.*

## 🧪 Testing

The project includes Jest tests for component rendering and prop validation:

```bash
npm test
```

Tests verify that:
- Components render correctly
- Props are passed and displayed properly
- Dynamic content updates work as expected

## 🎨 Styling

- **Global Styles**: `src/index.css` - Base typography, colors, and layout
- **Component Styles**: `src/App.css` - Specific component styling
- **Responsive Design**: Mobile-friendly layout with CSS media queries

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Jest Testing](https://jestjs.io)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is part of a learning exercise and is available under the MIT License.