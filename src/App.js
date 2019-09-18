import React, { Component } from "react";
import BarraTitulo from "./componentes/BarraTitulo"
import moment from "moment";
import Grafica from './componentes/Grafica';
import Tabla from "./componentes/Tabla";
import Form from "./componentes/Form"

// esto trae una array alaeatorio cada vez qye se carga la pagina
// [1, 2, 3, 4, 5, 6, 7].map(dia =>
// [+moment().add(dia, 'days'), Math.random() * 200])
moment.locale('es')

class App extends Component {
  state = {
    registros: [],
    modal: false

  };
  //onCrearRegistro = ()=>{
  //  const nuevoregistro = [+moment(),Math.random() * 200] 
  // this.setState({
  //  registros: [...this.state.registros,nuevoregistro]
  //})
  //}

  aceptarRegistro = ({ fecha, peso }) => {
    console.log(fecha, peso)
    const nuevoregistro = [+fecha, +peso]
    console.log(nuevoregistro)
    this.setState((prevState, props) => ({
      registros: [...prevState.registros, nuevoregistro]
    }));
  };
  onCerrarForm = ()=>{
    this.setState({
      modal:false
    })
  }

  render() {
    const btnAdd = {
      position: "absolute",
      top: "80%",
      right: "10%"
    }

    return (
      <div>
        <Form
          visible={this.state.modal} onAceptar={this.aceptarRegistro} onCerrar={this.onCerrarForm}
        />
        <BarraTitulo />
        <main>
          <div className="valign-wrapper">
            <h3>Registro Diario de Peso</h3>
          </div>
          <div className="row">
            <div className="col l6 m12 s12">
              <Grafica registros={this.state.registros} />
            </div>
            <div className="col l6 m12 s12">
              <Tabla registros={this.state.registros} />
            </div>
          </div>
          <a className="btn-floating btn-large waves-effect waves-light red"
            style={btnAdd}
            onClick={() => this.setState({ modal: true })}
          >
            <i className="material-icons">add</i></a>
        </main>

      </div>
    );
  }

}

export default App;
