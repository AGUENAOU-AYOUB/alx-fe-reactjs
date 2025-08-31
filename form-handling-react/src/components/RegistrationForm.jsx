import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({}); // <-- required by tests

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    const nextErrors = {};

    if (!username || !username.trim()) nextErrors.username = "Username is required";

    
    if (!email) nextErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) nextErrors.email = "Invalid email";

    if (!password) nextErrors.password = "Password is required";
    else if (password.length < 8) nextErrors.password = "Password must be at least 8 characters";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors); // <-- required by tests
      return;
    }

    setErrors({});
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        {errors.username && <p style={{ color: "crimson" }}>{errors.username}</p>}
      </div>

      <div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p style={{ color: "crimson" }}>{errors.email}</p>}
      </div>

      <div>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <p style={{ color: "crimson" }}>{errors.password}</p>}
      </div>

      <button type="submit">send</button>
    </form>
  );
}

export default RegistrationForm;
