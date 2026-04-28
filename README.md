# React Blog Site

A modern blog application built with React, Vite, and modern JavaScript. This project demonstrates component-based architecture with props-driven content rendering.

## 🎯 Project Overview

This is a personal blog website built with React, showcasing how to work with components, JSX, and props. The blog displays a header, about section, and a list of blog articles, all dynamically rendered from data.

### Component Tree
```
└── App
    ├── Header
    ├── About
    └── ArticleList
        └── Article
```

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

### Available Scripts

- `npm run dev` - Start development server with hot module reloading
- `npm run build` - Build for production
- `npm test` - Run tests with Jest
- `npm run preview` - Preview the production build

## 📸 Screenshots

### Blog Homepage
The blog displays all articles with their titles, dates, and previews.

## 🏗️ Component Documentation

### Header Component
**Description:** Displays the main title/header of the blog  
**Props:** 
- `name` (string) - The title text to display
**Connected to:** App.jsx (parent component)

### About Component
**Description:** Displays information about the blog including an image and description  
**Props:**
- `about` (string) - The description text of the blog
- `image` (string) - URL of the blog logo image (defaults to placeholder)
**Connected to:** App.jsx (parent component)

### ArticleList Component
**Description:** Container component that renders a list of Article components  
**Props:** 
- `posts` (array) - Array of post objects with id, title, date, and preview
**Connected to:**
- App.jsx (parent component)
- Article.jsx (child component)

### Article Component
**Description:** Individual article/blog post component  
**Props:**
- `title` (string) - The title of the article
- `date` (string) - Publication date of the article
- `preview` (string) - Preview/summary text of the article
**Connected to:** ArticleList.jsx (parent component)

## 🧪 Testing

The project includes Jest tests that verify:
- All blog components render correctly
- Props are passed down dynamically
- Default prop values work correctly

Run tests with:
```bash
npm test
```

## 📁 Project Structure

```
react-101/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── ArticleList.jsx
│   │   └── Article.jsx
│   ├── data/
│   │   └── blog.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── App.test.jsx
├── public/
├── package.json
├── vite.config.js
└── jest.config.js
```

## 🔄 Data Flow

Blog data is stored in `src/data/blog.js` and imported into `App.jsx`. Props are then passed down through the component tree:
1. **App** receives blog data
2. **Header** receives blog name
3. **About** receives blog about text and image
4. **ArticleList** receives array of posts
5. **Article** receives individual post data (title, date, preview)

## 🚀 Building for Production

To create an optimized production build:
```bash
npm run build
```

The build will be output to the `dist/` directory.

## 📝 License

This project is provided as-is for educational purposes.

## � Screenshots

### Homepage
![Blog Homepage](screenshots/homepage.png)
The main blog page showing the header with blog title, about section with logo and description, and a list of articles with titles, dates, and previews.

### Component Architecture
![Component Tree](screenshots/components.png)
Visual representation of the React component hierarchy:
- App (root component)
  - Header (blog title)
  - About (blog description and logo)
  - ArticleList (container for articles)
    - Article (individual post)

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