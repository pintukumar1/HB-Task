import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../components/UI/Card'
import './ProductDetail.css'

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const [rating,setRating] = useState({})

    const prodId = useParams().productid;

    const getProductDetail = () => {
        axios.get(`https://fakestoreapi.com/products/${prodId}`)
            .then(res => {
                setProduct(res.data)
                setRating(res.data.rating)
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getProductDetail()
    }, [])

    return (
        <Card className="product-detail-item__content">
                <div className="product-detail-item__image">
                    <img src={product.image} alt="api-img" />
                </div>
                <div className="product-detail-item__info">
                    <h3>Title: {product.title}</h3>
                    <h3>Price: ${product.price}</h3>
                    <h4>Rating rate: {rating.rate}</h4>
                    <h5>Rating count: {rating.count}</h5>
                    <p>{product.description}</p>
                </div>
        </Card>
    )
}

export default ProductDetail
