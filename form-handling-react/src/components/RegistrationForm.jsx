import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  }

  const handleSubmit = (e) => {
  e.preventDefault();
  const { username, email, password } = formData;

  if (!username.trim() || !/\S+@\S+\.\S+/.test(email) || password.length < 8) {
    alert("not valid");
    return;
  }
  console.log(formData);
};


  return (
    <form className="" onSubmit={handleSubmit}>
        <input  name="username" value={formData.username} onChange={handleChange}/>
        <input name="email" value={formData.email} onChange={handleChange}/>
        <input name="password" value={formData.password} onChange={handleChange}/>
        <button type="submit" >send</button>
    </form>
  );
}
export default RegistrationForm;
