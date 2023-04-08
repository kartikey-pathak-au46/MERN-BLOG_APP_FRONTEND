import React from "react";
import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isAuthHandler, saveUser } from "../../redux/auth/action";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [doing, setDoing] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const url = "http://localhost:8080/user/login";
  let url = `https://mern-blog-site-backend.onrender.com/user/login`;
  const handleSubmit = () => {
    setDoing(true);
    axios
      .post(url, {
        email,
        password,
      })
      .then((res) => {
        const decode = jwt_decode(res.data.token);
        const cookies = new Cookies();
        cookies.set("AccessToken", res.data.token, decode, {
          expires: new Date(decode.exp * 1000),
        });
        cookies.set("loggedUser", decode, {
          expires: new Date(decode.exp * 1000),
        });
        dispatch(saveUser(decode));
        dispatch(isAuthHandler(true));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setDoing(false));
  };

  return (
    <div style={{ margin: "10vh 25% 0 25%", textAlign: "center" }}>
      <h1>Login</h1>
      <div>{doing ? <CircularProgress /> : null}</div>
      <div style={{ padding: "20px", marginTop: "0vh" }}>
        <TextField
          style={{ padding: "10px" }}
          placeholder="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          style={{ padding: "10px" }}
          value={password}
          type="text"
          placeholder="Password"
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
