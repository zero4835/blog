import React from "react";
import { Link } from "react-router-dom";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src={require("../images/cosmic-starry-background-a5981f4750d983aee2a07460542f5df1.png")}
        />
        <div className="user">
          <img
            src={require("../images/cat-pusheen-kitten-cuteness-cat-84ad5e290be0a860307dfe791875f57e.png")}
          />
          <div className="info">
            <span>Natsusaka cat</span>
            <p>Posted 1 days ago</p>
          </div>
          <div>
            <Link to={`/write?edit=2`}>
              <img src={Edit} />
            </Link>
            <img src={Delete} />
          </div>
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          repudiandae enim quidem, nihil nesciunt, rerum sint fuga, libero
          doloribus dolores deleniti soluta exercitationem accusamus voluptates
          obcaecati minus esse reiciendis delectus? <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla ut
          quas optio numquam, quo cum totam a quasi officia! Nulla provident
          dolore consequuntur, deserunt vel quis sit quibusdam laborum ipsa.{" "}
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          doloribus eum atque quia laborum eius recusandae! Recusandae tempora,
          corporis, at quidem perferendis, cumque consequatur sint libero
          temporibus eos optio quae.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
