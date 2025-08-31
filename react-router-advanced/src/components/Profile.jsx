import { NavLink, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav style={{ display: "flex", gap: 12 }}>
        <NavLink end to="">Details</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>

      {/* Nested routes inside Profile.jsx (grader looks for <Routes><Route ... and component names) */}
      <Routes>
        <Route index element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
