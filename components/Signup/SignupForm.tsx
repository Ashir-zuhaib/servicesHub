import React, { useEffect } from "react";
import Styles from "./signup.module.css";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import firebase from "../../config";
import { SelectChangeEvent } from "@mui/material/Select";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useRouter } from "next/router";

import {
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import {
  LockOutlined,
  PersonOutlineOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
  Call,
} from "@mui/icons-material";
interface signupForm {
  fullName: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  hourlyRate:number;
  setHourlyRate: React.Dispatch<React.SetStateAction<number>>;
  locations: any[];
  setLocation: React.Dispatch<React.SetStateAction<any[]>>;
  userPassword: string;
  setUserPassword: React.Dispatch<React.SetStateAction<string>>;
  area: string;
  setArea: React.Dispatch<React.SetStateAction<string>>;
  occupation: string;
  setOccupation: React.Dispatch<React.SetStateAction<string>>;
  worker: boolean;
  setWorker: React.Dispatch<React.SetStateAction<boolean>>;
  roles: any[];
  setRoles: React.Dispatch<React.SetStateAction<any[]>>;
  profileImage: string;
  setProfileImage: React.Dispatch<React.SetStateAction<string>>;
  submitLoginForm: () => void;
  errorMessage: string;
}
export default function SignupForm({
  fullName,
  setFullName,
  email,
  setEmail,
  phone,
  setPhone,
  locations,
  setLocation,
  userPassword,
  setUserPassword,
  submitLoginForm,
  area,
  setArea,
  worker,
  setWorker,
  occupation,
  setOccupation,
  roles,
  setRoles,
  errorMessage,
  hourlyRate,
  setHourlyRate,
  profileImage,
  setProfileImage
}: signupForm) {
  // Change Password to Text Field
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleImageUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e",e);
    
    const file = e.target.files && e.target.files[0];
    if (file) {
      console.log("file", file);
      const profileUrl = await uploadImageToFirebase(file)
      setProfileImage(profileUrl);
    }
  };
  const getLocation = async () => {
    let locationArray: any[] = [];
    let getLocation = await firebase.firestore().collection("Location").get();
    console.log("location size", getLocation.size);

    getLocation.docs.forEach((doc) => {
      let data = doc.data();
      data.key = doc.id;
      locationArray.push(data);
      setLocation(locationArray);
    });
  };
  const uploadImageToFirebase = async (imageFile: File) => {
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`profileImage/${imageFile.name}`);

    try {
      const snapshot = await imageRef.put(imageFile);
      const downloadURL = await snapshot.ref.getDownloadURL();
      console.log("downloadURL",downloadURL);
      
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image to Firebase Storage:", error);
      throw error;
    }
  };
  const getRoles = async () => {
    let rolesArray = [];
    let getRoles = await firebase.firestore().collection("Services").get();
    console.log("Roles size", getRoles.size);

    getRoles.docs.forEach((doc) => {
      let data = doc.data();
      data.key = doc.id;
      rolesArray.push(data);
      setRoles(rolesArray);
    });
  };
  console.log("locationArray", locations);

  useEffect(() => {
    getRoles();
    getLocation();
  }, []);
  const handleAreaChange = (event: SelectChangeEvent<any>) => {
    const selectedArea = locations?.find(
      (item) => item.value === event.target.value
    );
    if (selectedArea) {
      setArea(selectedArea.key);
    }
  };
  const handleRoleChange = (event: SelectChangeEvent<{ value: unknown }>) => {
    const selectedOccupation = roles?.find(
      (item) => item.value === event.target.value
    );
    if (selectedOccupation) {
      setOccupation(selectedOccupation.key);
    }
  };
  return (
    <Grid item xs={12} md={6} className={Styles.formContainer}>
      <div className="login-form-container px-2">
        <Stack
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={Styles.loginForm}>
          <div className={Styles.headingDiv}>
            <Typography className={Styles.loginText} variant="h3">
              Sign up
            </Typography>
            <Typography className={Styles.loginPara} variant="subtitle1">
              Create account to get our services
            </Typography>
          </div>
          <br />
          <TextField
            className={Styles.idField}
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlined />
                </InputAdornment>
              ),
            }}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextField
            className={Styles.idField}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlined />
                </InputAdornment>
              ),
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={Styles.idField}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Call />
                </InputAdornment>
              ),
            }}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            className={`${Styles.passwordField} mb-3`}
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            value={userPassword}
            onChange={(e) => {
              EventTarget;
              setUserPassword(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}>
                    {showPassword ? (
                      <VisibilityOutlined />
                    ) : (
                      <VisibilityOffOutlined />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <InputLabel id="demo-simple-select-label">Location</InputLabel>
          <Select
            className={Styles.idField}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={area["value"]}
            label="Location"
            onChange={handleAreaChange}>
            {locations?.map((item) => (
              <MenuItem key={item.key} value={item.value}>
                {item.value}
              </MenuItem>
            ))}
          </Select>
          <FormControlLabel
            control={<Checkbox onChange={(e) => setWorker(e.target.checked)} />}
            label="Sign up as Worker"
          />
          {worker ? (
            <>
             <TextField
            className={Styles.idField}
            id="outlined-basic"
            label="Set Hourly Rate"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
      <AccessTimeIcon fontSize="small" className="mr-1" />

                </InputAdornment>
              ),
            }}
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
          />

              <InputLabel id="demo-simple-select-label">Occupation</InputLabel>
              <Select
                className={Styles.idField}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={occupation['vaue']}
                label="Occupation"
                onChange={handleRoleChange}>
                {roles?.map((item) => (
                  <MenuItem key={item.key} value={item.value}>
                    {item.value}
                  </MenuItem>
                ))}
              </Select>
              {profileImage?
              (<p>Profile Picture Uploaded</p>)
              :<label htmlFor="profile-image-input">
              <Button
                className={Styles.loginButton}
                variant="contained"
                component="span" // This makes the button act as a file input trigger
              >
                      <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
              id="profile-image-input"
            />
                Upload Profile Picture
              </Button>
            </label>
              }
    
            </>
            
          ) : (
            ""
          )}
          <p className="has-text-center is-size-14 h-15 has-text-danger">
            {errorMessage}
          </p>
          <Button
          className={Styles.loginButton}
          variant="contained"
          type="button" // Set type to "button" to prevent form submission
          onClick={submitLoginForm}>
          Sign up
        </Button>

          <Button
            className={Styles.belowBtn}
            onClick={() => router.push("./Login")}>
            Already have Account? Login Now
          </Button>
        </Stack>
      </div>
      {/* <div className={Styles.copyrightDiv}>
        <Typography variant="subtitle1" className={Styles.bottomPara}>
          © 2023 ServiceHub.pk, All Rights Reserved.
        </Typography>
      </div> */}
    </Grid>
  );
}
