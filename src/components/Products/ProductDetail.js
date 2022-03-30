import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button'
// import { Link } from 'react-router-dom'
import Card from '../UI/Card'

const ProductItem = (props) => {
    return (
        <li className="product-item">
            <Card className="product-item__content">
                <div>
                    <div className="product-item__image">
                        <img src={props.image} alt="api-img" />
                    </div>
                    <div className="product-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.price}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="product-item__info">
                        <h5>{props.ratingRate}</h5>
                        <h6>{props.ratingCount}</h6>
                    </div>
                    <Link to={`/products/${props.id}`}>
                        <Button>
                            View Details
                        </Button>
                    </Link>
                </div>
            </Card>
        </li>
    )
}

export default ProductItem
