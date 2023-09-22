import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const CreateProductButton = () => {
    return (
        <Link to='/products/create'>
            <Button type='primary'>
                Add New
            </Button>
        </Link>
    )
}

export default CreateBookButton