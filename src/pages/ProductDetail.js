import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/UI/Card'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import './ProductDetail.css'

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const [rating, setRating] = useState({})
    const [loading, setLoading] = useState(false)

    const prodId = useParams().productid;

    const getProductDetail = useCallback(() => {
        setLoading(true)
        axios.get(`https://fakestoreapi.com/products/${prodId}`)
            .then(res => {
                setProduct(res.data)
                setLoading(false)
                setRating(res.data.rating)
            }).catch(err => {
                console.log(err)
            })
    }, [prodId])

    useEffect(() => {
        getProductDetail()
    }, [getProductDetail])

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
                    <h5>Rating count: {rating.count}</h5>
                    <p>{product.description}</p>
                </div>
            </Card>}
        </React.Fragment>


    )
}

export default ProductDetail
