import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import About from './components/About';
import Article from './components/Article';

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

test('About component uses default image when no image prop is provided', () => {
  const { container } = render(<About about="Test about text" />);

  const image = container.querySelector('img');
  expect(image.src).toBe('https://via.placeholder.com/215');
  expect(image.alt).toBe('blog logo');
});

test('Article component uses default date when no date prop is provided', () => {
  const { container } = render(<Article title="Test Title" preview="Test preview" />);

  const dateElement = container.querySelector('small');
  expect(dateElement.textContent).toBe('January 1, 1970');
});