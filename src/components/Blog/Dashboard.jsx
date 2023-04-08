import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TokenApi from "../api/api";
import styles from "./Dashboard.module.css";
import Avatar from "@mui/material/Avatar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import swal from "sweetalert";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = useSelector((store) => store.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = () => {
    //const url = `http://localhost:8080/blog/user/${user._id}`;
    let url = `https://mern-blog-site-backend.onrender.com/blog/user/${user._id}`;
    let authAxios = TokenApi(url);
    authAxios
      .get(url)
      .then((data) => {
        setBlogs(data.data.userBlog.blogs);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    //const url = `http://localhost:8080/blog/${id}`;
    let url = `https://mern-blog-site-backend.onrender.com/blog/${id}`;
    console.log(id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this blog!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willdelete) => {
      if (willdelete) {
        let authAxios = TokenApi(url);
        authAxios
          .delete(url)
          .then((res) => {
            if (res.status === 200) {
              fetchData();
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className={styles.main}>
      {blogs.map((blog) => (
        <div key={blog._id} className={styles.container}>
          <div className={styles.user}>
            <div className={styles.userOne}>
              <Avatar
                className={styles.avatar}
                src={user.avatar}
                alt={user.name}
              />
              <p className={styles.UserName}>{user.name}</p>
            </div>
            <div className={styles.userTwo}>
              {/* <DeleteForeverIcon/>
                    <EditIcon/> */}
              <Toolbar disableGutters>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <span
                        style={{
                          fontWeight: "800",
                          fontSize: "40px",
                          padding: "2px",
                        }}
                      >
                        .
                      </span>
                      <span
                        style={{
                          fontWeight: "800",
                          fontSize: "40px",
                          padding: "2px",
                        }}
                      >
                        .
                      </span>
                      <span
                        style={{
                          fontWeight: "800",
                          fontSize: "40px",
                          padding: "2px",
                        }}
                      >
                        .
                      </span>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={() => navigate(`/edit/${blog._id}`)}>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={() => handleDelete(blog._id)}>
                      Delete
                    </MenuItem>
                  </Menu>
                </Box>
              </Toolbar>
            </div>
          </div>
          <div
            onClick={() => handleClick(blog._id)}
            style={{ textAlign: "center" }}
          >
            <img className={styles.img} src={blog.image} alt="" />
            <h1>{blog.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
