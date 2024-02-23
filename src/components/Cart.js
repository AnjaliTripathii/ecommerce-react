import React from 'react';
import './Cart.css';


const Cart = ({ cart }) => {
  return (
    <div className='cart-container'>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, id) => (
            <li key={id}>
            <img className="cart-img" src={item.image} alt={item.title} />
              <p className='cart-title'>{item.title}</p>
              <p className='cart-des'>{item.description}</p>
            <p className='cart-amount'>Rs.{item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Cart
