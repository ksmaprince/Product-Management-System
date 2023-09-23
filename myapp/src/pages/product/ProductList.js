import React from "react";
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
import { productList } from "../../utils/constant";
import ProductDetail from "../../components/product/ProductDetail";
import ProductForm from "../../components/product/ProductForm";
import useProducts from "./useProducts";
import LogoutDialog from "../../components/dialogs/LogoutDialog";

const ProductList = () => {
  const {
    isOpen,
    logoutDialog,
    setLogoutDialog,
    handleLogoutDialog,
    handleOpenModal,
    setIsOpen,
  } = useProducts();

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
                  <ProductDetail key={product.id} product={product} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <ProductForm open={isOpen} setIsOpen={setIsOpen} />
      <LogoutDialog
        logoutDialog={logoutDialog}
        setLogoutDialog={setLogoutDialog}
      />
    </Grid>
  );
};

export default ProductList;
