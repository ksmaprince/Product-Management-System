import { useState } from "react";
import { useNavigate } from "react-router";
import constant from "../../utils/constant";
import productService from "../../servies/productService"

const useProducts = () => {

  const navigateTo = (path) => {
    navigate(path)
  }

  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [logoutDialog, setLogoutDialog] = useState(false);
  const [productList, setProductList] = useState([]);
  const [isEdit, setIsEdit] = useState(false)
  const navigate = useNavigate()
  const [productData, setProductData] = useState({
    id: "",
    name: "",
    price: "",
    origin: "",
    isInstock: false,
  });

  const {
    getAllProducts,
    getProduct,
    removeProduct,
    createProduct,
    updateProduct
  } = productService()

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  }

  const handleAddProduct = () => {
    setProductData({
      id: "",
      name: "",
      price: "",
      origin: "",
      isInstock: false,
    })
    setIsEdit(false)
    handleOpenModal()
  }

  const handleEditProduct = (p) => {
    setProductData(p)
    setIsEdit(true)
    handleOpenModal()
  }

  const handleLogoutDialog = () => {
    setLogoutDialog(true);
  }

  const logoutApp = () => {
    localStorage.clear()
    navigate("/")
  }

  const loadProducts = async () => {
    const res = await getAllProducts(localStorage.getItem(constant.KEY))
    if (res) {
      if (res.success) {
        setProductList(res.data)
      } else {
        alert(res.error)
      }
    }
  }

  const getProductById = async (id) => {
    const res = await getProduct(localStorage.getItem(constant.KEY), id)
    if (res) {
      if (res.success) {
        setProductData(res.data)
      } else {
        alert(res.error)
      }
    }
  }

  const createNewProduct = async (productData) => {
    const res = await createProduct(localStorage.getItem(constant.KEY), productData)
    if (res) {
      if (res.success) {
        loadProducts()
        handleCloseModal()
      }
    }
  }

  const editProduct = async (productData) => {
    const res = await updateProduct(localStorage.getItem(constant.KEY), productData.id, productData)
    if (res) {
      if (res.success) {
        loadProducts()
        handleCloseModal()
      }
    }
  }

  const deleteProduct = async (id) => {
    const res = await removeProduct(localStorage.getItem(constant.KEY), id)
    if (res) {
      console.log(res)
      if (res.success) {
        loadProducts()
      } else {
        alert(res.error)
      }
    }
  }

  return {
    isOpen,
    setIsOpen,
    dialogOpen,
    logoutDialog,
    logoutApp,
    handleLogoutDialog,
    setLogoutDialog,
    setDialogOpen,
    handleOpenModal,
    handleCloseModal,
    handleOpenDialog,
    logoutApp,
    navigateTo,
    navigate,
    loadProducts,
    handleAddProduct,
    handleLogoutDialog,
    productList,
    deleteProduct,
    handleEditProduct,
    productData,
    setProductData,
    getProductById,
    createNewProduct,
    editProduct,
    isEdit
  };
};

export default useProducts;
