import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AuthUser1 = () => {
  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    console.log("tokenstring--->", tokenString);
    // const userToken = JSON.parse(tokenString);
    return tokenString;
  };
  // nirmal@amplework.com
  // Vid@12345
  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    // const userToken = JSON.parse(userString);
    return userString;
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const saveToken = (user, token) => {
    console.log("token--->", token);
    console.log("user--->", user);

    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", user);
    setToken(token);
    setUser(user);
    // navigate("/dashboard1");
  };

  const http = axios.create({
    baseURL: "http://45.79.127.218/vidguest-api/api",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return { setToken: saveToken, token, user, getToken, http };
};

export default AuthUser1;
