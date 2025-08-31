import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <header style={{ display: "flex", gap: 12, padding: 12, borderBottom: "1px solid #ddd" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/profile">Profile</NavLink>
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

          {/* Dynamic routes */}
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<Post />} />

          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />

          {/* Protected route usage */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            {/* profile/* so nested routes inside Profile.jsx can resolve */}
            <Route path="/profile/*" element={<Profile />} />
          </Route>

          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
