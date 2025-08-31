import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <nav style={{ display: "grid", gap: 8, marginTop: 8 }}>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/posts/42">Example Post #42</NavLink>
        <NavLink to="/profile">Profile (protected)</NavLink>
      </nav>
    </div>
  );
}
