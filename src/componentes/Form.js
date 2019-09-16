import 'react-datepicker/dist/react-datepicker.min.css'
import React from 'react'
import './Form.css'
import swal from 'sweetalert'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)


export default class Form extends React.Component{
    
    //state = {
    //    fecha:moment(),
     //   peso:null
    //};
    state = {
        fecha: new Date(),
        peso: null
      };
    onSubmit = ()=>{
        const {fecha,peso} = this.state;

        console.log(fecha,peso);
        if (!peso || peso < 0){
            swal('Lectura invalida', 'El registro de peso debe ser valido','error')
        }
    };
    cambioFecha = fecha => {
        this.setState({fecha});
    };
    cambioPeso = evt =>{
    this.setState({
        peso:evt.target.value
    })
    };
    render(){
        return(
            <div className="row">
                <div className="form-container col s4 offset-s4 z-depth-4 cyan lighten-3">
                    <form>
                        <label htmlFor="fecha">
                        Fecha:
                        <DatePicker
                            locale = "es"
                            selected={this.state.fecha}
                            onChange={this.cambioFecha}
                        /> {/*<input type="date" name="fecha" id="fecha"/>*/}
                        </label>
                    <label htmlFor="peso">
                        Peso:
                        <input Type="text" 
                        name="peso" value={this.state.peso}
                        onChange={this.cambiarPeso} id="peso"/>
                      </label>
                        <input type="button" onClick={this.onSubmit} value="Agregar"/>
                        <input type="button" value="Cerrar"/>
                    </form>
                </div>
            </div>
        );
    }
}