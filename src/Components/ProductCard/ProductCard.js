import React from 'react';
import './productcard.css'

export class ProductCard extends React.Component {
   render(){
       return (
      <div className="card">
         <img src={this.props.urlImagem} alt={"Imagem"} />
            <div className="infor-product">
            <p>{this.props.name}</p>
            <p>{this.props.value}</p>
            <button>Adicionar ao carrinho</button>
            </div>    
      </div>
       );
   }
}

export default ProductCard;



/*Isso aqui é o design do card */

/* No App.js tem um exemplo de como fazer o card aparecer. (Linha 78 até 107) */