import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    const nextErrors = {};

 
    if (!username) nextErrors.username = "Username is required";
    if (!email)    nextErrors.email    = "Email is required";
    if (!password) nextErrors.password = "Password is required";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors); 
      return;
    }

    setErrors({});
    console.log("Controlled submit:", formData);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
        {errors.username && <small style={{ color: "crimson" }}>{errors.username}</small>}
      </div>

      <div>
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        {errors.email && <small style={{ color: "crimson" }}>{errors.email}</small>}
      </div>

      <div>
        <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        {errors.password && <small style={{ color: "crimson" }}>{errors.password}</small>}
      </div>

      <button type="submit">Send</button>
    </form>
  );
}
