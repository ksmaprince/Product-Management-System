import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'


const EditProductButton = ({product}) => {
    return (
        <Link to={`/products/edit/${product.id}`}>
            <Button type='primary'>
                Edit
            </Button>
        </Link>
    )
}

export default EditProductButton