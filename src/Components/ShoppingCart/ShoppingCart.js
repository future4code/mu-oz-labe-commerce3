import React from 'react';
import ShoppingCartItem from '../../ShoppingCartItem/ShoppingCartItem';
import './shoppingcart.css'

export class ShoppingCart extends React.Component {
   render(){
       return (
        <div className="ShoppingCart">
          <h3>Carrinho: </h3>
            <div className="container-produtos">
                <ShoppingCartItem />
            </div>
        <p className="valor-total">Valor total: R$70,00</p>
       </div>
       );
   }
}

export default ShoppingCart;