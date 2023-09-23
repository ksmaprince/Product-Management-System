import { useState } from "react";
import { useNavigate } from "react-router";

const useProducts = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [logoutDialog, setLogoutDialog] = useState(false);
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

  const navigateTo = (path) => {
    navigate(path)
  }

  return {
    isOpen,
    dialogOpen,
    logoutDialog,
    handleLogoutDialog,
    setLogoutDialog,
    setIsOpen,
    setDialogOpen,
    handleOpenModal,
    handleCloseModal,
    handleOpenDialog,
    logoutApp,
    navigateTo
  };
};

export default useProducts;
