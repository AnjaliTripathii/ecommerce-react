import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { items } from './Data';

const Navbar = ({setData,searchTerm,setSearchTerm,cartCount}) => {

const filterByCategory = (category)=>{
  
  const filteredItems = items.filter((product) => product.category === category);
   
    setData(filteredItems);
}

const filterByPrice = (category,minPrice,maxPrice)=>{
  
  const filteredItems = items.filter(
    (product) =>
      parseInt(product.price.replace(',', '')) >= minPrice &&
      parseInt(product.price.replace(',', '')) <= maxPrice
  );

  setData(filteredItems);
}

  return (
    <>
      <header className='nav'>
        <div className="navbar">
          <Link to={'/'} className="brand">E-Cart</Link>
          <div className="search">
            <input type="text" placeholder='Search Product' value={searchTerm} 
    onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <Link to={'/cart'} className="cart">cart ({cartCount})</Link>
        </div>
        <div className="navbar-wrapper">
        <div onClick={()=>setData(items)} className="item">No Filter</div>
          <div onClick={()=>filterByCategory('Furniture')} className="item">Furniture</div>
          <div onClick={()=>filterByCategory('Clothing')} className="item">Clothing</div>
          <div onClick={()=>filterByCategory('Cosmetic')} className="item">Beauty</div>
          <div onClick={()=>filterByPrice('',0,1000)} className="item">under 1000</div>
          <div onClick={()=>filterByPrice('',1000,20000)} className="item">1000-20,000</div>
          <div onClick={()=>filterByPrice('',20000,Infinity)} className="item">20,000 and above</div>
        </div>
      </header>
    </>
  )
}

export default Navbar
