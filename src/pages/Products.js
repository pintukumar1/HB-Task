import React, { useContext, useEffect } from 'react'
import ProductList from '../components/Products/ProductList';
import AppContext from '../context/app-context';

const Products = () => {
    const appCtx = useContext(AppContext)

    useEffect(() => {
        appCtx.fetchAll();
    }, [appCtx])

    return  <ProductList items={appCtx.products} />    
}

export default Products
