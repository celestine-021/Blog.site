import { render } from '@testing-library/react';
import App from './App';

test('renders blog components with correct content', () => {
  const { container } = render(<App />);

  // Check if Header renders with blog name
  const header = container.querySelector('header h1');
  expect(header).toBeInTheDocument();
  expect(header.textContent).toBe('Updated Blog Title');

  // Check if About section renders
  const aboutSection = container.querySelector('aside');
  expect(aboutSection).toBeInTheDocument();

  const aboutImage = aboutSection.querySelector('img');
  expect(aboutImage).toBeInTheDocument();
  expect(aboutImage.src).toBe('https://via.placeholder.com/200');

  const aboutText = aboutSection.querySelector('p');
  expect(aboutText.textContent).toBe('This is my updated blog about learning React.');

  // Check if ArticleList renders
  const mainElement = container.querySelector('main');
  expect(mainElement).toBeInTheDocument();

  // Check if articles render
  const articles = container.querySelectorAll('article');
  expect(articles.length).toBe(3);

  // Check first article content
  const firstArticle = articles[0];
  expect(firstArticle.querySelector('h3').textContent).toBe('Updated First Post');
  expect(firstArticle.querySelector('small').textContent).toBe('2026-04-15');
  expect(firstArticle.querySelector('p').textContent).toBe('React components are reusable.');
});