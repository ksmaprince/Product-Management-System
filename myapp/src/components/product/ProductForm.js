import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Modal,
  Paper,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./../../pages/product/Product.css";

const ProductForm = ({ open, setIsOpen, createNewProduct }) => {

  const [productData, setProductData] = useState({
    id: "",
    name: "",
    price: "",
    origin: "",
    isInstock: false,
  });

  const handleProductChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    if(createNewProduct(productData)){
      setIsOpen(false)
    }else{
      alert("Add New Product Fail !!!")
    }
  }

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
          <Button color="success" variant="contained" onClick={addProduct}>
            Add Product
          </Button>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default ProductForm;
