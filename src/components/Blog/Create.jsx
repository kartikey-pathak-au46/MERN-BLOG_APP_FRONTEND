import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cookie from "universal-cookie";
import TokenApi from "../api/api";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setAvatar] = useState("");
  const naviggate = useNavigate();
  // const [image1, setImage] = useState([])
  //   const [ imageURL, setImageURL] = useState([])

  //   useEffect(() =>{
  //     if(image1.length < 1) return
  //     else convertImageUrl()
  //   },[image1])

  //   const handleImage = (e) => {
  //     setAvatar(e.target.value)
  //     setImage([...e.target.files])
  // }

  const cookies = new Cookie();
  let user = cookies.get("loggedUser");

  const handleSubmit = () => {
    if (title.length === 0 && image.length == 0 && description.length == 0) {
      swal("Complete Blog Deatils!", { button: false, icon: "error" });
    } else {
      let payload = {
        title: title,
        description: description,
        image: image,
        user: user._id,
      };

      //const url = "http://localhost:8080/blog/add";
      const url = "https://mern-blog-site-backend.onrender.com/blog/add";
      let authAxios = TokenApi(url);
      authAxios
        .post(url, payload)
        .then((res) => {
          if (res.status === 200) {
            console.log("ok" + res.status);
            swal({
              title: "Created Successfully",
              timer: 2000,
              icon: "success",
              button: false,
            });
          }
          naviggate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // const convertImageUrl = () => {
  //   const newImageURls = [];
  //   image1.forEach((img) => newImageURls.push(URL.createObjectURL(img)));
  //   setImageURL(newImageURls);
  // };

  return (
    <div>
      <form
        style={{
          color: "#fff",
          margin: "20px",
          padding: "20px 50px 20px 50px ",
        }}
      >
        {/* <div style={{margin:"0px 50px" ,padding:"10px 50px",overflow:"hidden",display:"inline-block"}}>
        <Button variant='contained' ><Input   accept='image/*' multiple type="file" onChange={handleImage} /></Button>
        {imageURL.map(imgsrc => <img style={{width:"100%"}} src={imgsrc}/>)}
      </div> */}
        <TextField
          style={{ padding: "20px 5px", color: "#fff" }}
          fullWidth
          size="small"
          placeholder="Add a ImageUrl"
          type="text"
          value={image}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <TextField
          style={{ padding: "20px 5px" }}
          fullWidth
          size="small"
          placeholder="Add a title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-multiline-static"
          style={{ padding: "20px 5px" }}
          placeholder="description"
          multiline
          rows={4}
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Publish
        </Button>
      </form>
    </div>
  );
}

export default Create;
