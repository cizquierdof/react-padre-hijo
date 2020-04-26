import React, { Component } from 'react'

export class Hijo extends Component {


    render() {

        //podemos comprobar que el hijo ha recibido 'metodoPadre' como función
        console.log('props del hijo:', this.props);

        //ahora podemos ejecutarla asignandosela a cualquier evento 
        //por ejemplo al hacer click en el botón
        const saludo='soy el hijo';
        return (
            <button className='hijo' onClick={()=>this.props.metodoPadre(saludo)}>
                hijo
            </button>
        )
    }
}

export default Hijo
