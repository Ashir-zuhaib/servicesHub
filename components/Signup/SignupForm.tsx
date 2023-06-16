import React, { useEffect } from "react";
import Styles from "./signup.module.css";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import firebase from "../../config";
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
  FormControlLabel
} from "@mui/material";
import {
  LockOutlined,
  PersonOutlineOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
  Call,
} from "@mui/icons-material";
interface MenuItemData {
  value: string;
  key: string;
}
interface signupForm {
  fullName: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  locations: any[];
  setLocation: React.Dispatch<React.SetStateAction<any[]>>;
  userPassword: string;
  setUserPassword: React.Dispatch<React.SetStateAction<string>>;
  area:string;
  setArea: React.Dispatch<React.SetStateAction<string>>;
  occupation:string;
  setOccupation: React.Dispatch<React.SetStateAction<string>>;
  worker: boolean;
  setWorker: React.Dispatch<React.SetStateAction<boolean>>;
  roles: any[];
  setRoles: React.Dispatch<React.SetStateAction<any[]>>;
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
}: signupForm) {
  // Change Password to Text Field

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
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

  const getRoles = async()=>{
    let rolesArray = [];
    let getRoles = await firebase.firestore().collection("Roles").get();
    console.log("Roles size", getRoles.size);

    getRoles.docs.forEach((doc) => {
      let data = doc.data();
      data.key = doc.id;
      rolesArray.push(data);
      setRoles(rolesArray);
    });
  }
  console.log("locationArray", locations);

  useEffect(() => {
    getRoles();
    getLocation();
  }, []);
  const handleAreaChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedArea = locations?.find(
      (item) => item.value === event.target.value
    );
    if (selectedArea) {
      setArea(selectedArea.key);
    }
  };
  const handleRoleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedOccupation = roles?.find(
      (item) => item.value === event.target.value
    );
    if (selectedOccupation) {
      setOccupation(selectedOccupation.key);
    }
  };
  return (
    <Grid item xs={12} md={4} className={Styles.formContainer}>
      <div className="login-form-container px-2">
        <Stack
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={Styles.loginForm}
        >
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
                    onMouseDown={handleMouseDownPassword}
                  >
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
            value={area?.value}
            label="Location"
            onChange={handleAreaChange}
          >
            {locations?.map((item) => (
              <MenuItem key={item.key} value={item.value}>
                {item.value}
              </MenuItem>
            ))}
          </Select>
          <FormControlLabel control={<Checkbox  onChange={(e)=>setWorker(e.target.checked)} />} label="Sign up as Worker" />
          {worker?
          (<>
          <InputLabel id="demo-simple-select-label">Occupation</InputLabel>
          <Select
            className={Styles.idField}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={occupation?.value}
            label="Occupation"
            onChange={handleRoleChange}
          >
            {roles?.map((item) => (
              <MenuItem key={item.key} value={item.value}>
                {item.value}
              </MenuItem>
            ))}
          </Select>
          </>):""}
          <p className="has-text-center is-size-14 h-15 has-text-danger">
            {errorMessage}
          </p>
          <Button
            className={Styles.loginButton}
            variant="contained"
            type="submit"
            onClick={submitLoginForm}
          >
            Sign up
          </Button>
        </Stack>
      </div>
      <div className={Styles.copyrightDiv}>
        <Typography variant="subtitle1" className={Styles.bottomPara}>
          © 2023 ServiceHub.pk, All Rights Reserved.
        </Typography>
      </div>
    </Grid>
  );
}
