import React from "react";
import LoginForm from "./LoginForm";
import LoginView from "./LoginView";
import Grid from "@mui/material/Grid";
import { useState } from "react";

export default function LoginMain() {
  const [email, setEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const submitLoginForm = () => {
    if (email == "" || userPassword == "") {
      setErrorMessage("Fields cannot be empty");
    } else {
      setErrorMessage("");
      location.href = "..";
    }
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
