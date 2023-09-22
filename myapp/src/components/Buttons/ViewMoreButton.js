import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const ViewMoreButton = ({product}) => {
    return (
        <Link to={`/products/${product.id}`}>
            <Button type='primary'>
                View More
            </Button>
        </Link>
    )
}

export default ViewMoreButton