import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/create", form);
      navigate("/dashboard"); // ✅ redirect after submit
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };

  return (
    <div>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={form.name}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
        />

        <input
          name="age"
          placeholder="Age"
          onChange={handleChange}
          value={form.age}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
        />

        <button type="submit">Submit</button>
      </form>

      {/* ✅ Correct button navigation */}
      <button onClick={() => navigate("/dashboard")}>
        Show
      </button>
    </div>
  );
}