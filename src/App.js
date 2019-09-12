import React, { Component } from "react";
import BarraTitulo from "./componentes/BarraTitulo";
import Highcharts, { dateFormat } from 'highcharts'
import moment from "moment"
import Grafica from './componentes/Grafica'

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
  
  renderFila = (registro) => {
    return (
      <tr key={registro[0]}>
        <td>{moment(registro[0]).format('LLLL')}</td>
        <td>{registro[1]}</td>
      </tr>
    )
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
              <Grafica registros{this.state.registros}/>
            </div>
            <div className="col s6">
              <table className="z-depth-2 hoverable">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Peso (Lbs)</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.registros.map(registro => (
                      this.renderFila(registro)
                    ))
                  }
                </tbody>
              </table>
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
