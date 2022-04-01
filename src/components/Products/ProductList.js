import React from 'react'
import ProductItem from './ProductItem'
import LoadingSpinner from '../UI/LoadingSpinner';
import './ProductList.css'

const ProductList = (props) => {
    if (props.items.length === 0) {
        return (
          <div className="center">
              <LoadingSpinner />
          </div>
        );
      }
      
    return (
        <ul className="product-list">
            {props.items.map(item => (
                <ProductItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    ratingCount={item.rating.count}
                    ratingRate={item.rating.rate}
                />
            ))}
        </ul>
    )
}

export default ProductList
