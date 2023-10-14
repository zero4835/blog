import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Register</button>
        <p>username or password Error!</p>
        <span>
          {" "}
          Don't you have an account? <Link to="/login">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
