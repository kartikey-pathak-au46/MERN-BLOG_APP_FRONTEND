import React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { Avatar, Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";
import { Image, Label } from "@mui/icons-material";

function Profile() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.userData);

  return (
    <div className={styles.main}>
      <div className={styles.profile}>
        <div style={{margin:"auto",display:"flex",justifyContent:"center",alignItems:"end"}} >
          <img className={styles.avatar} alt={user.name} src={user.avatar} />
          <Fab
            onClick={() => navigate(`/editprofile/${user._id}`)}
            className={styles.editeButton}
            color="secondary"
            aria-label="edit"
          >
            <EditIcon className={styles.edit} />
          </Fab>
        </div>
        <label style={{fontSize:"20px" , display: "flex", alignItems: "center" }}>
          Name <span style={{padding:"0 8px"}}>:-</span> <span>{user.name}</span>
        </label>
        <label style={{fontSize:"20px" ,display: "flex", alignItems: "center" }}>

          Email <span style={{padding:"0 8px"}}>:-</span> <hspan>{user.email}</hspan>
        </label>
        <label style={{fontSize:"20px" ,display: "flex", alignItems: "center" }}>
          Number <span style={{padding:"0 8px"}}>:-</span>  <hspan>{user.mobile}</hspan>
        </label>
        <label style={{fontSize:"20px" ,display: "flex", alignItems: "center" }}>
          Tag <span style={{padding:"0 8px"}}>:-</span>  <hspan>{user.tagline}</hspan>
        </label>
        <label style={{fontSize:"20px" ,display: "flex", alignItems: "center" }}>
          Bio <span style={{padding:"0 8px"}}>:-</span> <hspan>{user.bio}</hspan>
        </label>
      </div>
      <div>
      
      </div>
    </div>
  );
}

export default Profile;
