import React from 'react';
import './App.css';
import ProductCard from './Components/ProductCard/ProductCard';
import ShoppingItem from './Components/ShoppingItem/ShoppingItem';

const produtos = [{
  id: 1,
  name: "Produto 1",
  value: 100,
  imageUrl: "https://picsum.photos/400/201"},
{
  id: 2,
  name: "Produto 2",
  value: 200,
  imageUrl: "https://picsum.photos/400/202"},
{
  id: 3,
  name: "Produto 3",
  value: 300,
  imageUrl: "https://picsum.photos/400/203"},
{
  id: 4,
  name: "Produto 4",
  value: 400,
  imageUrl: "https://picsum.photos/400/204"},
{
  id: 5,
  name: "Produto 5",
  value: 500,
  imageUrl: "https://picsum.photos/400/205"},
{
  id: 6,
  name: "Produto 6",
  value: 600,
  imageUrl: "https://picsum.photos/400/206"},  
]

export class App extends React.Component{
  state = {
    valormin: 100, 
    valormax: 300,
    nomeproduto: "Produto",
    value: 'crescente',
    }
    // Aqui Handle o change dos filtros
      onChangeMin = (e) => {
          this.setState({ valormin: e.target.value})
      }
      onChangeMax = (e) => {
          this.setState({ valormax: e.target.value})
      }
      onChangeNome = (e) => {
          this.setState({ nomeproduto: e.target.value})
      }

      // Aqui Handle os das ordens (Crescente ou Decrescente)
      handleChangeDaOrdem = (e) => {
        this.setState({value: e.target.value})
      }

  render(){

    // Logica do filtro 
    const listaFiltradaValue = produtos.filter((product) => {
        if((this.state.valormin <= product.value)&&
          (this.state.valormax >= product.value)&&
          (product.name.includes(this.state.nomeproduto)) ){
           return true
        } 
    })

   // Logica da ordem em que irá aparecer na tela
    const guardaEstadoDoValue = this.state.value
    const ordem = listaFiltradaValue.sort(function(a,b){
        if (guardaEstadoDoValue === 'crescente') {
          return a.value - b.value
        } else {
          return b.value - a.value
        }
    })

    // Map que fará com o que os produtos apareçam na tela
    const listaDeComponentes = ordem.map((data, i) => (
      <ProductCard key={i}
        name = {data.name}
        value = {data.value}
        urlImagem = {data.imageUrl}
       /> 
     ))

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
       </div>

      <div className="Container-Produtos">
        <div className="Aparece-NaTela">
  
       <p>Quantiddade de produtos: {listaDeComponentes.length}</p> 

          <label>
            Ordenação: 

            <select value={this.state.value} onChange={this.handleChangeDaOrdem}> 

              <option value="crescente">Crescente</option>
              <option value="decrescente">Decrescente</option>
            </select>
          </label>
         </div>
         <div className="container-posts">

             {listaDeComponentes}

         </div>
       </div>

       <div className="Container-ShoppingCart">
         <h3>Carrinho</h3>
         
       </div>

     </div>
         );
     }
  }
  export default App;
  