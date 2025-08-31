import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Profile from "./components/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import Login from "./pages/Login";

function Nav() {
  const { isAuthenticated, login, logout } = useAuth();
  return (
    <header style={{ display: "flex", gap: 12, padding: 12, borderBottom: "1px solid #ddd" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <span style={{ marginLeft: "auto" }}>
        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={() => login()}>Quick Login</button>
        )}
      </span>
    </header>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
        <main style={{ padding: 16 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:postId" element={<Post />} /> {/* dynamic route */}

            <Route path="login" element={<Login />} />

            {/* Protected area */}
            <Route element={<ProtectedRoute />}>
              <Route path="profile" element={<Profile />}>
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
