import React from 'react';

/**
 * About Component
 *
 * Description: Displays information about the blog including an image and description
 * Props:
 *   - about (string): The description text of the blog
 *   - image (string): URL of the blog logo image (defaults to placeholder)
 * Connected to: App.jsx (parent component)
 * Functionality: Renders an <aside> element with an image and paragraph for blog information
 */
function About({ about, image = "https://via.placeholder.com/215" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;