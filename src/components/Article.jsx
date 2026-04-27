import React from 'react';

/**
 * Article Component
 *
 * Description: Individual article/blog post component
 * Props:
 *   - title (string): The title of the article
 *   - date (string): Publication date of the article (defaults to "January 1, 1970")
 *   - preview (string): Preview/summary text of the article
 * Connected to: ArticleList.jsx (parent component)
 * Functionality: Renders a semantic <article> element with title, date, and preview content
 */
function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;