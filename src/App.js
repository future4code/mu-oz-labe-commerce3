import React from 'react';
import './App.css';
import Filter from './Components/Filter/Filter'
import Product from './Components/Products/Products'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
function App() {
  return (
    <div className="App">
      <Filter />
      <Product />
      <ShoppingCart />
   
    </div>
  );
}

export default App;
