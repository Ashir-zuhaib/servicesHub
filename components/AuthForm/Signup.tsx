import React from "react";
import Grid from "@mui/material/Grid";
import firebase from "../../config";
import { useState } from "react";
import SignupForm from "./SignupForm";
import swal from "sweetalert";
import { useRouter } from "next/router";
// import { useRouter } from 'next/router';
export default function SignupMain() {
  const router = useRouter();
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [userPassword, setUserPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [roles, setRoles] = useState<any[]>([]);
  const [locations, setLocation] = useState<any[]>([]);
  const [area, setArea] = useState<string>("");
  const [worker, setWorker] = useState<boolean>(false);
  const [occupation, setOccupation] = useState("QUoP0oYjQaPHrMhzznNN");
  const { checkoutData } = router.query;
  const submitSignupForm = async () => {
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
        hourlyRate: hourlyRate,
        profileImage: profileImage || "",
      };
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
            hourlyRate: values.hourlyRate,
            profileImg: profileImage || "",
          })
          .then(() => {
            localStorage.setItem("uid", user?.uid);
            if (!values.worker) {
              swal("Account Created");
              // location.href = "..";
              checkoutData
                ? router.push({
                    pathname: "/Checkout",
                    query: { bookingData: checkoutData },
                  })
                : router.push("/");
            } else {
              router.push("/Dashboard");
            }
          })
          .catch((e) => swal("Failed",`${e.message}`));
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
        hourlyRate={hourlyRate}
        setHourlyRate={setHourlyRate}
        roles={roles}
        setRoles={setRoles}
        profileImage={profileImage}
        setProfileImage={setProfileImage}
        submitLoginForm={submitSignupForm}
        errorMessage={errorMessage}
      />
    </Grid>
  );
}
