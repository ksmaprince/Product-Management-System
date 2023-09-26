import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const ConfirmationDialog = ({ dialogOpen, setDialogOpen, deleteProduct }) => {
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const handleYesConfirmDialog = () => {
    setDialogOpen(false);
    deleteProduct();
  };
  return (
    <Dialog open={dialogOpen} onClose={handleCloseDialog}>
      <DialogTitle></DialogTitle>

      <DialogContent>
        <DialogContentText>
          Are you sure to delete this product?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Cancel</Button>
        <Button onClick={handleYesConfirmDialog}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
