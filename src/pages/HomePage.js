import React, { useState, useEffect, useContext } from 'react';
import { fetchProducts } from '../api/api';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log(fetchProducts());
    fetchProducts().then(setProducts);
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const divStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
  };


  const pstyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
  };

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate(`/products/${product.id}`)
  };

  return (
    <>
      <div className='serach-data'>
        <label></label>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

      </div>
      <div className='container'>
        <div className='row'>
          {filteredProducts.map(product => (
            <div key={product.id} className='col-md-4 shoping'>
              <Link to={`/products/${product.id}`}>
              <div className='data-shopping'>
                <img src={product.imageUrl} alt='Card image cap' />
                <div className='shopping-content'>
                  <h2 dangerouslySetInnerHTML={{ __html: product.title }}></h2>
                  <h6 >Price: {product.price}</h6>
                  <h4 className='discounted-price'>Discounted Price: {product.discountedPrice}</h4>
                  <p style={pstyle} dangerouslySetInnerHTML={{ __html: product.description || 'N/A' }}></p>
                  <Link to={`/products/${product.id}`}><button className='textCenter'>View Product</button></Link>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
