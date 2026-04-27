/**
 * Header Component
 *
 * Description: Displays the main title/header of the blog
 * Props: name (string) - The title text to display
 * Connected to: App.jsx (parent component)
 * Functionality: Renders a semantic <header> element with an <h1> containing the blog name
 */
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
