import axios from 'axios'
const baseUrl = 'http://localhost:5001/products'

const getAllProducts = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getProduct = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const removeProduct = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request
}

const createProduct = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const updateProduct = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
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