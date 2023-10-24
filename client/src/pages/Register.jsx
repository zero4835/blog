import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"


const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [err, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = async (e)=>{
  //   e.preventDefault()
  //   try {
  //     const response = await fetch("/auth/register", {
  //       method: "POST",
  //       body: JSON.stringify(inputs),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //     } else {
  //       console.error("HTTP Error: " + response.status);
  //     }
  //   } catch (error) {
  //     setError(err.response.data)
  //     console.log(err);
  //   }
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  // console.log(inputs)

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          {" "}
          Don't you have an account? <Link to="/login">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
