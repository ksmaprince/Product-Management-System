import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import "./Product.css";
import ProductDetail from "../../components/product/ProductDetail";
import ProductForm from "../../components/product/ProductForm";
import LogoutDialog from "../../components/dialogs/LogoutDialog";
import productService from "../../servies/productService"
import constant from "../../utils/constant";
import { useNavigate } from "react-router";

const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [logoutDialog, setLogoutDialog] = useState(false);
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate()
  
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  }

  const handleLogoutDialog = () => {
    setLogoutDialog(true);
  }

  const logoutApp = () => {
    localStorage.clear()
    navigate("/")
  }

  const loadProducts = async () => {
    const res = await productService.getAllProducts(localStorage.getItem(constant.KEY))
    if (res) {
      if (res.success) {
        setProductList(res.data)
      } else {
        alert(res.error)
      }
    }
  }

  const getProduct = async (id) => {
    const res = await productService.getProduct(localStorage.getItem(constant.KEY), id)
    if (res) {
      if (res.success) {
        
      } else {
        
      }
    }
  }

  const createNewProduct = async (productData) => {
    const res = await productService.createProduct(localStorage.getItem(constant.KEY), productData)
    if(res){
      if(res.success){
        loadProducts()
        return true
      }else{
        return false
      }
    }
    return false
  }

  const updateProduct = async (id, productData) => {
    const res = await productService.updateProduct(localStorage.getItem(constant.KEY), id, productData)
    if(res){
      if(res.success){
        loadProducts()
        return true
      }else{
        return false
      }
    }
    return false
  }

  const removeProduct = async (id) => {
    const res = await productService.removeProduct(localStorage.getItem(constant.KEY), id)
    if (res) {
      console.log(res)
      if (res.success) {
        loadProducts()
      }else{
        alert(res.error)
      }
    }
  }

  useEffect(() => {
    if (localStorage.getItem(constant.KEY) === null) {
      navigate("/")
    } else {
      loadProducts()
    }
  }, [])

  return (
    <Grid container className="productsContainer">
      <Grid mt={3} container display={"flex"} justifyContent="space-between">
        <Grid item>
          <Typography fontSize={20} color="green">
            Products
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={handleOpenModal} color="success" variant="contained">
            Add New
          </Button>
          <Button
            style={{ marginLeft: "10px" }}
            color="info"
            variant="contained"
            onClick={handleLogoutDialog}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
      <Grid container mt={4}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Origin</TableCell>
                <TableCell>Instock</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productList.map((product) => (
                <TableRow key={product.id}>
                  <ProductDetail key={product.id} product={product} removeProduct={removeProduct} editProduct = {handleOpenModal} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <ProductForm open={isOpen} setIsOpen={setIsOpen} createNewProduct={createNewProduct} />
      <LogoutDialog
        logoutDialog={logoutDialog}
        setLogoutDialog={setLogoutDialog}
        logoutApp={logoutApp}
      />
    </Grid>
  );
};

export default ProductList;
