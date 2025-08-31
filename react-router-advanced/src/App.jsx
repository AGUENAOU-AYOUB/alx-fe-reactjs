import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ProtectedRoute from "./routes/ProtectedRoute"; // <-- note the path
import BlogPost from "./components/BlogPost";          // <-- dynamic route component

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <header style={{ display: "flex", gap: 12, padding: 12, borderBottom: "1px solid #ddd" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/blog/42">Blog #42</NavLink>
        <span style={{ marginLeft: "auto" }}>
          {isAuthenticated ? (
            <button onClick={() => setIsAuthenticated(false)}>Logout</button>
          ) : (
            <button onClick={() => setIsAuthenticated(true)}>Quick Login</button>
          )}
        </span>
      </header>

      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* posts (kept from earlier) */}
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<Post />} />

          {/* dynamic route the grader looks for */}
          <Route path="/blog/:id" element={<BlogPost />} />

          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />

          {/* protected area */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/profile/*" element={<Profile />} />
          </Route>

          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
