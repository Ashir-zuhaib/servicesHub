import React from "react";
import LoginForm from "./LoginForm";
import LoginView from "./LoginView";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import firebase from "../../config";
import swal from "sweetalert";

export default function LoginMain() {
  const [email, setEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const submitLoginForm = () => {
    if (email == "" || userPassword == "") {
      setErrorMessage("Fields cannot be empty");
    } else {
      setErrorMessage("");
      onFinishLogin(email, userPassword)
    }
  };
  const onFinishLogin = async (user_email, password) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user_email, password)
      .then((doc) => {
        localStorage.setItem("uid", doc.user.uid);
        console.log("uid", doc.user.uid);
        swal("Login Successfull")
      location.href = "..";

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        swal("Failed", errorMessage);
      });
  };
  return (
    <Grid container style={{ minHeight: "100vh", position: "relative" }}>
      <LoginView />
      <LoginForm
        email={email}
        setEmail={setEmail}
        userPassword={userPassword}
        setUserPassword={setUserPassword}
        submitLoginForm={submitLoginForm}
        errorMessage={errorMessage}
      />
    </Grid>
  );
}
