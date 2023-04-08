import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import { Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assesst/logo1.png";
import styles from "./Navbarr.module.css";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Cookies from "universal-cookie";
import { isAuthHandler, LogoutUser } from "../redux/auth/action";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const isAuth = useSelector((store) => store.user.isAuth);
  const user = useSelector((store) => store.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };
  console.log(open);
  const closeMenu = () => {
    setOpen(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignout = () => {
    const cookies = new Cookies();
    cookies.remove("AccessToken");
    cookies.remove("loggedUser");
    dispatch(isAuthHandler(false));
    dispatch(LogoutUser());
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img className={styles.logo} src={logo} alt="" />
      </Link>
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          {isAuth ? (
            <Link to="/create" className="nav-link">
              <button className={styles.create}>
                <AddCircleIcon />
                <Typography variant="button" display="block">
                  CREATE
                </Typography>
              </button>
            </Link>
          ) : null}
        </li>
        <li className="nav-item">
          {isAuth ? (
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.name} src={user.avatar} />
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
                  <MenuItem onClick={() => navigate("/profile")}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/dashboard")}>
                    Dashboard
                  </MenuItem>
                  <MenuItem onClick={handleSignout}>LogOut</MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          ) : (
            <>
              <Link to="/login">
                {" "}
                <Button variant="contained">Login</Button>
              </Link>
              <Link to="/signup">
                {" "}
                <Button variant="contained">SignIn</Button>
              </Link>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
