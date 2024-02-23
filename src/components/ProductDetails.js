import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import './ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    const filterProducts = items.filter((product) => product.id == id);
    if (filterProducts.length > 0) {
      setProduct(filterProducts[0]);
    } else {
      
      console.error(`Product with id ${id} not found`);
      
    }
  }, [id]);
  return (
    <div className='container'>
      <div className="img">
        <img src={product.image} alt="" />
      </div>
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Rs.{product.price}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>

    </div>
  )
}

export default ProductDetails
