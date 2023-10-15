import React from "react";
import Logo from '../images/black-cat.png'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Logo" />
      <span>
        Use <b>React</b> and <b>Express.js</b>
      </span>
    </footer>
  );
};

export default Footer;
