import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const ViewDetail = ({ dialogOpen, setViewDetailDialog }) => {
  return (
    <Dialog open={dialogOpen} onClose={() => setViewDetailDialog(false)}>
      <DialogTitle style={{ color: "green" }}>Product Detail</DialogTitle>
      <Dialog open={dialogOpen}>
        <DialogContent>
          <DialogContentText>
            {/* <Grid container> */}
              <Grid item md={12}>
                Name: Iphone
              </Grid>
              <Grid item md={12}>
                Price:
              </Grid>
              <Grid item md={12}>
                Origin:
              </Grid>
              <Grid item md={12}>
                Instock:
              </Grid>
            {/* </Grid> */}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
};

export default ViewDetail;
