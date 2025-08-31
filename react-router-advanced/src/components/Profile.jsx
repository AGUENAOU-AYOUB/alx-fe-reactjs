import { NavLink, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav style={{ display: "flex", gap: 12 }}>
        <NavLink end to="">Details</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>
      <div style={{ marginTop: 12 }}>
        <Outlet /> {/* renders nested routes */}
      </div>
    </div>
  );
}
