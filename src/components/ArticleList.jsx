import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <div>
      <h2>Articles</h2>

      {posts.map((post) => (
        <Article key={post.id} post={post} />
      ))}
    </div>
  );
}

export default ArticleList;