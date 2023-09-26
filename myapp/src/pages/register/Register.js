import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import "../login/Login.css";
import useRegister from "./useRegister";
import { Link } from "react-router-dom";

const Register = () => {
  const { userData, handleRegister, handleTextChange } = useRegister();

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
            value={userData.email.value}
            name="email"
            type="email"
            label="Email"
            onChange={handleTextChange}
            fullWidth
            required
            error={userData.email.error}
            helperText={userData.email.error && userData.email.errorMessage}
          />
        </Grid>
        <Grid item md={8} mt={3}>
          <TextField
            variant="outlined"
            value={userData.password.value}
            hidden
            data-testid="Password"
            name="password"
            type="password"
            label="Password"
            onChange={handleTextChange}
            fullWidth
            required
            error={userData.password.error}
            helperText={
              userData.password.error && userData.password.errorMessage
            }
          />
        </Grid>
        <Grid item md={8} mt={3}>
          <TextField
            variant="outlined"
            hidden
            name="confirmPassword"
            type="password"
            value={userData.confirmPassword.value}
            label="Confirm Password"
            onChange={handleTextChange}
            fullWidth
            required
            error={userData.confirmPassword.error}
            helperText={
              userData.confirmPassword.error &&
              userData.confirmPassword.errorMessage
            }
          />
        </Grid>
        <Grid item mt={3} md={8}>
          <Button
            color="success"
            fullWidth
            variant="contained"
            disabled={
              !userData.email.value ||
              !userData.password.value ||
              !userData.confirmPassword.value
            }
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
