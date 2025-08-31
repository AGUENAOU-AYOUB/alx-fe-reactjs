import { Link } from "react-router-dom";

export default function Posts() {
  const items = Array.from({ length: 5 }, (_, i) => ({ id: i + 1, title: `Post ${i + 1}` }));
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {items.map(p => (
          <li key={p.id}>
            <Link to={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
