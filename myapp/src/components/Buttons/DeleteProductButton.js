import { Button } from 'antd'
import React from 'react'
import authService from '../../services/authService'

const DeleteProductButton = ({isbn, setBooks, books}) => {

    const deleteProduct = (id) => {
        
    }

    return (
        <Button type='primary' onClick={() => deleteProduct(id)}>
            Delete
        </Button>
    )
}

export default DeleteProductButton