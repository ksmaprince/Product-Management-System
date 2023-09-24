import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const ViewDetail = ({ dialogOpen, setDialogClose }) => {
  const handleCloseDialog = () => {
    setDialogClose(false);
  };

  return (
    <Dialog open={dialogOpen} onClose={handleCloseDialog}>
      <DialogTitle style={{ color: "green" }}>Product Detail</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Grid
            container
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gridTemplateRows="1fr 1fr"
            gap="10px"
          >
            <Grid item style={{ color: "green" }}>
              Name:
            </Grid>
            <Grid item>Iphone</Grid>
            <Grid item style={{ color: "green" }}>
              Price:
            </Grid>
            <Grid item>1200</Grid>
            <Grid item style={{ color: "green" }}>
              Origin:
            </Grid>
            <Grid item>Apple</Grid>
            <Grid item style={{ color: "green" }}>Availability:</Grid>
            <Grid item>Instock</Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ViewDetail;
