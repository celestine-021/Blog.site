import Article from "./Article";

/**
 * ArticleList Component
 *
 * Description: Container component that renders a list of Article components
 * Props: posts (array) - Array of post objects with id, title, date, and preview
 * Connected to:
 *   - App.jsx (parent component, receives posts prop)
 *   - Article.jsx (child component, renders each individual article)
 * Functionality: Maps over posts array to create Article components with unique keys
 */
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}  // Unique key required by React for list rendering
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;