import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const List = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
    fetchProducts();
  }, []);
const fetchProducts = () => {
    axios
      .get('https://my-json-server.typicode.com/kshitijaChilbule1/demo/restaurant')
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
return (
    <div>
      <h1>Our Restaurants</h1>
      <div className='item-container'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <h3>{product.name}</h3>
				<p>{product.rating}</p>
				<p>{product.email}</p>
				<p>{product.address}</p>
            <Link to={`/product/${product.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default List;