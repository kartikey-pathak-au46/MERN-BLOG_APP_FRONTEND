import React from "react";
import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [doing, setDoing] = useState(false);
  const navigate = useNavigate();

  const url = "http://localhost:8080/user/signup";
  //let url = `https://mernblog-t8ft.onrender.com/user/signup`
  const handleSubmit = () => {
    setDoing(true);
    axios
      .post(url, {
        name,
        email,
        password,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setDoing(false));
  };

  return (
    <form action="submit">
      <div style={{ margin: "10vh 25% 0 25%", textAlign: "center" }}>
        <h1>SingUp</h1>
        <div>{doing ? <CircularProgress /> : null}</div>
        <div style={{ padding: "20px", marginTop: "0vh" }}>
          <TextField
            style={{ padding: "10px" }}
            placeholder="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            SignUp
          </Button>
          <p>
            Already have an account :{" "}
            <Link style={{ color: "blue", fontWeight: "" }} to="/login">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Signup;
