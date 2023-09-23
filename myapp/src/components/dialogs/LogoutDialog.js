import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from "@mui/material";
  import React from "react";
  
  const LogoutDialog = ({ logoutDialog, setLogoutDialog }) => {
    const handleCloseDialog = () => {
        setLogoutDialog(false);
    };
    return (
      <Dialog open={logoutDialog} onClose={handleCloseDialog}>
        <DialogTitle></DialogTitle>
        <Dialog open={logoutDialog}>
          <DialogContent>
            <DialogContentText>
              Are you sure to logout?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button>Yes</Button>
          </DialogActions>
        </Dialog>
      </Dialog>
    );
  };
  
  export default LogoutDialog;
  