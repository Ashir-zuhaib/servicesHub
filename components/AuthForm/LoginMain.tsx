import React from "react";
import LoginForm from "./LoginForm";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import firebase from "../../config";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { getUser } from "../../utils/getData";

export default function LoginMain() {
  const [email, setEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();
  const { readyForcheckout } = router.query;
  const submitLoginForm = () => {
    if (email == "" || userPassword == "") {
      setErrorMessage("Fields cannot be empty");
    } else {
      setErrorMessage("");
      onFinishLogin(email, userPassword);
    }
  };
  const onFinishLogin = async (user_email, password) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user_email, password)
      .then(async (doc) => {
        let userData = await getUser(doc.user.uid);
        localStorage.setItem("uid", doc.user.uid);
        if (!userData.worker) {
          swal("Login Successful");
          readyForcheckout
            ? router.push({
                pathname: "/Checkout",
                query: { bookingData: readyForcheckout },
              })
            : (location.href = "..");
        } else {
          router.push("/Dashboard");
        }
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
      <LoginForm
        email={email}
        setEmail={setEmail}
        userPassword={userPassword}
        setUserPassword={setUserPassword}
        submitLoginForm={submitLoginForm}
        errorMessage={errorMessage}
        readyForcheckout={readyForcheckout}
      />
    </Grid>
  );
}
