import { Button } from "@mui/material";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { StateProvider, useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer.js";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://thumbs.bfldr.com/at/pl546j-7le8zk-6gwiyo/v/2925175?expiry=1636387797&fit=bounds&height=800&sig=ZGI4NTIwYzA3ZWIxZDRkNGY3OTcxM2E4NWM1ODI2NjM4NjJmNDYxNg%3D%3D&width=1100"
          alt="Slack Logo"
        />
        <h2>Slack Clone using React js</h2>
        <Button onClick={SignIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
