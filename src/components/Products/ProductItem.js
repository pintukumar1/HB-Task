import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../context/app-context'
import Button from '../UI/Button'
import Card from '../UI/Card'
import './ProductItem.css'
import { useNavigate } from 'react-router-dom'

const ProductItem = (props) => {
    const appCtx = useContext(AppContext);
    const navigate = useNavigate();
    return (
        <li className="product-item">
            <Card className="product-item__content">
                <div>
                    <div className="product-item__image">
                        <img src={props.image} alt="api-img" />
                    </div>
                    <div className="product-item__info">
                        <p>{props.title}</p>
                        <h3>Price: ${props.price}</h3>
                    </div>
                    <Link to={`/products/${props.id}`}>
                        <Button style={{ margin: "12px" }}>
                            View Details
                        </Button>
                    </Link>
                    <Button
                        onClick={() => {
                            appCtx.addToCart(props.id)
                        }} >
                        Add to Cart
                    </Button>

                </div>
            </Card>
        </li>
    )
}

export default ProductItem
