import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/profile";

  const handleLogin = () => {
    login("Ayoub");
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}
