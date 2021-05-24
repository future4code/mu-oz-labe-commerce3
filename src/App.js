import React from 'react';
import './App.css';
import meteorito from './img/Meteorito.jpeg';
import foguete from './img/Foguete-Espacial.jpeg';
import robo from './img/Robo-Humanoide.jpeg';
import satelite from './img/Satelite.jpeg';
import traje from './img/Traje-Espacial.jpeg';
import viagem from './img/Viagem-para-lua.jpeg';

const produtos = [{
  id: 1,
  name: "Meteorito",
  value: 100,
  imageUrl: meteorito},
{
  id: 2,
  name: "Foguete",
  value: 200,
  imageUrl: foguete},
{
  id: 3,
  name: "Robo Humanóide",
  value: 300,
  imageUrl: robo},
{
  id: 4,
  name: "Satélite",
  value: 400,
  imageUrl: satelite},
{
  id: 5,
  name: "Traje Espacial",
  value: 500,
  imageUrl: traje},
{
  id: 6,
  name: "Viagem Para a Lua",
  value: 600,
  imageUrl: viagem},  
]

export class App extends React.Component{
  state = {
    valormin: 100, 
    valormax: 300,
    nomeproduto: "",
    value: 'crescente',
    carrinhoLista: [],
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

      
      adicionarListaCarrinho = (produto) => {
        const produtoDoCarrinho = this.state.carrinhoLista.find((produtoDoCarrinho) => {
         if (produtoDoCarrinho.id === produto.id) {
            return true;
        }
          return false;
        });
  
        if (!produtoDoCarrinho) {
          const novoProdutoDoCarrinho = {
            ...produto,
            quantidade: 1
          };
    
          const carrinhoNovo = [...this.state.carrinhoLista, novoProdutoDoCarrinho];
        
          this.setState({ carrinhoLista: carrinhoNovo });
        } else {
          const carrinhoNovo = this.state.carrinhoLista.map((produtoDoCarrinho) => {
            if (produtoDoCarrinho.id === produto.id) {
              return {
                ...produtoDoCarrinho,
                quantidade: produtoDoCarrinho.quantidade + 1
              };
            } else {
              return produtoDoCarrinho;
            }
          });
          this.setState({ carrinhoLista: carrinhoNovo });
          // console.log(this.state.carrinhoLista)
        }
        
        }

        removerProduto = (produto) => {
          const produtoDoCarrinho = this.state.carrinhoLista.find((produtoDoCarrinho) => {
            if (produtoDoCarrinho.id === produto.id) {
              return true;
            }
             return false;
          });
     
          if (produtoDoCarrinho) {
             
            const carrinhoNovo = this.state.carrinhoLista.map((produtoDoCarrinho) => {
              if (produtoDoCarrinho.id === produto.id) {
                return {
                  ...produtoDoCarrinho,
                  quantidade: produtoDoCarrinho.quantidade - 1
                };
              } else {
                return produtoDoCarrinho;
              }
             });
             
             this.setState({ carrinhoLista: carrinhoNovo });
             
          // console.log(this.state.carrinhoLista)
          }
          // const arrayTeste = [...this.state.carrinhoLista]
          // const teste = (produto, i) => {
          //   if (produto.quantidade === 0){
          //     return arrayTeste.splice(i)
              
          //   }
          //   const semZero = teste
          //   this.setState({ carrinhoLista: arrayTeste });
          // }
          // const semZero = carrinhoLista    
               
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
       <div key={i} className="card">
       <img src={data.imageUrl} alt={"Imagem"} />
          <div className="infor-product">
          <p>{data.name}</p>
          <p>{data.value}</p>
          <button onClick={() => this.adicionarListaCarrinho(data)}>Adicionar ao carrinho</button>
          </div>    
    </div>
    ))

    

    const produtosCarrinho = this.state.carrinhoLista.map((produto, i) => (
      <div key={i} className="item">
          <div className="produto-escolhido">
            <p>{produto.quantidade}x</p>
            <p>{produto.name}</p>
            <p>R${produto.value * produto.quantidade}</p>
            <button onClick={() => this.removerProduto(produto)}> Remover </button>
          </div> 
        </div>

    ))

    const total = this.state.carrinhoLista.reduce(
      (valorAcumulado, produtoCarrinho) => {
        const valorProduto = produtoCarrinho.value * produtoCarrinho.quantidade;

        return valorAcumulado + valorProduto;
      },
      0
    );

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
        <h3>Carrinho:</h3>

            {produtosCarrinho}

          <p>Valor Total: R$ {total}</p> 
       </div>
     </div>
  )}
}
export default App;
  