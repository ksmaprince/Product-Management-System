import { Button, TableCell } from "@mui/material";
import React from "react";
import useProducts from "../../pages/product/useProducts";
import ConfirmationDialog from "../dialogs/ConfirmationDialog";
import ViewDetail from "../dialogs/ViewDetail";

const ProductDetail = ({ product, removeProduct, editProduct }) => {
  const {
    dialogOpen,
    viewDetailDialog,
    setDialogOpen,
    handleOpenDialog,
    setViewDetailDialog,
    handleViewDetailDialog,
    handleCloseViewDetail,
  } = useProducts();

  const deleteProduct = () => {
    removeProduct(product.id);
  };

  const handleEditProduct = () => {
    editProduct(product);
  };

  return (
    <>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.origin}</TableCell>
      <TableCell>{product.isInstock ? "In Stock" : "Out of Stock"}</TableCell>
      <TableCell>
        <Button
          onClick={handleViewDetailDialog}
          variant="outlined"
          color="primary"
        >
          View Detail
        </Button>
        <Button
          onClick={handleEditProduct}
          style={{ marginLeft: "10px" }}
          variant="outlined"
          color="primary"
        >
          Edit
        </Button>
        <Button
          style={{ marginLeft: "10px" }}
          onClick={handleOpenDialog}
          variant="outlined"
          color="error"
        >
          Delete
        </Button>
        <ConfirmationDialog
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          deleteProduct={deleteProduct}
        />
        <ViewDetail
          dialogOpen={viewDetailDialog}
          setDialogClose={setViewDetailDialog}
        />
      </TableCell>
    </>
  );
};

export default ProductDetail;
