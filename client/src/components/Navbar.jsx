import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src="./images/black-cat.png" alt="dog"></img>
        </div>
        <div className="links">
          <Link className="link" to="https://www.facebook.com/">
            <h6>Facebook</h6>
          </Link>
          <Link className="link" to="https://zero4835.github.io/">
            <h6>Blog</h6>
          </Link>
          <Link className="link" to="https://github.com/zero4835">
            <h6>Github</h6>
          </Link>
          <span>John</span>
          <span>Login</span>
          <span className="write">
            <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
