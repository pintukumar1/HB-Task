import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button'
import Card from '../UI/Card'
import './ProductItem.css'

const ProductItem = (props) => {
    return (
        <li className="product-item">
            <Card>
                <div>
                <div className="product-item__image">
                        <img src={props.image} alt="api-img" />
                    </div>
                    <div className="product-item__info">
                        <h3>Price: ${props.price}</h3>
                    </div>
                    <Link to={`/products/${props.id}`}>
                        <Button className="center">
                            View Details
                        </Button>
                        <Button className="center">
                            Add to Cart
                        </Button>
                    </Link>
                </div>
            </Card>
        </li>
    )
}

export default ProductItem
