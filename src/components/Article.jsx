function Article({ post }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{post.title}</h3>
      <small>{post.date}</small>
      <p>{post.preview}</p>
    </div>
  );
}

export default Article;