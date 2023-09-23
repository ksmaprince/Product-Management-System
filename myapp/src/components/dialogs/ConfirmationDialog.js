import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const ConfirmationDialog = ({ dialogOpen, setDialogOpen }) => {
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <Dialog open={dialogOpen} onClose={handleCloseDialog}>
      <DialogTitle></DialogTitle>
      <Dialog open={dialogOpen}>
        <DialogContent>
          <DialogContentText>
            Are you sure to delete this product?
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

export default ConfirmationDialog;
