import React from 'react';
import './filter.css'

export class Filter extends React.Component {
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
             <div className="filter">
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
       );
   }
}

export default Filter;
