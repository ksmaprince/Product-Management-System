import { Button, TableCell } from "@mui/material";
import React from "react";
import useProducts from "../../pages/product/useProducts";
import ConfirmationDialog from "../dialogs/ConfirmationDialog";

const ProductDetail = ({ product }) => {
  const { dialogOpen, setDialogOpen, handleOpenDialog } = useProducts();
  return (
    <>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.origin}</TableCell>
      <TableCell>{product.instock ? "In Stock" : "Out of Stock"}</TableCell>
      <TableCell>
        <Button onClick={handleOpenDialog} variant="outlined" color="error">
          Delete
        </Button>
        <Button
          style={{ marginLeft: "10px" }}
          variant="outlined"
          color="primary"
        >
          Edit
        </Button>
        <ConfirmationDialog
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
        />
      </TableCell>
    </>
  );
};

export default ProductDetail;
