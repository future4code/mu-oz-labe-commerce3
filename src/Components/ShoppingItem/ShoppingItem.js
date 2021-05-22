import React from 'react';
import './shoppingitem.css'

export class ShoppingItem extends React.Component {
   render(){
       return (
      <div className="Item">
            <div className="produto-escolido">
            <p>{this.props.quantidade}</p>
            <p>{this.props.produto}</p>
            <button>Remover</button>
            </div>    
      </div>
       );
   }
}

export default ShoppingItem;

