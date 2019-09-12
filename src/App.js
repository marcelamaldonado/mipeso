import React, { Component } from "react";
import BarraTitulo from "./componentes/BarraTitulo";
import Highcharts, { dateFormat } from 'highcharts';
import moment from "moment";
import Grafica from './componentes/Grafica';
import Tabla from "./componentes/Tabla";

moment.locale('es')
class App extends Component {
  state = {
    registros: [1, 2, 3, 4, 5, 6, 7].map(dia =>
      [+moment().add(dia, 'days'), Math.random() * 200]
    )
  }
  componentDidMount() {
      //cuando el componente se monta en el DOM se ejecuta este metodo
  }
  
  
  render() {
    return (
      <div>
    <BarraTitulo />
        <main>
          <div className="valign-wrapper">
            <h3>Registro Diario de Peso</h3>
          </div>
          <div className="row">
            <div className="col s6">
              <Grafica registros = {this.state.registros}/>
            </div>
            <div className="col s6">
              <Tabla registros = {this.state.registros}/>
            </div>

          </div>
        </main>
        <button className="btn">Click me</button>
        Control de Peso
      </div>
    );
  }

}

export default App;
