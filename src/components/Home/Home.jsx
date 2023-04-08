import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TokenApi from "../api/api";
import styles from "./Home.module.css";
import Avatar from "@mui/material/Avatar";

import { useNavigate } from "react-router-dom";
import Skelaton from "./Skelaton";

function Home() {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const user = useSelector((store) => store.user.userData);
  const isAuth = useSelector((store) => store.user.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = () => {
    setLoading(true);
    //const url = `http://localhost:8080/blogs/`;
    let url = `https://mern-blog-site-backend.onrender.com/blogs/`;
    let authAxios = TokenApi(url);
    authAxios
      .get(url)
      .then((data) => {
        // console.log(data.data)
        setBlogs(data.data.blogs);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNavigate = (id) => {
    if (isAuth) {
      navigate(`/user/${id}`);
    } else {
      navigate("login");
    }
  };

  const handleClick = (id) => {
    if (isAuth) {
      navigate(`/blog/${id}`);
    } else {
      navigate("login");
    }
  };

  return (
    <div>
      {loading ? (
        <Skelaton />
      ) : (
        <div className={styles.main}>
          {blogs.map((blog) => (
            <div key={blog._id} className={styles.container}>
              <div
                onClick={() => handleNavigate(blog.user._id)}
                className={styles.user}
              >
                <Avatar src={blog.user.avatar} alt={blog.user.name} />
                <p className={styles.UserName}>{blog.user.name}</p>
              </div>
              <div className={styles.info}>
                <img className={styles.img} src={blog.image} alt="" />
                <p>{blog.title}</p>
                <button
                  onClick={() => handleClick(blog._id)}
                  className={styles.button}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
