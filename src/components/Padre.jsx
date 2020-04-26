import React, { Component } from 'react'
import Hijo from './Hijo'


export class Padre extends Component {

    /***********************
si declaramos la función de forma normal hay que hacer esto:

    constructor(props) {
        super(props);
        this.state = {
            miEstado: ''
        }
        this.metodoPadre = this.metodoPadre.bind(this);
    }
 */


    //en el padre está el método que queremos ejecutar desde el hijo y
    //aprovechar los resultados en el padre. Comprueba que el parámetro 
    //de la respuesta se lo da el hijo
    metodoPadre = (respuesta) => {
        const saludo = 'hola ' + respuesta;
        alert(saludo);
    }



    //al hijo le pasamos la función como un prop. 
    /****************
     * 
     * Dos puntualizaciones: el método hay que configurarlo como función flecha
     * o bien hay que ahcerle un bind en el constructor
     */
    render() {
        return (
            <div className='padre'>
                Este es el padre que contiene al hijo<br />
                <Hijo metodoPadre={this.metodoPadre} />
            </div>
        )
    }
}

export default Padre
