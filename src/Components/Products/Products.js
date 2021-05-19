import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './products.css'

export class Product extends React.Component {
   render(){
       return (
 <div className="products">
     <div className="aparece-na-tela">
          <p className="parag-prod">Quantiddade de produtos: 1</p>
          <label>
            Ordenação: 
            <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </label>
     </div>
        <div className="container-post">
          <ProductCard
           urlImagem={"https://picsum.photos/400/201"}
           name={"Foguete"}
           value={"200$"}
          />
          <ProductCard urlImagem={"https://picsum.photos/400/201"}
           name={"Foguete"}
           value={"300$"}/>
           
          <ProductCard 
          urlImagem={"https://picsum.photos/400/201"}
          name={"Foguete"}
          value={"400$"}
          />
        </div>
 </div>
       );
   }
}

export default Product;