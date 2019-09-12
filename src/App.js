import React, { Component } from "react";
import BarraTitulo from "./componentes/BarraTitulo";
import Highcharts from 'highcharts'
import moment from "moment"

class App extends Component {
  componentDidMount (){
    console.log(+moment())
    const data = [
    ["lunes",3],["martes",8],["miercoles",3],["jueves",2],["viernes",7]
    ]

    const fechas = [1,2,3,4,5,6,7].map(dia =>
      [+moment().add(dia,'days'),Math.random()*200]
      )
      
      console.log(fechas)

    Highcharts.chart('grafico',{
      title:{
        text:"Mi Registro de Peso"
      },
      xAxis:{
        type:"category"
      },
      series:[
        {
          name:"test",
          data:fechas
        }
      ]
    })
  }
  render() {
    return (
      <div>
      <BarraTitulo/>
      <div id="grafico"></div>
      <button className="btn">Click me</button>
      Control de Peso
      </div>
    );
  }
  
}

export default App;
