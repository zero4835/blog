import React, {useEffect, useState, useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import Menu from "../components/Menu";
import axios from "axios"
import moment from "moment"
import { AuthContext } from "../context/authContext";

const Single = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState({});

  const location = useLocation()
  const postId = location.pathname.split("/")[2]

  const {currentUser} = useContext(AuthContext)

  const handleDelete= async ()=>{
    try {
      const res = await axios.delete(`/posts/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
        console.log(post)
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [postId]);

  return (
    <div className="single">
      <div className="content">
        <img
          // src={require(post?.img)}
          src={post?.img}
        />
        <div className="user">
          <img
            src={require("../images/cat-pusheen-kitten-cuteness-cat-84ad5e290be0a860307dfe791875f57e.png")}
          />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser && currentUser.username === post.username && (<div className="edit">
            <Link to={`/write?edit=2`} state={post}>
              <img src={Edit} />
            </Link>
            <img onClick={handleDelete} src={Delete} />
          </div>)}
        </div>
        <h1>{post.title}</h1>
        <p>
          {post.desc}
        </p>
      </div>
      <Menu cat={post.cat}/>
    </div>
  );
};

export default Single;
