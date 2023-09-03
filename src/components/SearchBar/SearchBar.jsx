import React, { useState, useContext } from 'react';

import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';
import fecthProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const { setProducts, setLoading } = useContext(AppContext);

  const heandleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const products = await fecthProducts(searchValue);
    
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return ( 
    <form className="search-bar" onSubmit={heandleSearch}>
      <input 
        type="search"
        value={searchValue}
        placeholder="Buscar produtos" 
        className="search__input"
        onChange={(e) => setSearchValue(e.target.value)}
        required 
      />

      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
