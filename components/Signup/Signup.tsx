import React from "react";
import Grid from "@mui/material/Grid";

import { useState } from "react";
import SignupView from "./SignupView";
import SignupForm from "./SignupForm";
export default function SignupMain(){
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [roles, setRoles] = useState([]);
    const [location, setLocation] = useState([]);
    const [area, setArea] = useState([]);
    const [worker, setWorker] = useState(false);
    const [occupation, setOccupation] = useState("QUoP0oYjQaPHrMhzznNN");
    const submitLoginForm = () => {
        if (fullName == "" || email == "" || userPassword == "" ) {
          setErrorMessage("Fields cannot be empty");
        } else {
          setErrorMessage("");
          let data ={
            fullName:fullName,
            email:email,
            phone:phone,
            password:userPassword,
            location:area
          }
          console.log("data", data);
          
          location.href = "..";
        }
      };
    return (
         <>
    <Grid container style={{ minHeight: "100vh", position: "relative" }}>
        <SignupView />
        <SignupForm 
        fullName={fullName}
        setFullName={setFullName}
         email={email}
         setEmail={setEmail}
         phone ={phone}
         setPhone={setPhone}
         userPassword={userPassword}
         setUserPassword={setUserPassword}
         location ={location}
         setLocation ={setLocation}
         area = {area}
         setArea ={setArea}
         submitLoginForm={submitLoginForm}
         errorMessage={errorMessage}/>
</Grid>
    </>
    )
}