import React from "react";
import Styles from "./login.module.css";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Button,
  IconButton,
} from "@mui/material";
import {
  LockOutlined,
  PersonOutlineOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";

interface loginForm {
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
  userPassword: string;
  setUserPassword: React.Dispatch<React.SetStateAction<string>>;
  submitLoginForm: () => void;
  errorMessage: string;
}
export default function LoginForm({
  userId,
  setUserId,
  userPassword,
  setUserPassword,
  submitLoginForm,
  errorMessage,
}: loginForm) {
  // Change Password to Text Field
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

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
              Login
            </Typography>
            <Typography className={Styles.loginPara} variant="subtitle1">
              Login to your account to get your medicines
            </Typography>
          </div>
          <br />
          <TextField
            className={Styles.idField}
            id="outlined-basic"
            label="User ID"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlined />
                </InputAdornment>
              ),
            }}
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
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
          <p className="has-text-center is-size-14 h-15 has-text-danger">{errorMessage}</p>
          <Button
            className={Styles.loginButton}
            variant="contained"
            type="submit"
            onClick={submitLoginForm}
          >
            Login
          </Button>
        </Stack>
      </div>
      <div className={Styles.copyrightDiv}>
        <Typography variant="subtitle1" className={Styles.bottomPara}>
          © 2022 Dawaai.pk, All Rights Reserved.
        </Typography>
      </div>
    </Grid>
  );
}
