import React, { useEffect } from "react";
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
import constant from "../../utils/constant";
import useProducts from "./useProducts";
import { Widget, addResponseMessage, addUserMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import OpenAI from "../../components/openai/OpenAI";

const ProductList = () => {
  const {
    isOpen,
    setIsOpen,
    logoutDialog,
    setLogoutDialog,
    logoutApp,
    navigate,
    loadProducts,
    handleAddProduct,
    handleLogoutDialog,
    productList,
    deleteProduct,
    handleEditProduct,
    productData,
    setProductData,
    createNewProduct,
    editProduct,
    isEdit,
    productValidation,
    setProductValidation } = useProducts()

  useEffect(() => {
    if (localStorage.getItem(constant.KEY) === null) {
      navigate("/");
    } else {
      loadProducts();
    }
  }, []);

  const handleGenerate = async (prompt) => {
    try {
      const response = await OpenAI(prompt);
      return response;
    } catch (error) {
      // Handle error
      alert(error)
      console.log(error);
    }
  };

  const handleNewUserMessage = async (newMsg) => {
    const res = await handleGenerate(newMsg);
    addResponseMessage(res);
  };

  return (
    <Grid container className="productsContainer">
      <Grid mt={3} container display={"flex"} justifyContent="space-between">
        <Grid item>
          <Typography fontSize={20} color="green">
            Products
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={handleAddProduct}
            color="success"
            variant="contained"
          >
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
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productList
                .filter((pro) => pro.isInstock)
                .map((product) => (
                  <TableRow key={product.id}>
                    <ProductDetail
                      key={product.id}
                      product={product}
                      removeProduct={deleteProduct}
                      editProduct={handleEditProduct}
                    />
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Widget
        style={{ backgroundColor: "green" }}
        senderPlaceHolder="Send a message"
        title="Open AI"
        subtitle="Ask me whatever you want.."
        handleNewUserMessage={handleNewUserMessage}
      />

      <ProductForm
        open={isOpen}
        setIsOpen={setIsOpen}
        productData={productData}
        setProductData={setProductData}
        createNewProduct={createNewProduct}
        updateProduct={editProduct}
        isEdit={isEdit}
      />
      <LogoutDialog
        logoutDialog={logoutDialog}
        setLogoutDialog={setLogoutDialog}
        logoutApp={logoutApp}
      />
    </Grid>
  );
};

export default ProductList;
