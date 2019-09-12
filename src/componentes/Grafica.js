import React from 'react'
import Highcharts from "highcharts";

class Grafica extends React.Component {

    componentDidMount() {
        this.iniciarGrafica(this.props.registros)
    }
    componentWillReceiveProps(nextProps) {
        this.iniciarGrafica(nextProps.registros)
    }
    iniciarGrafica = (registros) => {
        Highcharts.chart("grafica", {
            title: {
                text: "Peso vs Fecha"
            },
            xAxis: {
                type: "datetime",
                startOnTick:true
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