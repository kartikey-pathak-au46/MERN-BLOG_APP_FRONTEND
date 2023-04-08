import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cookie from "universal-cookie";
import TokenApi from "../api/api";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [blog, setBlog] = useState([]);
  const [title, setTitle] = useState(blog.title || "");
  const [description, setDescription] = useState(blog.description || "");
  const naviggate = useNavigate();
  const blogID = useParams();

  const cookies = new Cookie();
  let user = cookies.get("loggedUser");
  const fetchBlogData = () => {
    let url = `http://localhost:8080/blog/${blogID.id}`;
    //let url = `https://mernblog-t8ft.onrender.com/blog/${blogID.id}`
    const authAxios = TokenApi(url);

    authAxios
      .get(url)
      .then((res) => {
        setBlog(res.data.blog);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  const handleSubmit = () => {
    if (title.length === 0 && description.length == 0) {
      swal("Complete Blog Deatils!", { button: false, icon: "error" });
    } else {
      let payload = {
        title: title,
        description: description,
      };

      const url = `http://localhost:8080/blog/update/${blogID.id}`;
      //let url = `https://mernblog-t8ft.onrender.com/blog/update/${blogID.id}`;
      let authAxios = TokenApi(url);
      authAxios
        .patch(url, payload)
        .then((res) => {
          if (res.status === 200) {
            console.log("ok" + res.status);
            swal({
              title: "Update Successfully",
              timer: 2000,
              icon: "success",
              button: false,
            });
          }
          naviggate("/dashboard");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <form
        style={{
          border: "1px solid",
          margin: "20px",
          padding: "20px 50px 20px 50px ",
        }}
      >
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

export default Edit;
