import React, { useContext } from 'react';
import { fetchProducts } from '../api/api';

import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Header() {

  const { cartItems } = useContext(CartContext);
  console.log("cartItems", cartItems.length)

  const navigate = useNavigate()

  const handleform = () => {
    navigate('/cart')
  }

  //   const [products, setProducts] = useState([]);
  //  const [searchTerm, setSearchTerm] = useState('');

  //   useEffect(() => {
  //     console.log(fetchProducts());
  //     fetchProducts().then(setProducts);
  //   }, []);

  //   const filteredProducts = products.filter(product =>
  //     product.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  // const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 50;
  //     if (isScrolled !== scrolled) {
  //       setScrolled(isScrolled);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrolled]);

  return (
    <div className='container-fluid'  style={{padding:0}}>
        <div className='row'>
          <div className='col-md-12'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/">
                <span id="logo">CRA</span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">Home </a>
                  </li>
                  <li className="nav-item">
                  <Link to={`/contact`} className="nav-link">Contact</Link>
                  </li>

                </ul>

                <span id="home" onClick={handleform}>
  <i className="bi bi-cart">
    <sup>{cartItems?.length}</sup>
  </i>
</span>

              </div>
            </nav>
          </div>
        </div>
      </div>


  );
}

export default Header;
