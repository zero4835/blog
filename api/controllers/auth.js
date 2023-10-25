import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  console.log(req.body.email);
  console.log(req.body.username);
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  // check user
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.lenghth === 0) return res.status(404).json("User is not find");

    // check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password");

    // Sign a JWT token with the user's ID and a secret key
    const token = jwt.sign({ id: data[0].id }, "jwtkey");

    // Create a new object 'other' by destructuring 'data[0]' to exclude the 'password' property
    const { password, ...other } = data[0];

    // Set an HTTP-only cookie named "access_token" with the JWT token for secure user authentication
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      // Set the HTTP response status to 200 (OK) to indicate a successful login
      .status(200)
      // Send the user's data as a JSON response to the client
      .json(data[0]);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
