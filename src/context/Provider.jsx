import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState();

  const value = {
    products,
    setProducts,
    loading, 
    setLoading,
    cartItems, 
    setCartItems,
    isCartVisible, 
    setIsCartVisible
  };

  return ( 
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
