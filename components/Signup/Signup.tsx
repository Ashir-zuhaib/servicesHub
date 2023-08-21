import React from "react";
import Grid from "@mui/material/Grid";
import firebase from "../../config";
import { useState } from "react";
import SignupForm from "./SignupForm";
import swal from "sweetalert";
export default function SignupMain() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [roles, setRoles] = useState<any[]>([]);
  const [locations, setLocation] = useState<any[]>([]);
  const [area, setArea] = useState<string>("");
  const [worker, setWorker] = useState<boolean>(false);
  const [occupation, setOccupation] = useState("QUoP0oYjQaPHrMhzznNN");
  const submitLoginForm = async () => {
    if (fullName == "" || email == "" || userPassword == "") {
      setErrorMessage("Fields cannot be empty");
    } else {
      setErrorMessage("");
      let data = {
        full_name: fullName,
        email: email,
        phone: phone,
        password: userPassword,
        location: area,
        worker: worker,
        occupation: occupation,
      };
      console.log("data", data);
      await onFinish(data);
      // location.href = "..";
    }
  };
  const onFinish = async (values) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(async (userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("user created", user);
        // ...
        await firebase
          .firestore()
          .collection("Users")
          .doc(user.uid)
          .set({
            full_name: values.full_name,
            email: values.email,
            phone: values.phone,
            worker: values.worker,
            role: values.occupation || "",
            location: values.location,
          })
          .then(() => {
            swal("Account Created");
            location.href = "..";
          })
          .catch((e) => swal("Failed"));
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
      <SignupForm
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        userPassword={userPassword}
        setUserPassword={setUserPassword}
        locations={locations}
        setLocation={setLocation}
        area={area}
        setArea={setArea}
        worker={worker}
        setWorker={setWorker}
        occupation={occupation}
        setOccupation={setOccupation}
        roles={roles}
        setRoles={setRoles}
        submitLoginForm={submitLoginForm}
        errorMessage={errorMessage}
      />
    </Grid>
  );
}
