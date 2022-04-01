import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/UI/Card'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import Button from '../components/UI/Button'
import AppContext from '../context/app-context'
import './ProductDetail.css'

const ProductDetail = () => {
    const appCtx = useContext(AppContext)
    const [product, setProduct] = useState({})
    const [rating, setRating] = useState({})
    const [loading, setLoading] = useState(false)

    const prodId = useParams().productid;

    const getProductDetail = () => {
        setLoading(true)
        axios.get(`https://fakestoreapi.com/products/${prodId}`)
            .then(res => {
                setProduct(res.data)
                setRating(res.data.rating)
                setLoading(false)
            })
    }

    useEffect(() => {
        getProductDetail();
    }, [])

    return (
        <React.Fragment>
            {loading && (
                <Card className="center">
                    <LoadingSpinner />
                </Card>
            )}
            {!loading && <Card className="product-detail-item__content">
                <div className="product-detail-item__image">
                    <img src={product.image} alt="api-img" />
                </div>
                <div className="product-detail-item__info">
                    <h4>Title: {product.title}</h4>
                    <h4>Price: ${product.price}</h4>
                    <h4>Rating rate: {rating.rate}</h4>
                    <h5>Category: {product.category}</h5>
                    <h5>Rating count: {rating.count}</h5>
                    <p>{product.description}</p>
                </div>
                <div>
                    <Button
                        onClick={() => {
                            appCtx.addToCart(product.id)
                        }} >
                        Add to Cart
                    </Button>
                </div>
            </Card>}
        </React.Fragment>
    )
}

export default ProductDetail
