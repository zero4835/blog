import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* img src should be use / not ./ */}
      <img src={"/images/black-cat.png"} alt="Logo" />
      <span>
        Use <b>React</b> and <b>Express.js</b>
      </span>
    </footer>
  );
};

export default Footer;
