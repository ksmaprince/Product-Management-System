import React, { useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "./useLogin";
import "./Login.css";
import constant from "../../utils/constant";

const Login = () => {
  const {
    handleTextChange,
    loginData,
    handleLogin,
    navigateTo
  } = useLogin();

  useEffect(() => {
    if (localStorage.getItem(constant.KEY) !== null) {
      navigateTo("/products")
    }
  }, [])
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
            name="email"
            data-testid="email"
            value={loginData.email.value}
            label="Email"
            onChange={handleTextChange}
            fullWidth
            required
            error={loginData.email.error}
            helperText={loginData.email.error && loginData.email.errorMessage}
          />
        </Grid>
        <Grid item md={8} mt={3}>
          <TextField
            type="password"
            data-testid="password"
            variant="outlined"
            name="password"
            value={loginData.password.value}
            hidden
            label="Password"
            onChange={handleTextChange}
            fullWidth
            required
            error={loginData.password.error}
            helperText={loginData.password.error && loginData.password.errorMessage}
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
