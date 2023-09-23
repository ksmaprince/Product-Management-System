import { useState } from "react";

const useProducts = () => {
  const [productList, setProductList] = useState([]);
  const [productData, setProductData] = useState({
    id: "",
    name: "",
    price: "",
    origin: "",
    isInstock: false,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen,setDialogOpen] = useState(false);
  const [logoutDialog,setLogoutDialog] = useState(false);

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

  const handleProductChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  return {
    productList,
    isOpen,
    productData,
    dialogOpen,
    logoutDialog,
    handleLogoutDialog,
    setLogoutDialog,
    setIsOpen,
    setDialogOpen,
    handleOpenModal,
    handleProductChange,
    handleCloseModal,
    handleOpenDialog
  };
};

export default useProducts;
