import React, { useEffect } from "react";
import Styles from "./form.module.css";
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
  UploadFileOutlined,
} from "@mui/icons-material";
import Link from "next/link";
interface signupForm {
  fullName: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  hourlyRate: number;
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
  setProfileImage,
}: signupForm) {
  // Change Password to Text Field
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e", e);

    const file = e.target.files && e.target.files[0];
    if (file) {
      console.log("file", file);
      const profileUrl = await uploadImageToFirebase(file);
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
      console.log("downloadURL", downloadURL);

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
    <Grid item xs={12} className={Styles.formContainer}>
      <Stack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className={Styles.loginForm}>
        <div className={Styles.headingDiv}>
          <Typography className={Styles.loginText} variant="h4">
            Sign up
          </Typography>
        </div>
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
        <InputLabel
          id="demo-simple-select-label"
          className="has-text-left w-100">
          Location
        </InputLabel>
        <Select
          className={`${Styles.idField} mb-0`}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={area["value"]}
          onChange={handleAreaChange}>
          {locations?.map((item) => (
            <MenuItem key={item.key} value={item.value}>
              {item.value}
            </MenuItem>
          ))}
        </Select>
        {!worker ? (
          <FormControlLabel
            control={<Checkbox onChange={(e) => setWorker(e.target.checked)} />}
            label="Sign up as Worker"
            className="has-text-right w-100 is-block"
          />
        ) : (
          ""
        )}
        {worker ? (
          <>
            <TextField
              className={`${Styles.idField} mt-5`}
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
            <InputLabel
              id="demo-simple-select-label"
              className="has-text-left w-100">
              Occupation
            </InputLabel>
            <Select
              className={Styles.idField}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={occupation["value"]}
              onChange={handleRoleChange}>
              {roles?.map((item) => (
                <MenuItem key={item.key} value={item.value}>
                  {item.value}
                </MenuItem>
              ))}
            </Select>
            {profileImage ? (
              <p className="text-green">Profile Picture Uploaded</p>
            ) : (
              <label htmlFor="profile-image-input">
                <Button
                  variant="outlined"
                  component="span"
                  startIcon={<UploadFileOutlined className="text-primary-color" />}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                    id="profile-image-input"
                  />
                  Upload Picture
                </Button>
              </label>
            )}
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

        <Link href={"/Login"} className={Styles.link}>
          Already have Account? Login Now
        </Link>
      </Stack>
    </Grid>
  );
}
