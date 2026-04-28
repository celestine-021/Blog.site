import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ArticleList from './components/ArticleList';
import blog from './data/blog';
import './App.css';

/**
 * App Component
 *
 * Description: Root component for the personal blog site
 * Props: None (uses data from blog.js)
 * Connected to:
 *   - Header.jsx (child component, passes blog name)
 *   - About.jsx (child component, passes blog about and image)
 *   - ArticleList.jsx (child component, passes blog posts)
 * Functionality: Renders the main blog layout with header, about section, and article list
 */
function App() {
  return (
    <>
      <Header name={blog.name} />
      <About about={blog.about} image={blog.image} />
      <ArticleList posts={blog.posts} />
    </>
  );
}

export default App;