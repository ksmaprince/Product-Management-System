import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Modal,
  Paper,
  TextField,
} from "@mui/material";
import React from "react";
import useProducts from "../../pages/product/useProducts";
import "./../../pages/product/Product.css";

const ProductForm = ({ open, setIsOpen }) => {
  const { handleProductChange, productData } = useProducts();

  return (
    <Modal
      open={open}
      onClose={() => setIsOpen(false)}
      className="productFormModal"
    >
      <Paper style={{ padding: "20px" }}>
        <Grid item style={{color:"green"}}>New Product</Grid>
        <Grid item md={12} mt={5}>
          <TextField
            variant="outlined"
            value={productData.name}
            label="Name"
            name="name"
            onChange={handleProductChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item md={12} mt={2}>
          <TextField
            variant="outlined"
            value={productData.price}
            label="Price"
            name="price"
            onChange={handleProductChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item md={12} mt={2}>
          <TextField
            variant="outlined"
            value={productData.origin}
            label="Origin"
            name="origin"
            onChange={handleProductChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item md={12} mt={2}>
          <FormControlLabel
            required
            label="Instock"
            control={
              <Checkbox
                color="success"
                value={productData.isInstock}
                onChange={handleProductChange}
              />
            }
          />
        </Grid>
        <Grid item md={12} mt={3} style={{ flex: 1, textAlign: "center" }}>
          <Button color="success" variant="contained">
            Add Product
          </Button>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default ProductForm;
