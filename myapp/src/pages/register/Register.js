import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import "../login/Login.css";
import useRegister from "./useRegister";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    email,
    password,
    confirmPassword,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleRegister,
  } = useRegister();

  return (
    <div className="loginContainer">
      <Grid container className="loginWrapper">
        <Grid item md={8} className="loginTitle">
          {" "}
          Register
        </Grid>
        <Grid item md={8} mt={5}>
          <TextField
            variant="outlined"
            value={email}
            label="Email"
            onChange={handleEmailChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item md={8} mt={3}>
          <TextField
            variant="outlined"
            value={password}
            hidden
            label="Password"
            onChange={handlePasswordChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item md={8} mt={3}>
          <TextField
            variant="outlined"
            hidden
            value={confirmPassword}
            label="Confirm Password"
            onChange={handleConfirmPasswordChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item mt={3} md={8}>
          <Button
            color="success"
            fullWidth
            variant="contained"
            onClick={handleRegister}
          >
            Register
          </Button>
        </Grid>
        <Grid item mt={1} md={8} sx={{ flex: 1, textAlign: "center" }}>
          <Link to="/" className="smallText notRegister">
            Already registered?
            <span className="createAccount"> Sign in here</span>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
