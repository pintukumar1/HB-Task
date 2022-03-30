import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductList from '../components/Products/ProductList';

const Products = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async() =>
        await axios.get("https://fakestoreapi.com/products")
            .then(res => {
                const data = res.data
                console.log(data);
                setProducts(data)
            })

    useEffect(() => {
        getProducts();
    }, [])

    return  <ProductList items={products} />    
}

export default Products
