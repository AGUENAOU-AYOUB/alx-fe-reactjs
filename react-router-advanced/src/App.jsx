import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Home from "./components/Home";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogPost from "./components/BlogPost";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <header style={{ display: "flex", gap: 12, padding: 12, borderBottom: "1px solid #ddd" }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/blog/42">Blog #42</NavLink>
        </header>

        <main style={{ padding: 16 }}>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* dynamic */}
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId" element={<Post />} />
            <Route path="/blog/:id" element={<BlogPost />} />

            <Route path="/login" element={<Login />} />

            {/* protected area */}
            <Route element={<ProtectedRoute />}>
              <Route path="/profile/*" element={<Profile />}>
                <Route index element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
              </Route>
            </Route>

            <Route path="*" element={<h2>Not Found</h2>} />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}
