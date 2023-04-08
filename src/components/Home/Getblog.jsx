import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TokenApi from "../api/api";
import styled from "./Getblog.module.css";
import DateRangeIcon from "@mui/icons-material/DateRange";
import moment from "moment";

function Getblog() {
  const [user, setUser] = useState("");
  const [blogs, setBlogs] = useState("");
  const blogID = useParams();

  const getData = () => {
    const url = `http://localhost:8080/blog/${blogID.id}`;
    //let url = `https://mernblog-t8ft.onrender.com/blog/${blogID.id}`
    const authAxios = TokenApi(url);
    authAxios
      .get(url)
      .then((res) => {
        setBlogs(res.data.blog);
        setUser(res.data.blog.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(blogs);

  return (
    <div>
      <div className={styled.container}>
        <img className={styled.image} src={blogs.image} alt="" />
        <h1 className={styled.title}>{blogs.title}</h1>
        <div className={styled.user}>
          <Avatar src={user.avatar} alt={user.name} />
          <p className={styled.userName}>{user.name}</p>
        </div>
        <div className={styled.dates}>
          <DateRangeIcon />
          <span>{moment(blogs.createdAt).format("MMM DD, YYYY")}</span>
        </div>
        <p className={styled.paragraph}>{blogs.description}</p>
      </div>
    </div>
  );
}

export default Getblog;
