import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5001'

const getAllProducts = (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    const request = axios.get("/products")
    return request.then(response => response.data)
}

const getProduct = (token, id) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    const request = axios.get(`/products/${id}`)
    return request.then(response => response.data)
}

const removeProduct = (token, id) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    const request = axios.delete(`/products/${id}`)
    return request.then(response => response.data)
}

const createProduct = (token, newObject) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const request = axios.post("/products", newObject)
    return request.then(response => response.data)
}

const updateProduct = (token, id, newObject) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    const request = axios.put(`/products/${id}`, newObject)
    return request.then(response => response.data)
}

const booksService = {
    getAllProducts,
    getProduct,
    removeProduct,
    createProduct,
    updateProduct
}

export default booksService