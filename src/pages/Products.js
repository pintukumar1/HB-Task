import React, { useContext } from 'react'
import ProductList from '../components/Products/ProductList';
import AppContext from '../context/app-context';
import SearchBar from '../components/SearchBar/SearchBar';
import Fuse from "fuse.js"
import LoadingSpinner from '../components/UI/LoadingSpinner';

const Products = () => {
    const appCtx = useContext(AppContext)

    const fuse  = new Fuse(appCtx.products, {
        keys: ["title", "description", "category"]
    })
    
    const query = appCtx.currentQuery
    const result = fuse.search(query)

    const productResults = query ? result.map(productResult => productResult.item) : appCtx.products

    if(appCtx.products.length === 0) {
        return <LoadingSpinner />
    }
 
    return (
        <div>
            <SearchBar />
            <ProductList items={productResults} />
        </div>
    )
}

export default Products
