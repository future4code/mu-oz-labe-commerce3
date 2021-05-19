import React from 'react';
import './App.css';
import ProductCard from './Components/ProductCard/ProductCard';

const produtos = [{
  id: 1,
  name: "Produto 1",
  value: 100,
  imageUrl: "https://picsum.photos/400/201"},
{
  id: 2,
  name: "Produto 2",
  value: 200,
  imageUrl: "https://picsum.photos/400/201"},
{
  id: 3,
  name: "Produto 3",
  value: 300,
  imageUrl: "https://picsum.photos/400/201"
}]

export class App extends React.Component{
  state = {
    valormin: 100, 
    valormax: 1000,
    nomeproduto: "Produto"
    }
      onChangeMin = (e) => {
          this.setState({ valormin: e.target.value})
      }
      onChangeMax = (e) => {
          this.setState({ valormax: e.target.value})
      }
      onChangeNome = (e) => {
          this.setState({ nomeproduto: e.target.value})
      }
      
      
  render(){
     return (
    <div className="App">
        <div className= "Container-Filtro">  
        <h3>Filtros:</h3>
        <p>Valor minimo:</p>
  
        <input type="Number" 
        value={this.state.valormin}
        onChange={this.onChangeMin}
        />
  
        <p>Valor maximo</p>
        <input type="Number" 
        value={this.state.valormax} 
        onChange={this.onChangeMax}
        />
  
        <p>Busca por nome:</p>
        <input type="texto"
        value={this.state.nomeproduto}
        onChange={this.onChangeNome}
        />

        <button>Pesquisar</button>
       </div>

      <div className="Container-Produtos">
        <div className="Aparece-NaTela">
       <p>Quantiddade de produtos: 1</p>
          <label>
            Ordenação: 
            <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </label>
         </div>
         <div className="container-posts">
           <ProductCard 
            name = "Projeto"
            value = "200$"
            urlImagem = "https://picsum.photos/400/201"
           />
           <ProductCard 
            name = "Projeto"
            value = "200$"
            urlImagem = "https://picsum.photos/400/201"
           />
           <ProductCard 
            name = "Projeto"
            value = "200$"
            urlImagem = "https://picsum.photos/400/201"
           />
           <ProductCard 
            name = "Projeto"
            value = "200$"
            urlImagem = "https://picsum.photos/400/201"
           />
           <ProductCard 
            name = "Projeto"
            value = "200$"
            urlImagem = "https://picsum.photos/400/201"
           />
           <ProductCard 
            name = "Projeto"
            value = "200$"
            urlImagem = "https://picsum.photos/400/201"
           />
         </div>
       </div>

       <div className="Container-ShoppingCart">
          
       </div>

     </div>
         );
     }
  }
  export default App;
  

  /* Como vocês vão ter de adicionar uma div contendo quantos produtos foram adicionados e etc.
O terceiro quadrado em branco, que seria o de shopping "Container-ShoppingCart" ele também vai 
ficar dentro do App.js. Então, a logica de adicionar o produto ali no "Container-ShoppingCart"
vai ser feita dentro do App.js. Pois no App.js contem o container dos produtos!. */