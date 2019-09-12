import React from 'react'
import './Form.css'

export default class Form extends React.Component{
    onSubmit = (evt)=>{
        evt.preventDefault()
        const fecha = evt.target.fecha.value
        const peso = evt.target.peso.value
        console.log(fecha,peso)
    }
    render(){
        return(
            <div className="row">
                <div className="form-container col s4 offset-s4 z-depth-4 cyan lighten-3">
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="fecha">
                        fecha:
                        <input type="date" name="fecha" id="fecha"/>
                        </label>
                    <label htmlFor="peso">
                        Peso:
                        <input Type="text" name="peso" id="peso"/>
                    </label>
                        <label/>
                        <input type="submit" value="Agregar"/>
                    </form>
                </div>
            </div>
        );
    }
}