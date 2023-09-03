import React, { useContext } from 'react';
import './ProductCard.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';

import AppContext from '../../context/AppContext';

function ProductCard({ data }) {

  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAdCart = () => {
    setCartItems([ ...cartItems, data ]);
  };

  return ( 
    <section className="product-card">
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="card__image" />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button 
        type="button" 
        className="button__add-cart"
        onClick={handleAdCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;
