import React from 'react';
import './shoppingcartitem.css'

export class ShoppingCartItem extends React.Component {
   render(){
       return (
    <div className="guarda-produtos">
        <div className="produtos">
            <p>1x</p>
            <p>Produto 4</p>
            <button>Remover</button>
        </div>
        <div className="produtos">
            <p>1x</p>
            <p>Produto 4</p>
            <button>Remover</button>
         </div>
    </div>
       );
   }
}

export default ShoppingCartItem;