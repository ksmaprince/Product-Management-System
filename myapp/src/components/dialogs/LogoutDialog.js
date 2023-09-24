import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";

const LogoutDialog = ({ logoutDialog, setLogoutDialog, logoutApp }) => {

  const handleCloseDialog = () => {
    setLogoutDialog(false);
  };

  const handleYesLogout = () => {
    setLogoutDialog(false)
    logoutApp()
  }
  return (
    <Dialog open={logoutDialog} onClose={handleCloseDialog}>
      <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleYesLogout}>Yes</Button>
        </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
