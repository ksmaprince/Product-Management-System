import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";
import "./Login.css";

const Login = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  } = useLogin();

  return (
    <div className="loginContainer">
      <Grid container className="loginWrapper">
        <Grid item md={8} className="loginTitle">
          {" "}
          Login
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
        <Grid item mt={3} md={8}>
          <Button
            color="success"
            fullWidth
            variant="contained"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Grid>
        <Grid item mt={1} md={8} sx={{ flex: 1, textAlign: "center" }}>
          <Link to="/signup" className="smallText notRegister">
            Not registered?
            <span className="createAccount"> Create an account</span>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
