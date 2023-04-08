import Cookies from "universal-cookie";
import axios from "axios";

import React from 'react'

export default function TokenApi(url) {
  // console.log(url)
  // console.log("getToken")


  const cookies= new Cookies();
  let token = cookies.get('AccessToken');
  // console.log(token)
  const authAxios = axios.create({
      baseURL: url,
      headers: {
          Authorization: `Bearer ${token}`,
      }
  });

  return  authAxios
}
