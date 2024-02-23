import React from 'react';
import './ProductListing.css'

import { Link } from 'react-router-dom';

const ProductListing = ({items,addToCart}) => {
  return (
    <div className="container">
      {items.map((product, id) => (
        <div key={id} className="product-card">
          <Link to={`/productdetail/${product.id}`}><img className="product-image" src={product.image} alt={product.title} /></Link>
          <div className="product-details">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Rs.{product.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing
