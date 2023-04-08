import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../Profile/Profile.module.css";
import { Avatar, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Image, Label } from "@mui/icons-material";
import TokenApi from "../api/api";
import CircularProgress from "@mui/material/CircularProgress";

function User() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const userID = useParams();
  const hanldeUser = () => {
    let url = `http://localhost:8080/user/${userID.id}`;
    //let url = `https://mernblog-t8ft.onrender.com/user/${userID.id}`

    const authAxios = TokenApi(url);
    setLoading(true);
    authAxios
      .get(url)
      .then((res) => {
        setUser(res.data.existingUser);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    hanldeUser();
  }, []);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={styles.main}>
          <div className={styles.profile}>
            <img className={styles.avatar} alt={user.name} src={user.avatar} />
            <label
              style={{
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Name <span style={{ padding: "0 8px" }}>:-</span>
              <span>{user.name}</span>
            </label>
            <label
              style={{
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Tag <span style={{ padding: "0 8px" }}>:-</span>{" "}
              <span>{user.tagline}</span>
            </label>
            <label
              style={{
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Bio<span style={{ padding: "0 8px" }}>:-</span>{" "}
              <span>{user.bio}</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
