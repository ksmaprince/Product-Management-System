import { Button, TableCell } from "@mui/material";
import React from "react";
import useProducts from "../../pages/product/useProducts";
import ConfirmationDialog from "../dialogs/ConfirmationDialog";

const ProductDetail = ({ product, removeProduct, editProduct }) => {
  const { dialogOpen, setDialogOpen, handleOpenDialog } = useProducts();

  const deleteProduct = () => {
    removeProduct(product.id)
  }

  const handleEditProduct = () => {
    editProduct(product)
  }

  return (
    <>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.origin}</TableCell>
      <TableCell>{product.isInstock ? "In Stock" : "Out of Stock"}</TableCell>
      <TableCell>
        <Button onClick={handleOpenDialog} variant="outlined" color="error">
          Delete
        </Button>
        <Button
          onClick={handleEditProduct}
          style={{ marginLeft: "10px" }}
          variant="outlined"
          color="primary"
        >
          Edit
        </Button>
        <ConfirmationDialog
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          deleteProduct={deleteProduct}
        />
      </TableCell>
    </>
  );
};

export default ProductDetail;
