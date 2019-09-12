import React from 'react'
import Highcharts from "highcharts";

class Grafica extends React.Component {

    componentDidMount() {
        this.iniciarGrafica(this.props.registros)
    }
    iniciarGrafica = (registros) => {
        Highcharts.chart("grafica", {
            title: {
                text: "Mi Registro de Peso"
            },
            xAxis: {
                type: "datetime"
            },
            series: [
                {
                    name: "test",
                    data: registros
                }
            ]
        });
    }
    render() {
        return (
            <div id="grafica"></div>
        );
    }
}
export default Grafica