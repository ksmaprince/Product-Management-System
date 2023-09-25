import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const ViewDetail = ({ dialogOpen, setDialogClose, product}) => {
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
            <Grid item>{product.name}</Grid>
            <Grid item style={{ color: "green" }}>
              Price:
            </Grid>
            <Grid item>{product.price}</Grid>
            <Grid item style={{ color: "green" }}>
              Origin:
            </Grid>
            <Grid item>{product.origin}</Grid>
            <Grid item style={{ color: "green" }}>Availability:</Grid>
            <Grid item>{product.isInstock?"Instock":"Out of stock"}</Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ViewDetail;
