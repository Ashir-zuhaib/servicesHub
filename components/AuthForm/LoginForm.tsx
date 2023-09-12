import React from "react";
import Styles from "./form.module.css";
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
import { useRouter } from "next/router";
import Link from "next/link";

interface loginForm {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  userPassword: string;
  setUserPassword: React.Dispatch<React.SetStateAction<string>>;
  submitLoginForm: () => void;
  errorMessage: string;
}
export default function LoginForm({
  email,
  setEmail,
  userPassword,
  setUserPassword,
  submitLoginForm,
  errorMessage,
}: loginForm) {
  // Change Password to Text Field
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const router = useRouter();

  return (
    <Grid item xs={12} className={Styles.formContainer}>
      <Stack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className={Styles.loginForm}>
        <Typography className={Styles.loginText} variant="h4">
          <LockOutlined fontSize="large" /> Login
        </Typography>
        <TextField
          className={Styles.idField}
          id="outlined-basic"
          label="Email*"
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
          className={`${Styles.passwordField} mb-3`}
          label="Password*"
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
        <p className="has-text-center is-size-14 h-15 has-text-danger">
          {errorMessage}
        </p>
        <Button
          className={Styles.loginButton}
          variant="contained"
          type="submit"
          onClick={submitLoginForm}>
          Login
        </Button>
        <Link href={"/Signup"} className={Styles.link}>
          Dont have Account? Signup Now
        </Link>
      </Stack>

      <div className={Styles.copyrightDiv}>
        <Typography variant="subtitle1" className={Styles.bottomPara}>
          © 2023 ServiceHub.pk, All Rights Reserved.
        </Typography>
      </div>
    </Grid>
  );
}
